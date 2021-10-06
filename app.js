let list = document.querySelectorAll('.navigation li');
function activeLink() {
  list.forEach((item) => 
  item.classList.remove('hovered'));
  this.classList.add('hovered');
}
list.forEach((item) => 
item.addEventListener('mouseover', activeLink))


// menu toggle 
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
console.log(navigation);
let main = document.querySelector('.main');
let title = document.querySelectorAll('.title');
let cardBox = document.querySelector('.card-box');

toggle.onclick = () => {
  navigation.classList.toggle('active');
  main.classList.toggle('active');
  cardBox.classList.toggle('active');


  title.forEach((value) => {
    if(navigation.style.width === "60px") {
      value.style.display = "none";
    }
    else {    
      value.style.display = "block";  
    }    
  })
}