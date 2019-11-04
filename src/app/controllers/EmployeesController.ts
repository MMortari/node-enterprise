import * as Yup from 'yup';

// Model
import Employees from '../models/Employees';

class EmployeesController {

  async list(req, res): Promise<Employees> {
    const employees: Array<Employees> = await Employees.findAll();

    return res.json(employees);
  }

  async create(req, res): Promise<Employees> {
    const schema = Yup.object().shape({
      first_name: Yup.string(),
      last_name: Yup.string().required(),
      email: Yup.string().email().required().lowercase(),
      phone_number: Yup.string(),
      hire_data: Yup.date().required(),
      job_id: Yup.number(),
      salary: Yup.number(),
      comission_pct: Yup.number(),
      department_id: Yup.number(),
      manager_id: Yup.number(),
    })

    const valid = await schema.isValid(req.body);
    
    console.log("Body -> ", req.body);
    console.log("Valid -> ", valid);

    return res.json(valid);
  }

}

export default new EmployeesController();