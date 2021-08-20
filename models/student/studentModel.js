const path = require("path");
const fs = require("fs");
const { networkInterfaces } = require("os");

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
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "student.json"
    );
    let student = [];
    fs.readFile(p, (err, fileContent) => {
      if (!err) {
        student = JSON.parse(fileContent);
      }
      student.push(this);
      fs.writeFile(p, JSON.stringify(student), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "student.json"
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
};
