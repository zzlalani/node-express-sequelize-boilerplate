const {
  Users,
  Sequelize,
  sequelize,
} = require('../models/index');

function create(data) {
  return Users.create(data);
}

function getUserByUsername(username, attributes) {
  const options = {
    where: {
      username,
    }
  };
  if (attributes) {
    options.attributes = attributes;
  }
  return Users.findOne(options);
}

module.exports = {
  create,
  getUserByUsername,
};
