import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import ProductRoutes from './routes/ProductRoutes.js';
import  {errorHandler, notFound } from './middleware/errorHandler.js';
import UserRoutes from './routes/userRoutes.js'; 
import OrderRoutes from './routes/orderRoutes.js';
 


connectDB();

const app = express();

app.use(express.json());
app.use( express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send('Hello World!');
})

app.use("/api/products", ProductRoutes)
app.use("/api/users", UserRoutes)
app.use("/api/orders", OrderRoutes)



app.use(notFound)
app.use(errorHandler)





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});