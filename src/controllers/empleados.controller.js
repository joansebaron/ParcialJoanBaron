import getConnection from "../db/database.js";

// empleados.controller.js
export const getEmpleados = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM empleados");
    res.json(result);
  } catch (error) {
    console.error("ERROR 500", error);
    res.status(500).json({ message: "Error al obtener empleados" });
  }
};




export const methodHTTP={
  getEmpleados,
}