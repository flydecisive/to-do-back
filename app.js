const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());

const todos = [];

app.get("/todos", (req, res) => {
  res.send(todos);
});

app.post("/todos", (req, res) => {
  if (!req.body) return res.sendStatus(400);

  const task = req.body.task;
  const title = req.body.title;
  todos.push({ id: todos.length, title, task });
  res.send(todos);
});

// app.listen(process.env.PORT || 3000, () => console.log("server is running"));

module.exports = app;
