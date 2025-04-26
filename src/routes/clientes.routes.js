import { Router } from "express";
import { postCliente } from "../controllers/clientes.controller.js";

const router = Router();

router.post("/", postCliente);

export default router;
