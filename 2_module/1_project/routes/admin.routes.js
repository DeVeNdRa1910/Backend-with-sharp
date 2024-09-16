import express from "express";
import path from 'path'
import rootDir from '../util/path.js'

const route = express.Router()

route.use('/add-product', (req, res, next)=>{
  console.log("In perticular middleware");
  res.sendFile(path.join(rootDir, '../', 'views', 'add-product.html')) 
})

route.post('/product',(req, res)=>{
  console.log(req.body); 
  res.redirect('/')
})

export default route;