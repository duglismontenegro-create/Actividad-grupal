const test = require("node:test");
const assert = require("node:assert/strict");
const { generarReporte } = require("../reportes");

test("genera reporte y cuenta usuarios", () => {
  const usuarios = [{ nombre: "Ana" }, { nombre: "Luis" }];
  const resultado = generarReporte(usuarios);
  assert.equal(resultado.totalUsuarios, 2);
  assert.equal(resultado.mensaje, "Reporte generado correctamente");
});

test("acepta una lista vacía", () => {
  const resultado = generarReporte([]);
  assert.equal(resultado.totalUsuarios, 0);
});

test("rechaza datos que no sean una lista de objetos", () => {
  assert.ok(generarReporte("no es una lista").error);
  assert.ok(generarReporte([null]).error);
});