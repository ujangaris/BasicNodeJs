const path = require("path");
const fs = require("fs");
const { networkInterfaces } = require("os");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "student.json"
);

const getStudentFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Student {
  constructor(id, name, classs, nik, Image, gender, Address) {
    this.id = id;
    this.name = name;
    this.classs = classs;
    this.nik = nik;
    this.Image = Image;
    this.gender = gender;
    this.Address = Address;
  }
  save() {
    getStudentFromFile((student) => {
      if (this.id) {
        const studentindex = student.findIndex((stud) => stud.id === this.id);
        const updatedstudent = [...student];
        updatedstudent[studentindex] = this;
        fs.writeFile(p, JSON.stringify(updatedstudent), (err) => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        student.push(this);
        fs.writeFile(p, JSON.stringify(student), (err) => {
          console.log(err);
        });
      }
    });
  }

  static fetchAll(cb) {
    getStudentFromFile(cb);
  }
  static FindById(id, cb) {
    getStudentFromFile((students) => {
      const student = students.find((p) => p.id === id);
      cb(student);
    });
  }

  static deleteById(id) {
    getStudentFromFile((students) => {
      const studentDelete = students.filter((stud) => stud.id !== id);
      console.log(studentDelete);
    });
  }
};
