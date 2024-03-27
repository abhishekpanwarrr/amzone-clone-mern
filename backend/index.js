const express = require("express");
const dotenv = require("dotenv");
const Razorpay = require("razorpay");
const cors = require("cors");

const app = express();
dotenv.config();
const port = 8000;
console.log("process", process.env.RAZORPAY_SECRET);
// middlewares
app.use(express.json({ extended: false }));
app.use(cors());
app.listen(8000, () => console.log(`server started on port ${port}`));

app.post("/orders", async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = {
      amount: 50000, // amount in smallest currency unit
      currency: "INR",
      receipt: "receipt_order_74394",
    };

    const order = await instance.orders.create(options);

    if (!order) return res.status(500).send("Some error occured");

    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});
