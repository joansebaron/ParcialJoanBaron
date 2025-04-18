import { Router } from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controlles.js";

/* creamos enrutador */
const router= Router();

/*get configuramos respuesta desde el server metodo*/

router.get("/",categoriaController.getCategorias);/*leer*/
router.post("/",categoriaController.postCategorias);/*crear*/

/*ruta que recibe un parametro*/
router.get("/:id",categoriaController.getCategory);/*crear*/
/*update*/
router.put("/:id",categoriaController.updateCategorias );/*leer*/
/*delete*/
router.delete("/:id",categoriaController.deleteCategory );/*leer*/
/* hacemos disponible a router en toda la app */
export default router;