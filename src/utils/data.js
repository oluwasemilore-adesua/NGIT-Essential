const bcrypt = require("bcryptjs");

const salt = 12;

let password;
let authToken;
let imageUrl;

const hashedDataFunction = async (password, authTToken, imageUrl) => {
  try {
    const [hashedPassword, hashedAuthToken, hashedImageUrl] = await Promise.all(
      [
        bcrypt.hash(password, salt).then((hash) => {
          password = hash;
        }),
        bcrypt.hash(authTToken, salt).then((hash) => {
          authToken = hash;
        }),
        bcrypt.hash(imageUrl, salt).then((hash) => {
          imageUrl = hash;
        }),
      ],
    );

    return {
      hashedPassword,
      hashedAuthToken,
      hashedImageUrl,
    };
  } catch (error) {
    console.error("Error hashing data:", error);
  }
};

module.exports = hashedDataFunction;