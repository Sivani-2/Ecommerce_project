const express=require("express")
const app=express()
const cors =require("cors")
require("dotenv").config()
const port =process.env.PORT 
const connectDB =require("./config/db")
const authRoutes =require("./routes/auth")
const adminRoutes=require("./routes/adminAuth")
const productRoutes= require("./routes/productRoutes")
const cartRoutes=require("./routes/cartRoutes")
const paymentRoutes=require('./routes/paymentRoutes')

const corsOptions = {
    origin: "https://ecommerce-project-1-3001.onrender.com", // Allow frontend domain
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Allow cookies/auth headers
    allowedHeaders: ["Content-Type", "Authorization"], // Explicitly allow Authorization header
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions)); // Use CORS middleware

app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())
connectDB()
app.use("/api/auth",authRoutes)
app.use("/api/admin",adminRoutes)
app.use("/api/product",productRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api/payment",paymentRoutes)

app.listen(port,()=>console.log("Server is running on port:",port))