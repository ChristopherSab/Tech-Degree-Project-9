/*----------------*/
/* Main JavaScript*/
/*----------------*/

//Typing animation plugin
var typed = new Typed('.element', {
    strings: [
        'Static Websites', 
        'Web Applications',
        'Mobile Apps',
    ],
    typeSpeed: 120,
    backSpeed: 60,
    loop: true,

  });

//Shake Effect For Site Logo
  let mainLogo = document.getElementsByClassName('main-logo')[0];

mainLogo.addEventListener('click', () => {

    mainLogo.classList.add("shake");

})




