import { Router } from "express";
import { getEmpleados } from "../controllers/empleados.controller.js";

const router = Router();

router.get("/", getEmpleados); // GET /api/empleados

export default router;
