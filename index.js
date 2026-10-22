const { registrarUsuario } = require("./registro");
const { generarReporte } = require("./reportes");

const resultadoRegistro = registrarUsuario("Ana Pérez", "ana@example.com");
console.log("Registro:", resultadoRegistro);

const usuarios = [
  { nombre: "Ana Pérez", correo: "ana@example.com" },
  { nombre: "Luis Gómez", correo: "luis@example.com" }
];

const resultadoReporte = generarReporte(usuarios);
console.log("Reporte:", resultadoReporte);
