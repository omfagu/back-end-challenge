/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", (t) => {
    t.increments("userId");
    t.string("username", 128).notNullable();
    t.string("email", 128).notNullable().unique();
    t.string("password", 128).notNullable();
    t.string("role").defaultTo("user");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
