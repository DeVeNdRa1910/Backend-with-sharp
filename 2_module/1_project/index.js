import express from 'express';

const app = express(); 

const port = 4040;

app.get('/', middleware1, middleware2, (req, res)=>{
  res.send("<h1>Welcome to Express JS</h1>")
})

function middleware1(req, res, next){
  console.log("ffirst middleware check");
  next()
}
function middleware2(req, res, next){
  console.log("ffirst middleware check");
  next()
}

app.listen(port , ()=>{
  console.log(`Your app running on port ${port}`);
})