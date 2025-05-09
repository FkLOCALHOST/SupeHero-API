import { Router } from "express";
import { GetHeroes, getHeoresById } from "./heroes.controller.js";
const router = Router()

router.get(
    '/listHeroes',
    GetHeroes
)

router.get(
    "/getHeroeById/:uid",
    getHeoresById
)

export default router