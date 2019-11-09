import Departments from '../models/Departments';

class DepartmentsController {

  async list(req, res) {
    const countries = await Departments.findAll({
      include: [
        { association: 'manager' },
        { association: 'location' },
        { association: 'employees' },
      ]
    });

    return res.json(countries);
  }
  async store(req, res) {
    const data = req.body;

    const store = await Departments.create(data);

    return res.json(store);
  }
  async delete(req, res) {
    const { id } = req.params;

    const retorno = await Departments.destroy({
      where: {
        country_id: id
      }
    })

    return res.json(retorno);
  }

}

export default new DepartmentsController();