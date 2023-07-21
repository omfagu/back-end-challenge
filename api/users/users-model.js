const db = require("../../data/db-config.js");

function findAllUsers() {
  return db("users as u").select(
    "u.userId",
    "u.username",
    "u.password",
    "u.role"
  );
}

function findUsersWithFilter(filter) {
  return db("users as u")
    .select("u.userId", "u.username", "u.password", "u.role")
    .where(filter);
}

function findUserById(userId) {
  return db("users as u")
    .select("u.userId", "u.username", "u.password", "u.role")
    .where({ "u.userId": userId })
    .first();
}

async function createUser({ username, password, role }) {
  let created_user_id;
  await db.transaction(async (trx) => {
    const [userId] = await trx("users").insert({
      username,
      password,
      role,
    });
    created_user_id = userId;
  });
  return findUserById(created_user_id);
}

module.exports = {
  createUser,
  findAllUsers,
  findUsersWithFilter,
  findUserById,
};
