/**
 * Registra usuarios y valida sus datos básicos.
 */

function registrarUsuario(nombre, correo) {
  if (typeof nombre !== "string" || nombre.trim() === "") {
    throw new Error("El nombre es obligatorio");
  }

  if (typeof correo !== "string") {
    throw new Error("El correo no es válido");
  }

  const correoLimpio = correo.trim();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoLimpio)) {
    throw new Error("El correo no es válido");
  }

  return {
    mensaje: "Usuario registrado correctamente",
    usuario: {
      nombre: nombre.trim(),
      correo: correoLimpio.toLowerCase()
    }
  };
}

module.exports = { registrarUsuario };
