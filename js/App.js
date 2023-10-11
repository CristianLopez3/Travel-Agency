document.addEventListener("DOMContentLoaded", (e) => {

  // SWIPPER CONFIGURATIONS
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: 'cube',
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
/*    autoplay: {
      delay: 1000,
      pauseOnMouseEnter: true,
      disableInteraction: false,
    },*/
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    shadow: true,
    shadowOffset: 20,
    shadowScale: 0.94,
    slideShadows: true,
  });


  // LOADER CONFIGURATIONS
  
  window.addEventListener('load', function(){
    const $loader = document.querySelector('.loader');
    const $principal = document.getElementById('principal-content');
  
    setTimeout(function() {
      console.log('carga completa');
      $loader.classList.add('minimizar');
      $loader.style.transform = "scale(0)";
    
      $principal.classList.remove('hidden');
    }, 1000); // 5000 milisegundos (5 segundos) CAMBIARLA

  });

  // ANOTHER CONFIGURATION


  
  
  

})



