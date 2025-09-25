import { sequelize } from "../config/db.config";
import User from "./user.model";

export const initModels = async () => {
  await sequelize.sync({ alter: true }); // creates/updates tables
  console.log("✅ All models synced.");
};

export { User };
