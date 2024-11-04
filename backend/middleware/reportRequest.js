export const tracker = async (req, _, next) => {
  const method = req.method;
  const url = req.url;
  const queryParams = req.query;
  const routeParams = req.params;
  const headers = req.headers;
  const body = req.body;

  console.log(
    `\nHoy ${new Date()}
    Se ha recibido una consulta en la ruta ${url}
    Metodo: ${method}
    Parametros de consulta (query): ${JSON.stringify(queryParams)}
    Parametros de ruta (params): ${JSON.stringify(routeParams)}
    Encabezados: ${JSON.stringify(headers)}
    Cuerpo: ${JSON.stringify(body)}\n`
  );
  next();
};
