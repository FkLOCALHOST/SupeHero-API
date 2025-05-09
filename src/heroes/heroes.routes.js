import { Router } from "express";
import { GetHeroes } from "./heroes.controller.js";
const router = Router()

router.get(
    '/listHeroes',
    GetHeroes
)

export default router