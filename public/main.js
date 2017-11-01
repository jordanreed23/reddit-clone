let addBeerButton = document.getElementById('addBeer');
let addBeerForm = document.getElementsByClassName('newBeer')[0];
let close = document.getElementsByClassName('close')[0];

addBeerButton.addEventListener('click', (event)=>{
  addBeerForm.style.display = 'flex';
});

close.addEventListener('click', (event) => {
  addBeerForm.style.display = 'none';
});
