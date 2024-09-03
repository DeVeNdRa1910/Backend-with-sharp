import express from express;

const app = express();

const port = 4000

app.get('/', (res)=>{
  res.json("ROOT page")
})
app.get('/home', (res)=>{
  res.json("Welcome home")
})
app.get('/about', (res)=>{
  res.json("Welcome to About Us page")
})
app.get('/node', (res)=>{
  res.json("Welcome to my Node Js project")
})

app.listen(4000, ()=>{
  console.log("your server is running on port ", port);
  
})