# Flujo de trabajo Git y GitHub

## Ramas

- `main`: versión integrada del proyecto.
- `feature/modulo-registro`: trabajo del Desarrollador A.
- `feature/modulo-reportes`: trabajo del Desarrollador B.

## Convención de commits

- `feat:` nueva funcionalidad.
- `fix:` corrección o validación.
- `docs:` documentación.
- `test:` pruebas automatizadas.
- `chore:` tareas de configuración.

## Pull Request y Code Review

Cada aprendiz publica su rama y crea un Pull Request hacia `main`.
El compañero revisa `Files changed`, comenta los puntos a mejorar y envía una revisión.
Se corrigen los cambios solicitados y se fusiona el PR cuando esté listo.

## Conflictos

Si dos ramas cambian la misma línea de `README.md`, Git puede señalar un conflicto.
Se deben editar las marcas `<<<<<<<`, `=======` y `>>>>>>>`, conservar el contenido acordado,
guardar el archivo y registrar la resolución en un commit.
