import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.config";

class Chat extends Model {
  public id!: number;
  public sender_id!: number;
  public receiver_id!: number;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public deleted_at!: Date | null;
}

Chat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    sender_id: {
      type: new DataTypes.BIGINT(),
      allowNull: false,
    },
    receiver_id: {
      type: new DataTypes.BIGINT(),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "chats",
    timestamps: true, // enables createdAt & updatedAt
    paranoid: true, // enables deletedAt (soft deletes)
    underscored: true, // snake_case column names
  }
);

export default Chat;
