module.exports = (port) => ({
  swaggerDefinition: {
    info: {
      description: 'This is a sample server',
      title: 'Node Enterprise',
      version: '1.0.0',
    },
    host: `localhost:${port}`,
    basePath: '',
    produces: [
      "application/json",
    ],
    schemes: ['http', 'https'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: "",
      }
    }
  },
  basedir: __dirname, //app absolute path
  files: ['../**/*.ts'] //Path to the API handle folder
});
