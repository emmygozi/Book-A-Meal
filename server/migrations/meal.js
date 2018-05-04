export default (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    imageid: DataTypes.STRING,
  }, {});
  Meal.associate = (models) => {

  };
  return Meal;
};
