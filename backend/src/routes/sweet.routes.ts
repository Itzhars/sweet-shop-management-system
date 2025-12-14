import { Router } from "express";
import prisma from "../utils/prisma";
import { authMiddleware } from "../middleware/auth";

const router = Router();

/* ================= GET ALL SWEETS ================= */
router.get("/", authMiddleware, async (req, res) => {
  try {
    const sweets = await prisma.sweet.findMany();
    res.json(sweets);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch sweets" });
  }
});

/* ================= ADD SWEET ================= */
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { name, category, price, quantity } = req.body;

    const sweet = await prisma.sweet.create({
      data: { name, category, price, quantity },
    });

    res.status(201).json(sweet);
  } catch (error) {
    res.status(500).json({ message: "Failed to add sweet" });
  }
});

/* ================= UPDATE SWEET ================= */
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { name, category, price, quantity } = req.body;

    const updatedSweet = await prisma.sweet.update({
      where: { id },
      data: { name, category, price, quantity },
    });

    res.json(updatedSweet);
  } catch (error) {
    res.status(404).json({ message: "Sweet not found" });
  }
});

/* ================= DELETE SWEET ================= */
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const id = Number(req.params.id);

    await prisma.sweet.delete({
      where: { id },
    });

    res.json({ message: "Sweet deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Sweet not found" });
  }
});

export default router;

