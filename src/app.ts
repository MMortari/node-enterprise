import express from 'express';
import cors from 'cors';

// Routes
import routes from './routes';

// Database
import './database'

class App {
  public express: express.Application

  constructor() {
    this.express = express();

    this.routes();
  }

  middlewares(): void {
    this.express.use(cors());
    this.express.use(express.json());
  }

  routes(): void {
    this.express.use(routes);
  }

}

export default new App().express;