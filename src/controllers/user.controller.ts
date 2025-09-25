import { Request, Response } from "express";
import * as UserService from "../services/user.service";

export const getUsers = async (req: Request, res: Response) => {
  const users = await UserService.getAllUsers();
  res.json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const user = await UserService.getUserById(Number(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await UserService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const updated = await UserService.updateUser(Number(req.params.id), req.body);
  if (!updated) return res.status(404).json({ message: "User not found" });
  res.json(updated);
};

export const deleteUser = async (req: Request, res: Response) => {
  const deleted = await UserService.deleteUser(Number(req.params.id));
  if (!deleted) return res.status(404).json({ message: "User not found" });
  res.status(204).send();
};
