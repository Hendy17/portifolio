// Inicialização do Swiper
var swiper = new Swiper('.swiper-mySwiper', {
  slidesPerView: 1, // Define quantos slides serão exibidos simultaneamente
  spaceBetween: 30, // Define o espaçamento entre os slides
  navigation: {
    nextEl: '.swiper-button-next', // Seletor para o botão "Próximo"
    prevEl: '.swiper-button-prev', // Seletor para o botão "Anterior"
  },
});

// Adiciona um ouvinte de evento de rolagem à janela
window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  // Verifica a posição de rolagem da página
  if (window.scrollY >= 200) {
    // Adiciona a classe 'scrolled' ao elemento com o ID 'header'
    header.classList.add('scrolled');
  } else {
    // Remove a classe 'scrolled' do elemento com o ID 'header'
    header.classList.remove('scrolled');
  }
});
