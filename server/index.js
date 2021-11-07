const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["You will win the lottery",
          "Great food will fall from the sky",
        "Your house will disapear next time you leave",
        "A good time to finish up old tasks", 
        "Advice, when most needed, is least heeded."]



  // let randoIndex = Math.floor(Math.random() * fortunes.length)
  // let randoFort = fortunes[randoIndex]

  res.status(200).send(fortunes)
})

app.post("/api/quotes", (req, res) => {
  arr = []
  arr.push(res)
  res.status(200).send(req)
})
  


app.listen(4000, () => console.log("Server running on 4000"));
