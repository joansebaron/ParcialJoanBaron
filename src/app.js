import express from "express";
import cors from "cors";
import categoriaRoutes from "./routes/categorias.routes.js";
import empleadosRoutes from "./routes/empleados.routes.js";
import clientesRoutes from "./routes/clientes.routes.js";
import productosRoutes from "./routes/productos.routes.js";

const app = express();

app.use(express.json()); // ✅ Esto asegura que Express pueda procesar JSON en `req.body`
app.use(cors());

// Rutas
app.use("/api/categorias", categoriaRoutes);
app.use("/api/empleados", empleadosRoutes);
app.use("/api/clientes", clientesRoutes);
app.use(productosRoutes);
app.set("port", 5000);

app.get('/',(req,res)=>{
    res.send('REST API EN RENDER WITHOUT DATABASE ENDPOINTS')
})



export default app;
