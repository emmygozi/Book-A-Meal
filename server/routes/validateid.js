import Joi from 'joi';

/**
 * @class ValidRoute
 */
class ValidRouteId {
  /**
     * @desc create a new ValidRouteId
     * @returns {object} json
     * @param {object} meal object
     */
  static validateMeal(meal) {
    const schema = {
      name: Joi.string().min(3).required()
    };
    return Joi.validate(meal, schema);
  }
}

export default ValidRouteId;

