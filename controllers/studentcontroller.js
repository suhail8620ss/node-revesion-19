const Student = require('../models/Student');
     async function addStudent(req, res) {
          try {
               console.log(req.body);
               let student = new Student(req.body);
               await student.save();
               console.log(" data saves successfully........");
               res.end("Data Added...");
          } catch (err) {
               console.log(err);
          }
     }

async function getStudent(req, res) {
     try {
          let students = await Student.find({});
          console.log(students);
          res.send(students);
     } catch (err) {
          console.log(err);
     }
}
module.exports = {
     addStudent,
     getStudent
}