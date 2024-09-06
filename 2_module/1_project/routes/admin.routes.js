import express from "express";

const route = express.Router()

route.use('/add-product', (req, res, next)=>{
  console.log("In perticular middleware");
  res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add Product</button></form>') 
})

route.post('/product',(req, res)=>{
  console.log(req.body); 
  res.redirect('/')
})

export default route;