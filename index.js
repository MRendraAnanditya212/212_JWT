require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const apiRoutes = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Prefix endpoint API
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("Server API Komik Pertemuan 11 berjalan!");
});

// Hubungkan database lalu jalankan server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});