const bcrypt = require("bcryptjs");
const { User } = require("../models");

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

// password = contraseña plana
const verifyCredentials = async (email, password) => {
  const user = await User.findOne({
    where: { email },
  });

  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      return user;
    }
  }
  return null;
};

module.exports = {
  hashPassword,
  verifyCredentials,
};
