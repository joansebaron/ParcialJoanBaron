import { Router } from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controlles.js";

/* creamos enrutador */
const router= Router();

/*get configuramos respuesta desde el server metodo*/

router.get("/",categoriaController.getCategorias)
/*  */
export default router;