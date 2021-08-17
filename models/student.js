const student = [];

module.exports = class Student {
  constructor(t) {
    this.student = t;
  }

  save() {
    student.push(this);
  }

  static fetchAll() {
    return student;
  }
};
