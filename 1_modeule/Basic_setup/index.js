import express from "express"
const app = express()

const port = 4000

app.get('/', (request, response)=>{
    return response.json("Hello World")
})

app.listen(port, ()=>{
    console.log(`Our app running on port ${port}`);
})