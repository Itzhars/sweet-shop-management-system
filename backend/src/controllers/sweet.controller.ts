import { Request, Response } from "express";
import prisma from "../utils/prisma";

export const getAllSweets = async (_req: Request, res: Response) => {
  const sweets = await prisma.sweet.findMany();
  res.json(sweets);
};

export const createSweet = async (req: Request, res: Response) => {
  const { name, category, price, quantity } = req.body;

  const sweet = await prisma.sweet.create({
    data: { name, category, price, quantity },
  });

  res.json(sweet);
};

export const updateSweet = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { name, category, price, quantity } = req.body;

  const sweet = await prisma.sweet.update({
    where: { id },
    data: { name, category, price, quantity },
  });

  res.json(sweet);
};

export const deleteSweet = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  await prisma.sweet.delete({
    where: { id },
  });

  res.json({ message: "Sweet deleted" });
};
