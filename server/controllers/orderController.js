import dummydb from '../model/order';
// import validateRouteId from '../routes/validateid';

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
    for (let i = 0; i < dummydb.length; i += 1) {
      // console.log(dummydb[i].id);
      const currentorder = dummydb.find(c => c.id === parseInt(req.param('id'), 10));
      if (currentorder) {
        // req.params.id does not work for me for some strange reasons while updating
        dummydb[i][0].name = req.body.name;
        dummydb[i][0].imageid = req.body.imageid;
        dummydb[i][0].price = req.body.price;
        dummydb[i].ordertime = req.body.ordertime;
        dummydb[i].deliverystatus = req.body.deliverystatus;
        return res.json({
          dummydb,
          message: 'business updated successfully',
        });
      }
    }
    return res.status(404).json({
      message: 'sorry,business not found',
    });
  }

  /**
     * @return {object} json
     * @param {object} req object
     * @param {object} res object
     */
  static removeOne(req, res) {
    for (let i = 0; i < dummydb.length; i += 1) {
      const currentorder = dummydb.find(c => c.id === parseInt(req.param('id'), 10));
      if (currentorder) {
        dummydb.splice(i, 1);
        return res.json({
          message: 'business removed successfully',
        });
      }
    }
    return res.status(404).json({
      message: ' business not found',
    });
  }
}

export default Orders;
