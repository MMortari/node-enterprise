import { Router } from 'express';

// Controllers
import RegionsController from './app/controllers/RegionsController';
import CountriesController from './app/controllers/CountriesController';
import EmployeesController from './app/controllers/EmployeesController';
import LocationsController from './app/controllers/LocationsController';
import JobsController from './app/controllers/JobsController';
import DepartmentsController from './app/controllers/DepartmentsController';

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
 * This will list all regions
 * @route GET /regions
 * @group Regions
 */
routes.get('/regions', RegionsController.list)
/**
 * This will store a new regions
 * @route POST /regions
 * @group Regions
 * @param {Object<string>} region_name.body.required
 */
routes.post('/regions', RegionsController.store)
/**
 * This will delete regions
 * @route DELETE /regions/{id}
 * @group Regions
 * @param {integer} id.path.required
 */
routes.delete('/regions/:id', RegionsController.delete)

/**
 * This will list all countries
 * @route GET /countries
 * @group Countries
 */
routes.get('/countries', CountriesController.list)
/**
 * This will store a new country
 * @route POST /countries
 * @group Countries
 * @param {Object<string>} region_name.body.required
 */
routes.post('/countries', CountriesController.store)
/**
 * This will delete country
 * @route DELETE /countries/{id}
 * @group Countries
 * @param {integer} id.path.required
 */
routes.delete('/countries/:id', CountriesController.delete)

/**
 * This will list all locations
 * @route GET /locations
 * @group Locations
 */
routes.get('/locations', LocationsController.list)
/**
 * This will store a new location
 * @route POST /locations
 * @group Locations
 * @param {Object<string>} region_name.body.required
 */
routes.post('/locations', LocationsController.store)
/**
 * This will delete location
 * @route DELETE /locations/{id}
 * @group Locations
 * @param {integer} id.path.required
 */
routes.delete('/locations/:id', LocationsController.delete)

/**
 * This will list all locations
 * @route GET /jobs
 * @group Jobs
 */
routes.get('/jobs', JobsController.list)
/**
 * This will store a new location
 * @route POST /jobs
 * @group Jobs
 * @param {Object<string>} region_name.body.required
 */
routes.post('/jobs', JobsController.store)
/**
 * This will delete location
 * @route DELETE /jobs/{id}
 * @group Jobs
 * @param {integer} id.path.required
 */
routes.delete('/jobs/:id', JobsController.delete)

/**
 * This will list all departments
 * @route GET /departments
 * @group Departments
 */
routes.get('/departments', DepartmentsController.list)
/**
 * This will store a new department
 * @route POST /departments
 * @group Departments
 * @param {Object<string>} region_name.body.required
 */
routes.post('/departments', DepartmentsController.store)
/**
 * This will delete department
 * @route DELETE /departments/{id}
 * @group Departments
 * @param {integer} id.path.required
 */
routes.delete('/departments/:id', DepartmentsController.delete)

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