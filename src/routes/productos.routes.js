import { Router } from "express";
import { methodHTTP } from "../controllers/productos.controller.js";

const productosRoutes = Router();

productosRoutes.put("/api/productos/:id", methodHTTP.updateProducto);

export default productosRoutes;
