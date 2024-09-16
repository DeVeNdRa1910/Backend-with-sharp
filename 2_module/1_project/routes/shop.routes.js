import express from "express";
import path from 'path' 
import rootDir from '../util/path.js'

const route = express.Router();

route.get('/', (req, res)=>{
  res.sendFile(path.join(rootDir, '../', 'views', 'shop.html'));
})

export default route;