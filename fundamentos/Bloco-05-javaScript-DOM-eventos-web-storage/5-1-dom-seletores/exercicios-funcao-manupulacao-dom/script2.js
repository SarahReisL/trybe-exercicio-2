//altera cor de fundo do body
let container = document.getElementById('container');
container.style.background = 'rgb(228, 253, 225)';

// altera cor do título
let headerContainer = document.getElementById('header-container');
headerContainer.style.color = 'black';

// altera cor da letra do h3 na classe emergency-tasks
const h3Color = document.querySelectorAll('#emergency-tasks h3');
for (let index = 0; index < h3Color.length; index += 1) {
  h3Color[index].style.color = 'white';
}

// altera cor da letra do h3 na classe no-emergency-tasks
const h3ColorNo = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < h3ColorNo.length; index += 1) {
  h3ColorNo[index].style.color = 'black';
}

//para alterar algo dentro da seção com? 

// altera cor de fundo dos h3 dentro classe/seção 
let h3 = document.querySelectorAll('#emergency-tasks h3');
for (let index = 0; index < h3.length; index += 1) {
  h3[index].style.background = 'rgb(190, 239, 158)';
}

// altera cor de fundo da classe/seção
let emergencyTasks = document.querySelectorAll('#emergency-tasks');
for (let index = 0; index < emergencyTasks.length; index += 1) {
  emergencyTasks[index].style.background = 'rgb(166, 195, 111)';
} 

// altera cor de fundo dos h3 dentro classe/seção 
let noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasks.length; index += 1) {
  noEmergencyTasks[index].style.background = 'rgb(122, 158, 126)';
}

// altera cor de fundo da classe/seção
let h3No = document.querySelectorAll('.no-emergency-tasks');
for (let index = 0; index < h3No.length; index += 1) {
  h3No[index].style.background = 'rgb(49, 73, 60)';
} 

