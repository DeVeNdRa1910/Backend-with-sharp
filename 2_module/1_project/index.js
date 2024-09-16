import express from 'express';
import path from 'path'
import adminRoutes from './routes/admin.routes.js'
import shopRoutes from './routes/shop.routes.js'
import contactus from './routes/contactUs.routes.js'
const app = express(); 
const port = 4040;

app.use(express.urlencoded({ limit: '10mb', extended: true }))

app.use('/admin', adminRoutes)
app.use('/contactus', contactus)
app.use(shopRoutes)

app.use((req, res, next)=>{
  res.status(404).sendFile(path.join(__dirname, 'views', 'notFoundPage.html'))
})

app.listen(port , ()=>{
  console.log(`Your app running on port ${port}`);
})