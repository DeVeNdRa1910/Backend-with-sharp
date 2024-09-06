import express from "express";

const route = express.Router();

route.get('/', (req, res)=>{
  res.send('<h1>Welcome to Express JS</h1>');
})

export default route;