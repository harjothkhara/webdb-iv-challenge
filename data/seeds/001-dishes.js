
exports.seed = function(knex, Promise) {
      return knex('dishes').insert([
        {name: 'Lasagna'},
        {name: 'Flan'},
        {name: 'Baked Ziti'},
        {name: 'Pizza'}
      ]);
};
