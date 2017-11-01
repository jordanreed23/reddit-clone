
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, body: 'This is great!', beer_id: 1},
        {id: 2, body: 'My favorite', beer_id: 1},
        {id: 3, body: 'staright garbage', beer_id: 1},
        {id: 4, body: 'best beer ever!', beer_id: 2},
      ]);
    });
};
