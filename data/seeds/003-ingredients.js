
exports.seed = function(knex, Promise) {
  return knex("ingredients").insert([
    { name: "Tomatoes" },
    { name: "Sugar" },
    { name: "Flour" },
    { name: "Eggs" },
    { name: "Pepperoni" },
    { name: "Cheese" },
    { name: "Pasta" }
  ]);
};