const Order = require('../models/orders');

// Get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving orders from the database.' });
  }
};

// Create order (no auth check)
const createOrder = async (req, res) => {
  try {
    const userId = "17"; // dummy user id
    
    const { sender, packageDetails } = req.body;

    // your validation logic here...

    const order = await Order.create({
      user_id: userId,    // use dummy ID here
      destination_address: packageDetails.deliveryAddress,
      goods_description: packageDetails.description,
      receiver_phone: packageDetails.recipientPhone,
      receiver_name: packageDetails.recipientName,
      sender_name: sender.name,
      sender_email: sender.email,
      sender_phone: sender.phone,
      package_category: packageDetails.category,
      weight: packageDetails.weight || null,
      dimensions: packageDetails.size || null
    });

    return res.status(201).json({
      message: 'Order placed successfully',
      order
    });
  } catch (error) {
    console.error("Order creation error:", error);
    // error handling
  }
};


// Update order
const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ error: 'Order not found.' });

    const allowedUpdates = [
      'destination_address',
      'goods_description',
      'receiver_phone',
      'receiver_name',
      'sender_name',
      'sender_email',
      'sender_phone',
      'package_category',
      'weight',
      'dimensions'
    ];

    const updates = {};
    Object.keys(req.body).forEach(key => {
      if (allowedUpdates.includes(key)) {
        updates[key] = req.body[key];
      }
    });

    await order.update(updates);
    res.json({ 
      message: 'Order updated successfully',
      order
    });
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete order
const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ error: 'Order not found.' });

    await order.destroy();
    res.json({ 
      message: 'Order deleted successfully',
      order
    });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting order.' });
  }
};

// Get order by ID
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ error: 'Order not found.' });

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving order.' });
  }
};

module.exports = { getAllOrders, createOrder, updateOrder, deleteOrder, getOrderById };
