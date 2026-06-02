const express = require("express");
const router = express.Router();

const Razorpay = require("razorpay");

const Listing = require("../models/listing");

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.post("/create-order/:id", async (req, res) => {

    const listing = await Listing.findById(req.params.id);

    const days = Number(req.body.days);

    const totalPrice = listing.price * days;

    const options = {
        amount: totalPrice * 100,
        currency: "INR",
    };

    const order = await razorpay.orders.create(options);

    res.render("listings/payment.ejs", {
    order,
    listing,
    key_id: process.env.RAZORPAY_KEY_ID,
    totalPrice,
    days,
    curruser: req.user
});
});

module.exports = router;