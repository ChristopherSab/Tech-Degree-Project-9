
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



  var mainLogo = document.getElementsByClassName('main-logo')[0];

  mainLogo.addEventListener('click', () => {


    mainLogo.classList.add("shake");


  })




