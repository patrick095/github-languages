const express = require("express");
const userController = require("./controllers/userController");
const routes = express.Router();


routes.get('/', (req,res)=> res.send("API Github Languages"));
routes.get('/authuser', userController.getAuthUserRepos);
routes.get('/user', userController.getUserRepos);
routes.get('/getlimit', userController.getLimit);


module.exports= routes;
