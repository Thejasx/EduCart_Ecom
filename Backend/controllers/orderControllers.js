import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/OrderModel.js";


const  addOrderitems = asyncHandler(async (req, res) => {
  res.send('Add order');
});

const  getOrderById = asyncHandler(async (req, res) => {
  res.send('Get order by ID');
});

const  updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send('Update order to paid');
});

const updateOrderToDelivered = asyncHandler(async (req, res) => {   
    res.send('Update order to delivered');
});

const  getMyOrders = asyncHandler(async (req, res) => {
  res.send('Get my orders');
});

const getAllOrders = asyncHandler(async (req, res) => {
  res.send('Get all orders');
});

export { addOrderitems, getOrderById, updateOrderToPaid, getMyOrders, getAllOrders, updateOrderToDelivered };
