import dummydb from '../model/meal';
// import tokenAuth from '../Auth/authenticateuser';


// import validateRouteId from '../routes/validateid';

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
    /* if ((!req.headers.authorization) || (req.headers.authorization !== tokenAuth)) {
      return res.status(403).json({ error: 'No credentials sent!' });
    } */
    const { name } = req.body;
    dummydb.push(req.body);
    return res.status(201).json(`name:${name} is added as a new meal`);
  }

  /**
     * @return {object} json
     * @param {object} req object
     * @param {object} res object
     */
  static findAll(req, res) {
    /* if ((!req.headers.authorization) || (req.headers.authorization !== tokenAuth)) {
      return res.status(403).json({ error: 'No credentials sent!' });
    }
 */
    return res.status(200).json({ Meals: dummydb });
  }

  /**
     * @return {object} json
     * @param {object} req object
     * @param {object} res object
     */
  static updateOne(req, res) {
    /* if ((!req.headers.authorization) || (req.headers.authorization !== tokenAuth)) {
      return res.status(403).json({ error: 'No credentials sent!' });
    } */
    for (let i = 0; i < dummydb.length; i += 1) {
      // console.log(dummydb[i].id);
      const food = dummydb.find(c => c.id === parseInt(req.param('id'), 10));
      if (food) { // req.params.id does not work for me for some strange reasons while updating
        dummydb[i].name = req.body.name;
        dummydb[i].imageid = req.body.imageid;
        dummydb[i].price = req.body.price;
        return res.status(201).json({
          dummydb,
          message: 'meal updated successfully'
        });
      }
    }
    return res.status(404).json({
      message: 'sorry,meal not found',
    });
  }

  /**
     * @return {object} json
     * @param {object} req object
     * @param {object} res object
     */
  static removeOne(req, res) {
    /* if ((!req.headers.authorization) || (req.headers.authorization !== tokenAuth)) {
      return res.status(403).json({ error: 'No credentials sent!' });
    } */
    for (let i = 0; i < dummydb.length; i += 1) {
      const food = dummydb.find(c => c.id === parseInt(req.param('id'), 10));
      if (food) {
        dummydb.splice(i, 1);
        return res.status(200).json({
          message: 'meal removed successfully',
        });
      }
    }
    return res.status(404).json({
      message: ' meal not found',
    });
  }
}

export default Meals;
