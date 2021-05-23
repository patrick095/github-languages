const express = require("express");
const usersController = require("./controllers/usersController");
const routes = express.Router();


routes.get('/', (req,res)=> res.send("hello word"));
routes.get('/user', usersController.getUserRepos)


module.exports= routes;