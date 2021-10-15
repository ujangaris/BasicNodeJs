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
  constructor(name, classs, nik, Image, gender, Address) {
    this.name = name;
    this.classs = classs;
    this.nik = nik;
    this.Image = Image;
    this.gender = gender;
    this.Address = Address;
  }
  save() {
    this.id = Math.random().toString();
    getStudentFromFile((student) => {
      student.push(this);
      fs.writeFile(p, JSON.stringify(student), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getStudentFromFile(cb);
  }
};
