exports.seed = function(knex, Promise) {
  return knex("recipes").insert([
    { name: "2 Tomatoes, 1/2 Cheese, Cup of Pasta", dish_id: 1 },
    { name: "1/2 cup of Flour, 2 Eggs, 2 tbsp of Sugar", dish_id: 2 },
    { name: "Placeholder Baked Ziti Recipe", dish_id: 3 },
    {
      name:
        "20 slices of Pepperoni, 1/2 cup of shredded Mozzarella Cheese, 2 Tomatoes",
      dish_id: 4
    }
  ]);
};