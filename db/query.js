var db = require('./connection');

function getBeers() {
  return db('beers').orderBy('rating','desc');
}

function getBeer(id){
  return db('beers').where('id',id);
}

function updateRating(newRating, id){
  return db('beers').where('id',id).update('rating', newRating, '*');
}

function insertBeer(beer){
  return db('beers').insert(beer, '*');
}

function getComments(id){
    return db('comments').where('beer_id',id);
}

function insertComment(comment){
  return db('comments').insert(comment, '*');
}


module.exports = {
  getBeers,
  getBeer,
  updateRating,
  insertBeer,
  getComments,
  insertComment,
};
