/*Para el sidebar que aparezca el menu*/
const sideMenu= document.querySelector("aside");
const menuBtn= document.querySelector("#menu-btn");
const closeBtn= document.querySelector("#close-btn");

/*para el cambio de color del tema*/

const themeToggler= document.querySelector(".theme");




/*Para el sidebar que aparezca el menu*/
menuBtn.addEventListener('click', () => {
    sideMenu.style.display= 'block';
})

closeBtn.addEventListener('click', () =>{
    sideMenu.style.display='none'
})