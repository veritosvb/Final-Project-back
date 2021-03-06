const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/yelldb"
);

const userSeed = [
  {
    username: "elizabeth",
    email:"e.jimenezaquino@live.com",
    twitch:"ejimeneztwich",
    steam:"ejimeneztwich",
    score:5,
    about:"Candy Crushhhhhh",
    url:"https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/7.png", 
    about:"Excelente Jugadora. la mejor",
    comment:"Veronicas comments "
  },
  {
    username: "Veronica Velez",
    email:"vero.velez@gmail.com",
    twitch:"veritosvb",
    steam:"steamuser",
    score:5,
    about:"Candy Crushhhhhh",
    url:"https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/10.png", 
    about:"Excelente Jugadora. la mejor"
  }
];

const gameSeed = [
  { name: "Street Fighter 5", category:	 "Fighting games", idTwitch: ""},
  { name:"World of Warcraft", category:"MMO", idTwitch: "59498"},
  { name:"GTA V", category:"Open World", idTwitch: "32982"},
  { name:"Destiny 2", category:"First-person-shooters", idTwitch: "497057" },
  { name:"FIFA 19", category: "Sports", idTwitch:"506103"},
  { name:"PLAYERUNKNOWN'S BATTLEGROUND", category:"First-person-shooters", idTwitch: "59498" },
  { name: "Marvel vs Capcom", category:	 "Fighting games"},
  { name: "Killer Instinct",category:	 "Fighting games"},
  { name: "Doom", category: "First-person shooters"},
  { name: "Quake", category: "First-person shooters"},
  { name: "Counter-Strike GO", category: "First-person shooters",  idTwitch: "32399"},
  { name: "Call of Duty series", category: "First-person shooters"},
  { name: "Unreal Tournament", category: "First-person shooters"},
  { name: "Halo series", category: "First-person shooters"},
  { name: "Painkiller", category: "First-person shooters"},
  { name: "Battlefield series", category: "First-person shooters"},
  { name: "CrossFire", category: "First-person shooters"},
  { name: "Overwatch", category: "First-person shooters"},
  { name: "Team Fortress 2", category: "First-person shooters"},
  { name: "Rainbow Six: Siege", category: "First-person shooters"},
  { name: "Alliance of Valiant Arms", category: "First-person shooters"},
  { name: "Special Force II", category: "First-person shooters"},
  { name: "StarCraft: Brood War", category: "Real-time strategy"},
  { name: "Warcraft III", category: "Real-time strategy"},
  { name: "StarCraft II", category: "Real-time strategy"},
  { name: "FIFA series", category: "Sports games"},
  { name: "Madden", category: "Sports games"},
  { name: "NBA 2K", category: "Sports games"},
  { name: "Pro Evolution Soccer", category: "Sports games"},
  { name: "Rocket League", category: "Sports games"},
  { name: "Real Subspace Hockey League", category: "Sports games"},
  { name: "iRacing", category: "Racing" },
  { name: "Project CARS", category: "Racing" },
  { name: "Trackmania", category: "Racing" },
  { name: "Dota 2", category: "Multiplayer online battle arena" ,  idTwitch: "29595" },
  { name: "League of Legends", category: "Multiplayer online battle arena" ,  idTwitch: "21779" },
  { name: "Heroes of the Storm", category: "Multiplayer online battle arena" },
  { name: "Heroes of Newerth", category: "Multiplayer online battle arena" },
  { name: "Smite", category: "Multiplayer online battle arena" },
  { name: "Vainglory", category: "Multiplayer online battle arena" },
  { name: "EndGods",category:"others"},
  { name: "Guild Wars 2",category:"others"},
  { name: "Gears of War",category:"others"},
  { name: "War Thunder",category:"others"},
  { name: "World of Tanks",category:"others"},
  { name: "World of Warcraft",category:"others"},
  { name: "Hearthstone",category:"Card Games"},
  { name: "Pokémon",category:"others"},
  { name: "Puyo Puyo",category:"others"},
  { name: "Tetris",category:"others"},
  { name: "Splatoon",category:"others"},
  { name: "Fortnite",category:"Multiplayer online battle arena" ,  idTwitch: "33214"},
];

const favGamesSeed = [
{username: "veritosvb",
favorite: "Tetris"},
{username: "veritosvb",
favorite: "Smite"},
{username: "veritosvb",
favorite: "NBA 2K"},
{username: "elizabeth",
favorite: "NBA 2K"},
{username: "elizabeth",
favorite: "Splatoon"},
{username: "elizabeth",
favorite: "Pokémon"},
];

db.Players
  .deleteMany({})
  .then(() => db.Players.collection.insertMany(userSeed))
  .then(data => {
    console.log("Player" +data.result.n + " records inserted!");
  
  })
  .catch(err => {
    console.error(err);

  });

  db.favGames
  .deleteMany({})
  .then(() => db.favGames.collection.insertMany(favGamesSeed))
  .then(data => {
    console.log("Fav Games" + data.result.n + " records inserted!"); 
  })
  .catch(err => {
    console.error(err);
   
  });


  db.Games
  .deleteMany({})
  .then(() => db.Games.collection.insertMany(gameSeed))
  .then(data => {
    console.log("Games" +data.result.n + " records inserted!");
  process.exit(0);
  })
  .catch(err => {
    console.error(err);
  });

  