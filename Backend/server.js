import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import ProductRoutes from './routes/ProductRoutes.js';
import  {errorHandler, notFound } from './middleware/errorHandler.js';

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send('Hello World!');
})

app.use("/api/products", ProductRoutes)



app.use(notFound)
app.use(errorHandler)





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});