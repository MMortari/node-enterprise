import { Router } from 'express';

// Controllers
import EmployeesController from './app/controllers/EmployeesController';

const routes = Router();

/**
 * This route is a test
 * @route GET /
 * @group Test - Route
 */
routes.get('/', (req, res) => {
  return res.send('Hello World');
})

/**
 * This will all employees
 * @route GET /employees
 * @group Employees
 */
routes.get('/employees', EmployeesController.list);
/**
 * Create a new employee
 * @route POST /employees
 * @group Employees
 */
routes.post('/employees', EmployeesController.create);

export default routes;