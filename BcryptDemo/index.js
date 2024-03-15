const bcrypt = require('bcrypt');

const hashPassword = async (pw) => {
  //   const salt = await bcrypt.genSalt(12);
  //   const hash = await bcrypt.hash(pw, salt);
  const hash = await bcrypt.hash(pw, 12);
  //   console.log(salt);
  console.log(hash);
  return hash;
};

const login = async (pw, hashedPw) => {
  const result = await bcrypt.compare(pw, hashedPw);
  if (result) {
    console.log('Logged In');
  } else {
    console.log('Login Failed');
  }
};

const hash = Promise.resolve(hashPassword('monkey'));
login('monkey', '$2b$12$P9.tUoDzX9S9zCAs43YCeeybnkPQQlGy2y7QC/8gP/iI11MjzjfPS');
