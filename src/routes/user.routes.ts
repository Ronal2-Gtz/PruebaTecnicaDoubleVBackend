import { Router } from "express";
import { createUser, deleteUser, getUserById, getUsers } from "../controllers/user.controller";

const router = Router()

router.get('/', getUsers);
router.get('/:login', getUserById);
router.post('/', createUser);
router.delete('/:id', deleteUser);

export default router