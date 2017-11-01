
exports.up = function(knex, Promise) {
  return Promise.all([
  knex.schema.createTable('comments', (table) => {
  table.increments();
  table.string('body');
  table.integer('beer_id').references('beers.id').onDelete('CASCADE');
  })
]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
  knex.schema.dropTable('comments')
]);
};
