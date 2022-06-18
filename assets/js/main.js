
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
    reset: true
})

sr.reveal(`.bunga_1_kiri`, {delay: 100})
sr.reveal(`.bunga_1_kanan`, {delay: 100})
sr.reveal(`.bunga_2_kiri`, {delay: 100})
sr.reveal(`.bunga_2_kanan`, {delay: 100})
sr.reveal(`.home__data`)
sr.reveal(`.nama-pengantin`)

sr.reveal(`.bunga_3_kiri, .bunga_3_kiri_2`, {origin:'left'})
sr.reveal(`.bunga_4_kanan, .bunga_4_kanan_2`, {origin:'right'})
// sr.reveal(`.foto_cwe`, {origin:'left',delay:500})
// sr.reveal(`.foto_cwo`, {origin:'right',delay:500})
// sr.reveal(`.about__nama`, {delay: 100})
sr.reveal(`.basmalah,.about__title, .about__tanggal, .foto_mempelai, .about__nama`,{interval: 300})

sr.reveal(`.section__title`,{delay: 100})
sr.reveal(`.acara__title`,{delay: 400})
sr.reveal(`.acara__akad`, {origin:'left', delay:800})
sr.reveal(`.acara__resepsi`, {origin:'right', delay:800})
sr.reveal(`.nama__acara, .tempat__acara, .button__kalender`,{interval:100, delay:1000})

sr.reveal(`.lokasi, .buka_peta, .peta`,{interval:300, delay:100})

sr.reveal(`.galeri__title`,{delay: 100})
sr.reveal(`.gallery__item`,{interval: 300,delay: 400})

sr.reveal(`.jenis_kirim,.nama__bank, .button_rek`,{interval: 300,delay: 800})

sr.reveal(`.bunga_quotes,.ucapan_1, .nama_berbahagia,.ucapan_2,.ucapan_3`,{interval: 300,delay: 800})
// sr.reveal(`.footer__copy`,{delay: 1500})


function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).html()).select();
    document.execCommand("copy");
    $temp.remove();
}

var track = document.getElementById('track');
track.volume = 0.2;
// track.autoplay = true;
// track.loop = true;
window.onload = (event) => {
    setTimeout(() => {
        track.play();
      }, 500)
};
    

var controlBtn = document.getElementById('play-pause');
var home = document.getElementById('home');
controlBtn.className = "playing";

function playPause() {
    if (track.paused) {
        track.play();
        //controlBtn.textContent = "Pause";
        controlBtn.className = "playing";
    } else { 
        track.pause();
         //controlBtn.textContent = "Play";
        controlBtn.className = "pause";
    }
}

controlBtn.addEventListener("click", playPause); 
// home.addEventListener("click", playPause); 

track.addEventListener("ended", function() {
    controlBtn.className = "play";
});

// document.addEventListener('contextmenu', event => event.preventDefault());
// document.onkeydown = function(e) {
//     if(event.keyCode == 123) {
//         return false;
//     }
//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//         return false;
//     }
//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//         return false;
//     }
//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//         return false;
//     }
//     if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//         return false;
//     }
//     if(e.ctrlKey && (e.which == 83)) {
//         e.preventDefault();
//         return false;
//       }
// }

