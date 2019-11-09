import Locations from './../models/Locations';

class LocationsController {

  async list(req, res){
    const locations = await Locations.findAll({
      attributes: ['location_id', 'street_address', 'postal_code', 'city', 'state_province'],
      include: [
        { 
          association: 'country', 
          attributes: ['country_name'],
          include: [
            { association: 'region', attributes: ['region_name'] }
          ] 
        }
      ]
    });

    return res.json(locations);
  }
  async store(req, res){
    const data = req.body;

    const store = await Locations.create(data);

    return res.json(store);
  }
  async delete(req, res){
    const { id } = req.params;

    const retorno = await Locations.destroy({
      where: {
        location_id: id
      }
    })

    return res.json(retorno);
  }

}

export default new LocationsController();