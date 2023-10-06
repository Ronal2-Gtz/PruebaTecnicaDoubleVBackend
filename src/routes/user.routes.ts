import { Router } from "express";
import {  validateFields } from "../middlewares/validateFields";
import { createUser, deleteUser, getUserById, getUsers } from "../controllers/user.controller";
import { check } from "express-validator";

const router = Router()

router.get('/', getUsers);
router.get('/:login', getUserById);
router.post('/', [
    check('name', 'The name is required').not().isEmpty(),
    check('login', 'The login is required').not().isEmpty(),
    check('public_repos', 'The public repos is required').not().isEmpty(),
    check('followers', 'The followers is required').not().isEmpty(),
    check('following', 'The following is required').not().isEmpty(),
    check('avatar_url', 'The avatar_url is required').not().isEmpty(),
    validateFields
] ,createUser);
router.delete('/:id', deleteUser);

export default router