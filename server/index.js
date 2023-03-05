// server/index.js

const express = require("express");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Hello King");
})

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server! The King will be back soon!!" });
});

app.post("/post", (req, res) => {
  console.log("Connected to React");
  console.log(req.body.name);
  res.json({ message: "Hello " + req.body.name });
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
