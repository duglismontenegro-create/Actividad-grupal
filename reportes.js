// Modulo de reportes v1.0
/**
 * Genera un reporte sencillo a partir de una lista de usuarios.
 * @param {Array<object>} usuarios
 * @returns {{mensaje: string, totalUsuarios: number, usuarios: Array<object>} | {error: string}}
 */
function generarReporte(usuarios) {
  if (
    !Array.isArray(usuarios) ||
    usuarios.some(
      usuario =>
        usuario === null ||
        typeof usuario !== "object" ||
        Array.isArray(usuario)
    )
  ) {
    return {
      error: "Los datos deben ser una lista válida de usuarios."
    };
  }

  return {
    mensaje: "Reporte generado correctamente",
    totalUsuarios: usuarios.length,
    usuarios
  };
}

module.exports = { generarReporte };