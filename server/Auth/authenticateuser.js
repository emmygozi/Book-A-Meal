/**
 * @class UserAuth
 */
class UserAuth {
  /**
     * @desc create a new Meals
     * @returns {object} json
     * @param {object} usermail object
     */
  static userAdd(usermail) {
    if (usermail !== '') {
      const qwert = usermail.trim();
      return qwert;
    }
    return false;
  }

  /**
     * @desc create a new Meals
     * @returns {object} json
     * @param {object} pass object
     */
  static passwordAdd(pass) {
    if (pass !== '') {
      return pass;
    }
    return false;
  }

  /**
     * @desc create a new Meals
     * @returns {object} json
     * @param {object} approve object
     */
  static autheticuser(approve) {
    if ((approve !== '') && (approve.length > 10)) {
      return approve;
    }
    return false;
  }
}

export default UserAuth;
