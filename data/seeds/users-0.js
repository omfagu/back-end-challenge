/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const defaultUsers = [
  {
    username: "John Doe",
    email: "johndoe@example.com",
    password: "$2a$08$394J9.utNucp1CayyYxtdej8Ck27wDV9BTsUrhRMfJsfoFyqyUh8a",
    role: "admin",
  },
  {
    username: "Jane Doe",
    email: "janedoe@example.com",
    password: "$2a$08$394J9.utNucp1CayyYxtdej8Ck27wDV9BTsUrhRMfJsfoFyqyUh8a",
    role: "user",
  },
  {
    username: "Peter Smith",
    email: "petersmith@example.com",
    password: "$2a$08$394J9.utNucp1CayyYxtdej8Ck27wDV9BTsUrhRMfJsfoFyqyUh8a",
    role: "user",
  },
  {
    username: "Mary Jones",
    email: "maryjones@example.com",
    password: "$2a$08$394J9.utNucp1CayyYxtdej8Ck27wDV9BTsUrhRMfJsfoFyqyUh8a",
    role: "user",
  },
  {
    username: "David Brown",
    email: "davidbrown@example.com",
    password: "$2a$08$394J9.utNucp1CayyYxtdej8Ck27wDV9BTsUrhRMfJsfoFyqyUh8a",
    role: "user",
  },
];

exports.users = defaultUsers;

exports.seed = async function (knex) {
  await knex("users").truncate();
  await knex("users").insert(defaultUsers);
};
