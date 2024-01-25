let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  paginatio: {
    el: ".swiper-paginatio",
    clickable: true,
  },
  navigatio: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let header = document.getElementById('header')

window.addEventListener('scroll', () => {  
})