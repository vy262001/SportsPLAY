document.addEventListener('DOMContentLoaded', function () {

  // Mostrar mensaje si el evento aún no está disponible
  document.querySelectorAll('.ver-evento').forEach(boton => {
    boton.addEventListener('click', function (e) {
      if (this.dataset.disponible === "false") {
        e.preventDefault();
        const mensaje = document.getElementById('mensaje-evento');
        if (mensaje) {
          mensaje.classList.remove('d-none');
          setTimeout(() => mensaje.classList.add('d-none'), 3000);
        }
      }
    });
  });

  // Lógica para cargar video principal desde el primer thumbnail
  const mainIframe = document.getElementById('main-video');
  const sidebar = document.getElementById('sidebar-scroll');

  const firstVideoThumb = document.querySelector('.video-thumb');
  if (firstVideoThumb && mainIframe) {
    const firstVideoId = firstVideoThumb.getAttribute('data-video');
    mainIframe.src = `https://www.youtube.com/embed/${firstVideoId}`;
  }

  // Cambiar el video principal al hacer clic en otro thumbnail
  document.querySelectorAll('.video-thumb').forEach(el => {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const clickedVideoId = this.getAttribute('data-video');
      if (mainIframe) {
        mainIframe.src = `https://www.youtube.com/embed/${clickedVideoId}`;
      }
    });
  });

  // Ajustar altura del sidebar al tamaño del video principal
  window.addEventListener('load', () => {
    if (mainIframe && sidebar) {
      const height = mainIframe.offsetHeight;
      sidebar.style.maxHeight = height + 'px';
    }
  });

});
