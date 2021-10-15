const db = require("../../utils/database");

module.exports = class Assessment {
  constructor(student_id, score) {
    this.student_id = student_id;
    this.score = score;
  }

  save() {}

  static fetcAll() {
    return db.execute(
      "SELECT am.id,am.score,st.name,st.classs,st.nik,st.gender,st.Address,st.Image FROM assessment am JOIN student st ON am.student_id=st.id"
    );
  }
};
