const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const dbConnection = require("./config/database");
const productRouter = require("./routes/productRoute");
const ApiError = require("./utils/apiError");

dotenv.config({ path: "config.env" });

//connection with db
dbConnection();

//express app
const app = express();

//Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, "uploads")));

//routes
app.use("/e-commerce/app", productRouter);
app.all("*", (req, res, next) => {
  next(new ApiError("can’t find this route", 400));
});

// Global Error Handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    status: err.status,
    message: message,
    stack: err.stack,
  });
});

const PORT = process.env.port || 8000;
app.listen(PORT, () => {
  console.log(`app runnig in : ${PORT}`);
});
