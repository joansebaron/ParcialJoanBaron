import getConnection from "../db/database.js";

export const postCliente = async (req, res) => {
  try {
    console.log("Headers recibidos:", req.headers);
    console.log("Tipo de contenido:", req.headers["content-type"]);
    console.log("Body recibido:", req.body); // 🔍 Ver qué llega

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "El cuerpo de la solicitud está vacío" });
    }

    const {
      ClienteID,
      Compania,
      Contacto,
      Titulo,
      Direccion,
      Ciudad,
      Regiones,
      CodigoPostal,
      Pais,
      Telefono,
      Fax
    } = req.body;

    if (!ClienteID || !Compania) {
      return res.status(400).json({ message: "ClienteID y Compania son obligatorios" });
    }

    const connection = await getConnection();
    const result = await connection.query("INSERT INTO clientes SET ?", {
      ClienteID,
      Compania,
      Contacto,
      Titulo,
      Direccion,
      Ciudad,
      Regiones,
      CodigoPostal,
      Pais,
      Telefono,
      Fax
    });

    connection.end();

    res.status(201).json({ message: "Cliente registrado exitosamente", cliente: req.body });
  } catch (error) {
    console.error("Error al registrar cliente:", error);
    res.status(500).json({ message: "Error interno del servidor", error: error.message });
  }
};
