import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.config";

class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public deleted_at!: Date | null;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: true, // enables createdAt & updatedAt
    paranoid: true, // enables deletedAt (soft deletes)
    underscored: true, // snake_case column names
  }
);

export default User;