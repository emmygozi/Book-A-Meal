import dummydb from '../model/menu';


/**
 * @class Menu
 */
class Menu {
  /**
     * @desc create a new Menu
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
    return res.status(200).json({ Menu: dummydb });
  }
}

export default Menu;
