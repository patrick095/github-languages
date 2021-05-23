const express = require("express");
const userController = require("./controllers/userController");
const routes = express.Router();


routes.get('/', (req,res)=> res.send("hello word"));
routes.get('/authuser', userController.getAuthUserRepos);
routes.get('/user', userController.getUserRepos);


module.exports= routes;