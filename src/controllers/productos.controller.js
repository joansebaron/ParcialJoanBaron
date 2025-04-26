import getConnection from "../db/database.js";

export const updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { ProductoNombre, PrecioUnitario } = req.body;

    const producto = { ProductoNombre, PrecioUnitario };

    const connection = await getConnection();
    const result = await connection.query("UPDATE productos SET ? WHERE ProductoID = ?", [producto, id]);

    res.json({ message: "Producto actualizado correctamente", result });
  } catch (error) {
    console.error("ERROR 500", error);
    res.status(500).json({ message: "Error al actualizar producto" });
  }
};

export const methodHTTP = {
  updateProducto
};
