document.addEventListener('DOMContentLoaded', function() {
  // Inicialização do Swiper
  var swiper = new Swiper('.swiper-mySwiper', {
    slidesPerView: 1, // Apenas um slide visível de cada vez
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Outras funções JavaScript, como o código para alterar a classe do header com base no scroll
  let header = document.getElementById('header');
  window.addEventListener('scroll', () => { 
    if (window.scrollY >= 200) { 
      header.classList.add('scrolled'); 
    } else {
      header.classList.remove('scrolled'); 
    }
  });
});
