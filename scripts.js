let swiper = new Swiper(".swiper-mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let header = document.getElementById('header')
window.addEventListener('scroll', () => { 
  if (window.scrollY >= 200) { 
    header.classList.add('scrolled'); 
  } else {
    header.classList.remove('scrolled'); 
  }
});
