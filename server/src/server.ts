import express from './app';
const swaggerExpress = require('express-swagger-generator')(express);
const swaggerConfig = require('./config/swagger');

const listenPort: string | number = process.env.PORT || 3333;

swaggerExpress(swaggerConfig(listenPort));

// express.listen(listenPort, () => console.log(`Server started on port ${listenPort}`));
express.listen(listenPort, () => console.log(`Server ->  http://localhost:${listenPort}`));