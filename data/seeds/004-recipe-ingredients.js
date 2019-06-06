
exports.seed = function(knex, Promise) {
  return knex("recipe_ingredients").insert([
    { recipe_id: 1, ingredients_id: 1 }, 
    { recipe_id: 4, ingredients_id: 3 }, 
    { recipe_id: 2, ingredients_id: 4 }, 
    { recipe_id: 4, ingredients_id: 1 } 
  ]);
};
