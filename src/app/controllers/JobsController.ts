import Jobs from './../models/Jobs';

class JobsController {

  async list(req, res) {
    const jobs = await Jobs.findAll();

    return res.json(jobs);
  }
  async store(req, res) {
    const data = req.body;

    const store = await Jobs.create(data);

    return res.json(store);
  }
  async delete(req, res) {
    const { id } = req.params;

    const retorno = await Jobs.destroy({
      where: {
        country_id: id
      }
    })

    return res.json(retorno);
  }

}

export default new JobsController();