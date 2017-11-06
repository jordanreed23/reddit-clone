let addCommentButton = document.getElementById('addComment');
let addCommentForm = document.getElementsByClassName('newComment')[0];
let close = document.getElementsByClassName('close')[0];

addCommentButton.addEventListener('click', (event)=>{
  addCommentForm.style.display = 'flex';
});

close.addEventListener('click', (event) => {
  addCommentForm.style.display = 'none';
});

let updateBeerButton = document.getElementById('updateBeer');
let updateBeerForm = document.getElementsByClassName('updateBeer')[0];
let closeUpdate = document.getElementsByClassName('close')[1];

updateBeerButton.addEventListener('click', (event)=>{
  updateBeerForm.style.display = 'flex';
});

closeUpdate.addEventListener('click', (event) => {
  updateBeerForm.style.display = 'none';
});
