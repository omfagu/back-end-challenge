// BU DOSYADA DEĞİŞİKLİK YAPMAYIN
exports.seed = async function (knex) {
  await knex("users").truncate();
  await knex("roles").truncate();
  await knex("roles").insert([{ role_name: "admin" }, { role_name: "user" }]);
  await knex("users").insert([
    {
      username: "alice",
      password: "$2a$10$BcRl.HaW7qgGs4OGf88S7OlOdzZ3p4mS7e9fT7SZgbkzy.5j80w3C", // password "abcd"
      role_id: 1,
    },
    {
      username: "john",
      password: "$2a$10$p6aizl7y4vy4foGdk1IypuYdaElIuFLCVf9i9d4YngL1F5jGg7n/K", // password "qwerty"
      role_id: 2,
    },
    {
      username: "emma",
      password: "$2a$10$3aHYVX2FmL6czuJKGHEz4eueFt/LiePXziIkWgQbzJkG/zI2K6dFy", // password "password"
      role_id: 2,
    },
    {
      username: "mike",
      password: "$2a$10$XiNQ2nKfbjMSLQviTT6Ykem2RZlJ87UNl4aqrDfLuFhz8qinZRRCe", // password "abc123"
      role_id: 2,
    },
    {
      username: "jane",
      password: "$2a$10$tGzBBo9KJn6lI0R.MabDJ.M2eRAScPr9Uyl9uh0bQvE6uhUyXHqHq", // password "hello123"
      role_id: 2,
    },
  ]);
};
