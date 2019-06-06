//use migrations for your schema maintenance
exports.up = function(knex, Promise) {
  // the tables most be created in the right order,
  // tables with FK are created after the referenced table is created

  return knex.schema.createTable("dishes", table => {
      table.increments();
  });
};

exports.down = function(knex, Promise) {
  
};
