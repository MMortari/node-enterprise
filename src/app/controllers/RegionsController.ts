import Regions from './../models/Regions';

class RegionsController {

  async list(req, res) {
    const regions = await Regions.findAll();

    return res.json(regions);
  }
  async store(req, res) {
    const { region_name } = req.body;

    const regions = await Regions.create({ region_name });

    return res.json(regions);
  }
  async delete(req, res) {
    const { id } = req.params;

    const regions = await Regions.destroy({
      where: {
        region_id: id
      }
    })

    return res.json(regions);
  }

}

export default new RegionsController();