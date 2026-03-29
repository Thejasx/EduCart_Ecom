import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/user.js";
import products from "./data/products.js";
import Product from "./models/ProductModel.js";
import User from "./models/UserModel.js";
import Order from "./models/OrderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importdata = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    await Order.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((Product) => {
      return { ...Product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);

    console.log("Data Imported");
    process.exit();
  } catch (error) {
    console.error("Error importing data:", error);
    process.exit(1);
  }
};



const destroydata = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    await Order.deleteMany();
    console.log("Data Deleted");
    process.exit();

  } catch (error) {
    console.error("Error destroying data:", error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroydata();
} else {
  importdata();
}
