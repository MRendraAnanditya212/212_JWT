const db = require("../models");

const connectDB = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Database connected successfully.");
    await db.sequelize.sync();
    console.log("Database synchronized.");
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;