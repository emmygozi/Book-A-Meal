import dummydb from '../model/meal';

/**
 * @class Meals
 */
class Meals {
  /**
     * @desc create a new Meals
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
    return res.status(200).json({ Meals: dummydb });
  }
}

export default Meals;
