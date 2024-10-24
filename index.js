// import { error } from "console";
// import { error } from "console";
// import fs from "fs";
// 1

// fs.appendFile("text.txt", "HELLO", (error) => {
//   if (error) console.log(error);
//   console.log("done");
// });

// fs.unlink("text.txt", (error, file) => {
//   if (error) console.log(error);
//   console.log("deletde");
// });

// fs.readFile("text.txt", "utf8", (error, file) => {
//   console.log(file);
// });

// 2

// fs.appendFile("hello.txt", "pinecone", (error) => {
//   if (error) console.log(error);
//   console.log("oke");
// });

// fs.readFile("hello.txt", "utf8", (error, file2) => {
//   console.log(file2);
// });

// fs.unlink("hello.txt", (error, file2) => {
//   if (error) console.log(error);
//   console.log("deleted");
// });

// 3
// fs.appendFile("New.js", "const a = HEllO console.log(a)", (error) => {
//   if (error) console.log(error);
//   console.log("amjilttai");
// });

// fs.readFile("New.js", "utf8", (error, file) => {
//   console.log(file);
// });

// const fs = require("fs");

// fs.unlink("text.txt", (error, file) => {
//   if (error) console.log(error);
//   console.log("deleted");
// });

// fs.readFile("index.html", "utf8", (error, file) => {
//   res.write(file);
//   res.end();
// });
const http = require("http");
const fs = require("fs");

const users = [
  {
    id: 1,
    name: "Jack",
    age: 20,
    height: 170,
    country: "German",
  },
  {
    id: 2,
    name: "Lizz",
    age: 17,
    height: 165,
    country: "USA",
  },
  {
    id: 3,
    name: "Josef",
    age: 27,
    height: 180,
    country: "France",
  },
  {
    id: 4,
    name: "El",
    age: 40,
    height: 154,
    country: "Brazil",
  },
];

const server = http.createServer((req, res) => {
  const url = req.url;
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  if (url.startsWith("/users?id=")) {
    const id = url.split("=")[1];
    const user = users.find((user) => user.id === Number(id));
    if (user) {
      res.write(JSON.stringify(user));
    } else {
      res.write(JSON.stringify({ message: "user not found" }));
    }
  } else {
    if (url === "/users") {
      res.write(JSON.stringify(users));
    }
  }
  res.end();
});
server.listen(8080, console.log("your sever runninig"));
