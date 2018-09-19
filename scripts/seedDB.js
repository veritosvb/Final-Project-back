const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/yell"
);

const userSeed = [
  {
    username:"Elizabeth",
    email:"e.jimenezaquino@live.com",
    twitch:"ejimeneztwich",
    steam:"ejimeneztwich",
    score:5,
    about:"Candy Crushhhhhh",
    url:"www.google.com" 
  },
  {
    username:"Veronica Velez",
    email:"vero.velez@gmail.com",
    twitch:"veritosvb",
    steam:"steamuser",
    score:1,
    about:"Candy Crushhhhhh",
    url:"www.google.com" 
  }
];

db.Players
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
