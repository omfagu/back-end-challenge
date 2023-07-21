/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments("userId");
    tbl.string("username", 128).notNullable();
    tbl.string("email", 128).notNullable().unique();
    tbl.string("password", 128).notNullable();
    tbl.string("role").defaultTo("user");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
