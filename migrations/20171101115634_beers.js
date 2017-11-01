
exports.up = function(knex, Promise) {
  return Promise.all([
  knex.schema.createTable('beers', (table) => {
  table.increments();
  table.string('title');
  table.integer('rating');
  table.string('image');
  table.string('link');
  })
]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
  knex.schema.dropTable('beers')
]);
};
