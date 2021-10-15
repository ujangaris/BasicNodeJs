const db = require("../../utils/database");

module.exports = class Assessment {
  constructor(id, student_id, score) {
    this.id = id;
    this.student_id = student_id;
    this.score = score;
  }

  save() {
    return db.execute(
      "INSERT INTO assessment (student_id, score) VALUES (?,?)",
      [this.student_id, this.score]
    );
  }

  static fetcAll() {
    return db.execute(
      "SELECT am.id,am.score,st.name,st.classs,st.nik,st.gender,st.Address,st.Image FROM assessment am JOIN student st ON am.student_id=st.id"
    );
  }
};
