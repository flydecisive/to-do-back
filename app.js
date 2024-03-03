const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

const todos = [];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  if (!req.body) return res.sendStatus(400);

  const task = req.body.title;
  const description = req.body.description;
  todos.push({ id: todos.length, task, description });
  res.json(todos);
});

// app.listen(process.env.PORT || 3000, () => console.log("server is running"));

module.exports = app;
