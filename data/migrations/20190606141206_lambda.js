//use migrations for your schema maintenance
exports.up = function(knex, Promise) {
  // the tables most be created in the right order,
  // tables with FK are created after the referenced table is created

  return knex.schema
  .createTable("dishes", table => {
    table.increments();
    table
      .string("name", 128)
      .notNullable()
      .unique();
  })
  .createTable("recipes", table => {
    table.increments();
    table
      .string("name", 128)
      .notNullable()
      .unique();
    table
      .integer("dish_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("dishes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  })
  .createTable("recipe_ingredients", table => {
    table.increments();
    table
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("ingredients_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  })
  .createTable("ingredients", table => {
    table.increments();
    table
      .string("name", 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
return knex.schema
  .dropTableIfExists("recipe_ingredients")
  .dropTableIfExists("ingredients")
  .dropTableIfExists("recipes")
  .dropTableIfExists("dishes");
};