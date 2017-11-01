
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('beers').del()
    .then(function () {
      // Inserts seed entries
      return knex('beers').insert([
        {id: 1, title: 'Blue Moon', rating: 1, image: 'https://www.bluemoonbrewingcompany.com/sites/bluemoon/files/BM_SB_BottlePourMobile_AC.png', link: 'https://www.bluemoonbrewingcompany.com/'},
        {id: 2, title: 'Sawtooth', rating: 2, image: 'http://www.beersudsforum.com/uploads/1/0/3/8/10389366/264409874.png?199', link: 'http://lefthandbrewing.com/beers/sawtooth-ale/'},
      ]);
    });
};
