var togglebtn = document.querySelector('.togglebtn');
var nav = document.querySelector('.navlinks');
var links = document.querySelectorAll('.navlinks li');
var typed = new Typed('.input', {
    strings: ['Web Developer', 'Software Engineer', 'Tech Enthusiast', 'AI Enthusiast'],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
});

togglebtn.addEventListener('click', function() {    
    this.classList.toggle("click");
    nav.classList.toggle('open');
})