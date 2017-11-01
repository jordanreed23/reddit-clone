let addCommentButton = document.getElementById('addComment');
let addCommentForm = document.getElementsByClassName('newComment')[0];
let close = document.getElementsByClassName('close')[0];

addCommentButton.addEventListener('click', (event)=>{
  addCommentForm.style.display = 'flex';
});

close.addEventListener('click', (event) => {
  addCommentForm.style.display = 'none';
});
