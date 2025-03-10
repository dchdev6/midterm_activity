const { Sequelize, DataTypes } = require("sequelize");
const mysql = require("mysql2/promise");
const express = require("express");

const DATABASE_NAME = "user_db";
const DB_USER = "root";
const DB_PASSWORD = "";
const DB_HOST = "127.0.0.1"; // Used 127.0.0.1 instead of localhost

const app = express();
const PORT = 3000;

// Function to create database if it doesn't exist
async function createDatabase() {
    const connection = await mysql.createConnection({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD
    });

    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DATABASE_NAME}\`;`);
    console.log(`Database '${DATABASE_NAME}' is ready.`);
    await connection.end();
}

// Initialize Sequelize and define the model
async function initializeSequelize() {
    await createDatabase(); // Ensure database exists before connecting

    const sequelize = new Sequelize(DATABASE_NAME, DB_USER, DB_PASSWORD, {
        host: DB_HOST,
        dialect: "mysql",
        logging: false // Disable logging for cleaner output
    });

    // Define the Users model
    const User = sequelize.define("User", {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        status: { type: DataTypes.STRING, allowNull: false }
    }, { timestamps: false });

    await sequelize.sync(); // Ensures tables are created

    console.log("Database synced and ready!");

    return { sequelize, User };
}

// Start the server after Sequelize initializes
async function startServer() {
    const { User } = await initializeSequelize();

    app.get("/users", async (req, res) => {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch users" });
        }
    });

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

startServer().catch(err => console.error("Error starting app:", err));
