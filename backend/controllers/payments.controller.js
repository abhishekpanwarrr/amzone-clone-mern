import Razorpay from "razorpay";
import crypto from "crypto";

const createOrder = async (req, res) => {
  const { amount, orderId } = req.body;
  console.log("req.body.amount", amount);
  console.log("req.body.orderId", orderId);

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
  });
  const options = {
    amount: req.body.amount,
    currency: "INR",
    receipt: crypto.randomBytes(10).toString("hex"),
    payment_capture: 1,
  };
  try {
    const order = await razorpay.orders.create(options);
    if (!order) return res.status(500).send("Some error occured");

    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).send("Not able to create order. Please try again!");
  }
};

// const paymentCapture = async (req, res) => {
//   // do a validation
//   const data = crypto.createHmac("sha256", secret_key);
//   data.update(JSON.stringify(req.body));
//   const digest = data.digest("hex");
//   if (digest === req.headers["x-razorpay-signature"]) {
//     console.log("request is legit");
//     res.json({
//       status: "ok",
//     });
//   } else {
//     res.status(400).send("Invalid signature");
//   }
// };

const checkSuccess = async (req, res) => {
  try {
    const {
      orderCreationId,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
    } = req.body;
    console.log("🚀 ~ checkSuccess ~ razorpaySignature:", razorpaySignature);
    console.log("🚀 ~ checkSuccess ~ razorpayOrderId:", razorpayOrderId);
    console.log("🚀 ~ checkSuccess ~ razorpayPaymentId:", razorpayPaymentId);
    console.log("🚀 ~ checkSuccess ~ orderCreationId:", orderCreationId);
    const sign = razorpayOrderId + "|" + razorpayPaymentId;
    // const shasum = await crypto.createHmac("sha256", "w2lBtgmeuDUfnJVp43UpcaiT");
    // console.log("🚀 ~ checkSuccess ~ shasum:", shasum);
    const expectedSign = crypto
      .createHmac("sha256", process.env.KEY_SECRET)
      .update(sign.toString())
      .digest("hex");
    shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

    // const digest = await shasum.digest("hex");
    // console.log("🚀 ~ checkSuccess ~ digest:", digest);

    // if (digest !== razorpaySignature)
    //   return res.status(400).json({ msg: "Transaction not legit!" });
    if (razorpaySignature === expectedSign) {
      return res.status(200).json({
        msg: "success",
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
      });
    } else {
      return res.status(400).json({ message: "Invalid signature sent!" });
    }
    // res.status(200).json({
    //   msg: "success",
    //   orderId: razorpayOrderId,
    //   paymentId: razorpayPaymentId,
    // });
  } catch (error) {
    res.status(500).send(error);
  }
};
export { createOrder, checkSuccess };
