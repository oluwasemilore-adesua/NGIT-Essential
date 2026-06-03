const express = require('express');
const userRouter = require("./src/routes/users/user.routes");
const productRouter = require("./src/routes/products/product.routes");
const cartRouter = require("./src/routes/carts/cart.routes");
const orderRouter = require("./src/routes/orders/order.routes");
const dotenv = require('dotenv');
const connectDB = require(`./src/db/index`);
const errorHandler = require(`./src/middlewares/error.middleware`);
const {fetchFromApi, fetchFromApiWithAxios} = require("./src/utils/api");

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", userRouter);

app.use("/api/products", productRouter);

app.use("/api/cart", cartRouter);

app.use("/api/orders", orderRouter);

app.get("/test-external-api", async (req, res, next) => {
    try {
        const data = await fetchFromApi();
        res.json(data);
    } catch (error) {
        console.error("Error fetching from external API:", error);
        next(error); 
    }
});

app.get("/test-external-api-axios", async (req, res, next) => {
  try {
    const data = await fetchFromApiWithAxios();
    res.json(data);
  } catch (error) {
    console.error("Error fetching from external API:", error);
    next(error);
  }
});
app.use (errorHandler);

 
 

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server is running on port ${PORT}`);
});

