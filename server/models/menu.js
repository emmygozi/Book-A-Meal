export default (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {});
  Menu.associate = (models) => {
    // associations can be defined here

  };
  return Menu;
};
