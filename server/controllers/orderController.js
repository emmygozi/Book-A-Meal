import dummydb from '../model/order';

const orderarray = dummydb;

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
  static addOrders(req, res) {
    const {
      name, price, userid, ordertime, deliveryaddress, deliverystatus
    } = req.body;
    // generate new id for new input
    const id = orderarray[orderarray.length - 1].id + 1;
    // create array for new input
    const toBeAdded = {
      id, name, price, userid, ordertime, deliveryaddress, deliverystatus
    };

    return res.status(201).json({ Orders: toBeAdded, message: 'new order placed' });
  }

  /**
     * @return {object} json
     * @param {object} req object
     * @param {object} res object
     */
  static findAll(req, res) {
    /* if ((!req.headers.authorization) || (req.headers.authorization !== tokenAuth)) {
      return res.status(403).json({ error: 'No credentials sent!' });
    } */
    return res.status(200).json({ Orders: dummydb });
  }

  /**
     * @return {object} json
     * @param {object} req object
     * @param {object} res object
     */
  static updateOne(req, res) {
    /* if ((!req.headers.authorization) || (req.headers.authorization !== tokenAuth)) {
      return res.status(403).json({ error: 'No credentials sent!' });
    }
    */ for (let i = 0; i < dummydb.length; i += 1) {
      // console.log(dummydb[i].id);
      const currentorder = dummydb.find(c => c.id === parseInt(req.param('id'), 10));
      if (currentorder) {
        // req.params.id does not work for me for some strange reasons while updating
        dummydb[i].name = req.body.name;
        dummydb[i].imageid = req.body.imageid;
        dummydb[i].price = req.body.price;
        dummydb[i].ordertime = req.body.ordertime;
        dummydb[i].deliveryaddress = req.body.ordertime;
        dummydb[i].deliverystatus = req.body.deliverystatus;
        return res.status(201).json({
          dummydb,
          message: 'order updated successfully',
        });
      }
    }
    return res.status(404).json({
      message: 'order,business not found',
    });
  }

  /**
     * @return {object} json
     * @param {object} req object
     * @param {object} res object
     */
  static removeOne(req, res) {
    /*  if ((!req.headers.authorization) || (req.headers.authorization !== tokenAuth)) {
      return res.status(403).json({ error: 'No credentials sent!' });
    }
    */ for (let i = 0; i < dummydb.length; i += 1) {
      const currentorder = dummydb.find(c => c.id === parseInt(req.param('id'), 10));
      if (currentorder) {
        dummydb.splice(i, 1);
        return res.status(200).json({
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
