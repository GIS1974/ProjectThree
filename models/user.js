//  This creates a new table to store orders.

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Users", {
    username: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    creditCardNumber: DataTypes.STRING,
    expDate: DataTypes.STRING,
    cvv: DataTypes.INTEGER,
    swag1name: { type: DataTypes.STRING, defaultValue: "Swag 1"},
    swag1quantity: { type: DataTypes.INTEGER, defaultValue: 0 },
    swag2name: { type: DataTypes.STRING, defaultValue: "Swag 2"},
    swag2quantity: { type: DataTypes.INTEGER, defaultValue: 0 },
    swag3name: { type: DataTypes.STRING, defaultValue: "Swag 3"},
    swag3quantity: { type: DataTypes.INTEGER, defaultValue: 0 },
    swag4name: { type: DataTypes.STRING, defaultValue: "Swag 4"},
    swag4quantity: { type: DataTypes.INTEGER, defaultValue: 0 },
    swag5name: { type: DataTypes.STRING, defaultValue: "Swag 5"},
    swag5quantity: { type: DataTypes.INTEGER, defaultValue: 0 }
  });
  return User;
};
