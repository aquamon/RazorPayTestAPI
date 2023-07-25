const express = require("express");
const Razorpay = require("razorpay");
const shortid = require("shortid");
const cors = require("cors");

//--------Set up Express------------

const app = express();

app.use(cors());

const razorpay = new Razorpay({
  key_id:'rzp_test_6RuEOXWKBY54Qr',
  key_secret: 'WiJe8XFzd2DFHvFdjzjERFqJ',
  //For test purpose keeping this credentials here.
  //Else put it in env file and do not share this
});

app.use(express.urlencoded({ extended: true }));

app.post("/order", async (req, res) => {
    let options = {
      amount: 10000,
      currency: "INR",
      receipt: shortid.generate(),
    };
    const order = await razorpay.orders.create(options, function (err, order) {
      console.log(order);
      res.json(order);
    });
  });

app.listen(8801, () => console.log("Running on port 8801"));