import express from "express";
import path from 'path'
import rootDir from '../util/path'

const route = express.Router()

route.use('/contactus', (req, res, next)=>{
  console.log("In perticular middleware");
  res.sendFile(path.join(rootDir, '../', 'views', 'contactus.html')) 
})

route.post('/contactus',(req, res)=>{
  console.log(req.body); 
  res.redirect('/')
})

export default route;