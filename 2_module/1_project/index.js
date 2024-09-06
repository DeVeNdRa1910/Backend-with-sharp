import express from 'express';

import adminRoutes from './routes/admin.routes.js'
import shopRoutes from './routes/shop.routes.js'

const app = express(); 
const port = 4040;

app.use(express.urlencoded({ limit: '10mb', extended: true }))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res, next)=>{
  res.status(404).send('<h1>Error 404: Page not found !</h1>')
})

app.listen(port , ()=>{
  console.log(`Your app running on port ${port}`);
})