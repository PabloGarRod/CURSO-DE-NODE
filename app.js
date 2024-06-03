const http = require("http");

const { infoCursos } = require("./cursos");

const servidor = http.createServer((req, res) => {
  const { method: metodo } = req;

  switch (metodo) {
    case "GET":
      return manejarSolicitudGET(req, res);
    case "POST":
      return manejarSolicitudPOST(req, res);
    default:
      res.statusCode = 501;
      res.end(
        `El metodo usado no puede ser manejado por el servidor: ${metodo}`
      );
  }
});

function manejarSolicitudGET(req, res) {
  const path = req.url;

  console.log(res.statusCode); // 200 ok

  if (path === "/") {
    res.writeHead(200, { "Content-type": "application/json" });
    return res.end("Bienvenido a mi primer servidor y API creados con Node.js");
  } else if (path === "/api/cursos" || path === "/api/cursos/") {
    return res.end(JSON.stringify(infoCursos));
  } else if (
    path === "/api/cursos/programacion" ||
    path === "/api/cursos/programacion/"
  ) {
    return res.end(JSON.stringify(infoCursos.programacion));
  }

  res.statusCode = 404;
  res.end("Recurso solicitado no existe");
}

function manejarSolicitudPOST(req, res) {
  const path = req.url;

  if (path === "/api/cursos/programacion") {
    console.log(
      "El servidor recibio una solicitud POST para cursos/programacion"
    );
    return res.end(
      "El servidor recibio una solicitud POST para cursos/programacion"
    );
  }
}

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
  console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});
