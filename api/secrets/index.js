const HASH_ROUND = 12;
// eslint-disable-next-line no-undef
const JWT_SECRET = process.env.JWT_SECRET || "shh";
module.exports = {
  HASH_ROUND,
  JWT_SECRET,
};
