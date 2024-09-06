import express from 'express';

const app = express(); 

const port = 4040;

app.use(express.urlencoded({ limit: '10mb', extended: true }))

app.use('/', (req, res, next)=>{
  console.log("This always run"); 
  next()
})

app.use('/add-product', (req, res, next)=>{
  console.log("In perticular middleware");
  res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add Product</button></form>') 
})

app.use('/product',(req, res)=>{
  console.log(req.body); 
  res.redirect('/')
})

app.use((req, res, next)=>{
  console.log("this is middleware for every route"); 
  next()
})

app.get('/', middleware1, middleware2, (req, res)=>{
  res.send("<h1>Welcome to Express JS</h1>")
})

function middleware1(req, res, next){
  console.log("first middleware check");
  next()
}
function middleware2(req, res, next){
  console.log("second middleware check");
  next()
}

app.listen(port , ()=>{
  console.log(`Your app running on port ${port}`);
})