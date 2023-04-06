const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const mysql = require("mysql2");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname + "/static")));

const sql = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "forms",
  })
  .promise();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/index.html");
});

app.post("/test", (req, res) => {
  const data = req.body;
  console.log(data);
  res.send("SUCCESS");
});

app.get("/get-data", async (req, res) => {
  const query = "select * from forms;";
  try {
    const [output] = await sql.query(query);
    console.log(output);
    res.send(output);
  } catch (error) {
    console.log(error);
    res.status(500).send("error");
  }
});

app.post("/post-data", async (req, res) => {
  const data = req.body;
  const query = `insert into forms(fname, lname, dob, email, phone, gender, 
                address2, district, state, nationality, zipcode) 
                values(?,?,?,?,?,?,?,?,?,?,?);`;
  try {
    await sql.query(query, [
      data.fname,
      data.lname,
      data.dob,
      data.email,
      data.phone,
      data.gender,
      data.address1,
      data.address2,
      data.district,
      data.state,
      data.nationality,
      data.zipcode,
    ]);
    console.log("success");
    res.send("success");
  } catch (error) {
    console.log(error);
    res.status(500).send("error");
  }
});

app.listen(5000, () => {
  console.log("LISTENEING TO THE PORT 5000");
});
