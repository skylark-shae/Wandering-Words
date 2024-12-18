import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../../controllers/user-controller.js";

const router = express.Router();
import auth from '../../middleware/auth.js'

router.get("/", getAllUsers);

router.get("/:id", getUserById);

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", auth, deleteUser);

router.delete('/:id', auth, deleteUser);

export { router as userRouter };
