document.addEventListener("DOMContentLoaded", (e) => {


})

window.addEventListener('load', function(){
  const $loader = document.querySelector('.loader');
  const $principal = document.getElementById('principal-content');

  setTimeout(function() {
    console.log('carga completa');
    $loader.classList.add('minimizar');
    $principal.classList.remove('hidden');
  }, 0); // 5000 milisegundos (5 segundos) CAMBIARLA
});
