exports.seed = function(knex, Promise) {
  return knex("recipes").insert([
    { name: "Placeholder Lasagna Recipe", dish_id: 1 },
    { name: "Placeholder Flan Recipe", dish_id: 2 },
    { name: "Placeholder Ziti RecipeBaked", dish_id: 3 },
    { name: "Placeholder Pizza Recipe", dish_id: 4 }
  ]);
};