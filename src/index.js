import express from 'express'
import "./config/db.js";
import authRoutes from "./routes/auth.routes.js";


const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");

});

app.get("/", (req, res) => {
  res.send("Welcome to the Auth API");
});

app.get("/route1", (req, res) => {
  res.send("this is route1");
});
