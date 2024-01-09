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

  const message = req.body.message;
  todos.push({ id: todos.length + 1, message });
  res.send(todos);
});

app.listen(process.env.PORT || 3000, () => console.log("server is running"));
