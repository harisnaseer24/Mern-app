const fs = require('fs');
// const index = fs.readFileSync("./index.html", "utf-8");
const path=require('path');
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname,"../data.json"), "utf-8"));
const users = data.users;

exports.getAllModels = (req, res) => {
  res.json(users);
};

exports.getModel = (req, res) => {
  let user = users.find((p) => p.id === +req.params.id);
  console.log(user);
  res.send(user);
};

exports.createModel = (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.json(req.body);
};
exports.replaceModel = (req, res) => {
  console.log(req.params.id);
  const id = +req.params.id;
  let userIndex = users.findIndex((p) => p.id === id);
  console.log(userIndex);

  users.splice(userIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};

exports.updateModel = (req, res) => {
  console.log(req.params.id);
  const id = +req.params.id;

  let userIndex = users.findIndex((p) => p.id === id);
  let user = users[userIndex];

  users.splice(userIndex, 1, { ...user, ...req.body });
  res.status(201).json();
};

exports.deleteModel = (req, res) => {
  const id = +req.params.id;
  let userIndex = users.findIndex((p) => p.id === id);
  let user = users[userIndex];

  users.splice(userIndex, 1);
  res.status(200).json(user);
};
