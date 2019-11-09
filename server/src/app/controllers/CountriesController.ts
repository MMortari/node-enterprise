import Countries from './../models/Countries';
import connection from './../../database/index';

class CountriesController {

  async list(req, res) {
    const countries = await Countries.findAll({
      attributes: [
        'country_id',
        'country_name'
      ],
      include: [
        { association: 'region', attributes: ['region_name'] }
      ]
    });

    return res.json(countries);
  }
  async store(req, res) {
    const data = req.body;

    const store = await Countries.create(data);

    return res.json(store);
  }
  async delete(req, res) {
    const { id } = req.params;

    const retorno = await Countries.destroy({
      where: {
        country_id: id
      }
    })

    return res.json(retorno);
  }

}

export default new CountriesController();