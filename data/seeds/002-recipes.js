exports.seed = function(knex, Promise) {
  return knex("recipes").insert([
    { name: "Tomatoes, Cheese, Pasta", dish_id: 1 },
    { name: "Flour, Eggs, Sugar", dish_id: 2 },
    { name: "Placeholder Ziti RecipeBaked", dish_id: 3 },
    { name: "Pepperoni, Cheese, Tomatoes", dish_id: 4 }
  ]);
};