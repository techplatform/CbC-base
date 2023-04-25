function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}
var x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu; 

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  speed: 2000,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // And if we need scrollbar
  autoplay: {
    delay: 5000,
  },
});

