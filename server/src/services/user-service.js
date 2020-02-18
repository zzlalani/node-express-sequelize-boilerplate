const userRepository = require('../repositories/user-repository');

async function createUser(data) {
  const body = {
    ...data,
  };
  return await userRepository.create(body);
}

function getUserByUsername(username) {
  return userRepository.getUserByUsername(username);
}

module.exports = {
  createUser,
  getUserByUsername
};
