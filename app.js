if(process.env.NODE_ENV != "production"){
  require("dotenv").config();
// process.env.
}
const paymentRouter = require("./Routes/payment");
const express = require("express");
const app = express();


const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");//help to create diff templates for diff pages
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema} = require("./schema.js");
const {reviewSchema} = require("./schema.js");
const Review = require("./models/review.js");
const listingRouter = require("./Routes/listing.js");
const reviewRouter = require("./Routes/review.js");
const userRouter = require("./Routes/user.js");
const session = require("express-session");//to store some temp data while we are on one site loggedin any other page also we ARE LOGGED IN SESSionid store through cookie
const flash = require("connect-flash");//if we add something to get msg
const passport = require("passport");//kisi bhi trh ke authentication ke liye facebook se username se etc
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const multer = require("multer");

// const MongoStore = require("connect-mongo");


app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/payment", paymentRouter);
const dbUrl = process.env.ATLASDB_URL;

// const store = MongoStore.create({
//   mongoUrl: dbUrl,
//   crypto: {
//     secret:"mysecretkey",
//   },
//   touchAfter: 24 * 3600,
// });

// store.on("error",(err) => {
//   console.log("ERROR in MONGO SESSION STORE",err)
// })

const sessionOptions = {
  secret: "mysecretkey",
  resave: false,
  saveUninitialized:true,
  cookie:{
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge : 7 * 24 * 60 * 60 * 1000,
    httpOnly:true,// prevent cross-scripting attacks
  }
}

app.use(session(sessionOptions));//ek session create hoti hai and store in cookie
app.use(flash());

//just baad kyu of session

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser());//removing from session


app.use((req,res,next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.curruser = req.user;
  next();
})//middleware to make curruser available in all templates and also success and error messages


main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}


app.get("/", (req, res) => {
  res.render("listings/home");
});


app.use("/",userRouter);
app.use("/listings" , listingRouter);
app.use("/listings/:id/reviews",reviewRouter);



app.all("*" , (req,res ,next)=>{
  next(new ExpressError(404,"Page Not Found"));
});



app.use((err,req,res,next) => {
  let {statusCode=500 , message="something went wrong"} = err;
  // res.send(message);
  console.log(message);
  res.render("error.ejs", {err});
});

app.listen(8080,()=>{
    console.log("server is listening to port 8080")
})


