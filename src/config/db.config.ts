import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DB_NAME || "whatsapp", // database name
  process.env.DB_USER || "postgres", // username
  process.env.DB_PASS || "", // password
  {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    dialect: "postgres",
    logging: false, // disable SQL logging
  }
);

// Test connection
export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ PostgreSQL connected successfully.");
  } catch (error) {
    console.error("❌ Unable to connect to PostgreSQL:", error);
  }
};
