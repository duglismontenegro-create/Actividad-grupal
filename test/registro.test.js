/**
 * Registra usuarios y valida sus datos básicos.
 */

function registrarUsuario(nombre, correo) {
  // Validar que el nombre sea texto y no esté vacío
  if (typeof nombre !== "string" || nombre.trim() === "") {
    return {
      error: "El nombre es obligatorio"
    };
  }

  // Validar que el correo sea texto
  if (typeof correo !== "string") {
    return {
      error: "El correo no es válido"
    };
  }

  const correoLimpio = correo.trim();

  // Validar el formato del correo electrónico
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoLimpio)) {
    return {
      error: "El correo no es válido"
    };
  }

  // Devolver el resultado del registro
  return {
    mensaje: "Usuario registrado correctamente",
    usuario: {
      nombre: nombre.trim(),
      correo: correoLimpio.toLowerCase()
    }
  };
}

module.exports = { registrarUsuario };
