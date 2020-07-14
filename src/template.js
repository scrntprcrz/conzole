const { template } = require("lodash");
module.exports = template(`
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>console</title>
    <script src="http://<%= host %>:<%= port %>/socket.io/socket.io.js"></script>
    <script src="http://<%= host %>:<%= port %>/index.js"></script>
  </head>
  <body style="background-color: black; color: gray;">
    <h1 style="text-align: center;">F12 or CTRL+MAYUS+J</h1>
    <script>
      var conzole = new Conzole("http://<%= host %>:<%= port %>");
    </script>
  </body>
</html>
`);
