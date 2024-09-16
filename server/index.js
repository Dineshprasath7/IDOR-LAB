const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const User = require("./model/User");
const app = express();

app.use(cookieParser());
app.use(cors({
  origin: true,
  credentials: true
}));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

let users = [
  { id: 5000, name: "John Doe", phn_num: "1234567890", clg: "ABC University", country: "USA", role_id: "admin", role: "Admin" },
  { id: 5001, name: "Jane Smith", phn_num: "0987654321", clg: "XYZ College", country: "UK", role_id: "student", role: "Student" },
  { id: 5002, name: "Alice Johnson", phn_num: "1111111111", clg: "Tech Institute", country: "Canada", role_id: "developer", role: "Developer" },
  { id: 5003, name: "Bob Brown", phn_num: "2222222222", clg: "DEF University", country: "Australia", role_id: "teacher", role: "Teacher" },
  { id: 5004, name: "Charlie Black", phn_num: "3333333333", clg: "GHI University", country: "India", role_id: "admin", role: "Admin" },
  { id: 5005, name: "Diana Green", phn_num: "4444444444", clg: "JKL College", country: "Germany", role_id: "student", role: "Student" },
  { id: 5006, name: "Edward White", phn_num: "5555555555", clg: "MNO Institute", country: "France", role_id: "developer", role: "Developer" },
  { id: 5007, name: "Fiona Blue", phn_num: "6666666666", clg: "PQR University", country: "Japan", role_id: "admin", role: "Admin" },
  { id: 5008, name: "George Yellow", phn_num: "7777777777", clg: "STU College", country: "South Korea", role_id: "teacher", role: "Teacher" },
  { id: 5009, name: "Hannah Red", phn_num: "8888888888", clg: "VWX University", country: "Italy", role_id: "student", role: "Student" },
  { id: 5010, name: "Axios", phn_num: "111111111", clg: "PSG college of Technology", country: "India", role_id: "staff", role: "BreachPoint{o012_1d3rc7_d5n3}" },
  { id: 5011, name: "Julia Brown", phn_num: "1010101010", clg: "XYZ College", country: "Brazil", role_id: "admin", role: "Admin" },
  { id: 5012, name: "Kevin Black", phn_num: "2020202020", clg: "Tech Institute", country: "Netherlands", role_id: "student", role: "Student" },
  { id: 5013, name: "Laura White", phn_num: "3030303030", clg: "DEF University", country: "Norway", role_id: "teacher", role: "Teacher" },
  { id: 5014, name: "Michael Green", phn_num: "4040404040", clg: "GHI University", country: "Mexico", role_id: "admin", role: "Admin" },
  { id: 5015, name: "Nancy Pink", phn_num: "5050505050", clg: "JKL College", country: "Russia", role_id: "student", role: "Student" },
  { id: 5016, name: "Oliver Violet", phn_num: "6060606060", clg: "MNO Institute", country: "China", role_id: "developer", role: "Developer" },
  { id: 5017, name: "Paula Orange", phn_num: "7070707070", clg: "PQR University", country: "India", role_id: "teacher", role: "Teacher" },
  { id: 5018, name: "Quincy Silver", phn_num: "8080808080", clg: "STU College", country: "Argentina", role_id: "admin", role: "Admin" },
  { id: 5019, name: "Rachel Gold", phn_num: "9090909090", clg: "VWX University", country: "South Africa", role_id: "student", role: "Student" }
];

const getdetails = (id) => {
  return users.find((user) => user.id === id);
}

let currentId = 5000;

const getUniqueId = () => {
  while (users.some(user => user.id === currentId)) {
    currentId++;
    if (currentId > 10000) {
      throw new Error("ID limit exceeded");
    }
  }
  return currentId++;
};


const base64Encode = (text) => {
  return Buffer.from(text).toString('base64');
}

const base64Decode = (text) => {
  return Buffer.from(text, 'base64').toString('utf-8');
}


app.post("/api/details", (req, res) => {
  const { name, phn_num, clg, country, role_id, role } = req.body;

  if (!name || !phn_num || !clg || !role_id || !country || !role) {
    return res.status(400).send({ message: "All fields are required." });
  }

  const newUser = new User(
    getUniqueId(),
    name,
    phn_num,
    clg,
    country,
    role_id,
    role
  );

  users.push(newUser);

  const encodedId = base64Encode(String(newUser.id));

  res.cookie("id", encodedId, {
    httpOnly: true,
    secure: true,
  }).status(200).send();
});

app.get("/api/getdetails", (req, res) => {
  const { id } = req.cookies;
  if (!id) {
    return res.status(404).send({ message: "No Cookie" });
  }

  try {
    const decodedId = base64Decode(id);
    const user = getdetails(Number(decodedId));

    if (user) {
      res.status(200).json({ user: user });
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (err) {
    res.status(400).send({ message: "Invalid cookie" });
  }
});


app.get("/api/allusers", (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server is running at 3000");
});
