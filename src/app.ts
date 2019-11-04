import './bootstrap';

import express from 'express';
import cors from 'cors';

// Routes
import routes from './routes';

// Database
import './database';

class App {
  public express: express.Application

  constructor() {
    this.express = express();
    
    console.log("Enviroment -> ", process.env.NODE_ENV)
    
    this.middlewares();
    this.routes();
  }

  middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  routes(): void {
    this.express.use(routes);
  }

}

export default new App().express;