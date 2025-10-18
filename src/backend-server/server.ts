
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/productRoutes.ts';

dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.PROD_MONGO_URI;


const app = express();
app.use(express.json());



{/*app.use(cors());*/}  

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || origin.startsWith("http://localhost")) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // <-- this one
  allowedHeaders: ["Content-Type", "Authorization"],
}));                                          //CORS middleware before routes




// Use main API routes
app.use('/api', router);



mongoose.connect(MONGO_URI || '')
  .then(() => console.log('✅ Connected to database'))
  .catch(err => console.error('❌ Connection error:', err));

mongoose.connection.once("open", () => {
  console.log("✅ Mongoose connection OPEN");
});

mongoose.connection.on("error", (err) => {
  console.error("❌ Mongoose connection ERROR:", err);
});



app.listen(PORT, () => {
  console.log(`Now listening for request on port ${PORT}`);
});
