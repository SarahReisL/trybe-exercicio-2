const button = document.querySelector('#buttonSubmit');
let inputNameUser = document.querySelector('#inputNameUser')
const nameUser = document.querySelector('#nameUser');
button.addEventListener('click', function buttonSubmit(){
  console.log(inputNameUser.value);
  nameUser.innerHTML = inputNameUser.value;
})
