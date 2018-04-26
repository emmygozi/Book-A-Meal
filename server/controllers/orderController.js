import dummydb from '../model/order';
import validateRouteId from '../routes/validateid';

/**
 * @class Orders
 */
class Orders {
  /**
     * @desc create a new Orders
     * @returns {object} json
     * @param {object} req object
     * @param {object} res object
     */
  static addMeal(req, res) {
    const { name } = req.body;
    dummydb.push(req.body);
    return res.status(201).json(`${name} is added as a new meal`);
  }

  /**
     * @return {object} json
     * @param {object} req object
     * @param {object} res object
     */
  static findAll(req, res) {
    return res.status(200).json({ Orders: dummydb });
  }

  /**
     * @return {object} json
     * @param {object} req object
     * @param {object} res object
     */
  static updateOne(req, res) {
    const food = dummydb.find(c => c.id === parseInt(req.params.id, 10));
    if (!food) res.status(404).send('The given id was not found.');
    // Validate
    // If invalid, return 400 - bad request
    const result = validateRouteId.validateMeal(req.body);
    if (result.error) {
      res.status(400).send(result.error.details.join(' ').message);
      return;
    }

    // Update meal
    food.name = req.body.name;

    // return updated meal
    res.send(food);
  }
}

export default Orders;
