
  let black = document.querrySelector('.selected');
  let pink = document.querrySelector('.selected');
  let green = document.querrySelector('.selected');
  let yellow = document.querrySelector('.selected');

  // color.style.backgroundColor = "red";

  // selectedItem.addEventListener('mouseover', function(event) {
  //   event.target.classList.add('.selected')
  // });
  function addSelected(event) {
    const selectedItem = document.querrySelector('.selected');
    selectedItem.classList.remove('selected');
    event.target.classList.add('selected')
  }

  black.addEventListener('click', addSelected);
  pink.addEventListener('click', addSelected);
  green.addEventListener('click', addSelected);
  yellow.addEventListener('click', addSelected);

  // Requi 8
  const pixel = document.getElementsByClassName('pixel'); 

  function paintItem(event) {
    const selectedItem = document.querySelector('.selected');
    console.log(selectedItem);
    event.target.style.backgroundColor = selectedItem.style.backgroundColor;
  }
   
  pixelBoard.addEventListener('click', paintItem)