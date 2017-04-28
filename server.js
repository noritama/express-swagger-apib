let express = require('express');
let swaggerRoutes = require('swagger-routes');

let app = express();

swaggerRoutes(app, {
  api: './public/swagger.json',
  handlers: './src/handlers',
  authorizers: './src/handlers/security'
});

app.listen(3001);
