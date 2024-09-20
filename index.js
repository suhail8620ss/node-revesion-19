const express = require('express');
let connection = require('./connection');
const student = require('./routes/student');
const app = express();
connection();
app.use(student);
app.listen(4000, (err) => {
     if(err) {
          console.log(err);
     } else {
          console.log("Server is running on 4000 PORT.....");
     }
})