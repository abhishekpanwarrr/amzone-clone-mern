import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  orderItems: {
    type: Array,
    required: true,
  },
  razorpayOrderId: {
    type: String,
    required: true,
  },
  razorpayPaymentId: {
    type: String,
    required: true,
  },
  razorpaySignature: {
    type: String,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
});

const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;
