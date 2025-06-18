document.addEventListener("DOMContentLoaded", function () {
  const videos = [

    {
      titulo: "WWE Monday Night Raw 16 de Junio 2025 Resumen",
      miniatura: "https://i.ytimg.com/vi/D2b8QCFRaVs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAAgqsv-KsoIqqaxPwgcLc9ri7qyw",
      videoId: "EvRC9NWRJUw",
      categoria: "WWE"
    },
    {
      titulo: "WWE SmackDown 13 de junio de 2025 Resumen",
      miniatura: "https://i.ytimg.com/vi/_bllJBEPv4E/maxresdefault.jpg",
      videoId: "TQ75X6tIJpk",
      categoria: "WWE"
    },
    {
      titulo: "Argentina Vs Colombia - Eliminatoria Mundial 2026 Resumen",
      miniatura: "https://i.ytimg.com/vi/Su_tycrZMA4/maxresdefault.jpg",
      videoId: "8CoXJ7ZWXWY",
      categoria: "Eliminatoria Mundial 2026"
    },
    {
      titulo: "Gunther conquista el Campeonato Mundial Pesado - Raw 9 de Junio",
      miniatura: "https://i.ytimg.com/vi/Xpso5DLyQUc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCQHbsepw6lq8oLNR6TdvV4uousyw",
      videoId: "-Y9gtGdqlDc",
      categoria: "WWE"
    },
    {
      titulo: "WWE Money in The Bank 2025 - Resumen Completo",
      miniatura: "https://i.ytimg.com/vi/ebbOpU8BuwY/maxresdefault.jpg",
      videoId: "cweK627ljxY",
      categoria: "WWE"
    },
    {
      titulo: "WWE Worlds Collide 2025 - Resumen Completo",
      miniatura: "https://i.ytimg.com/vi/DDSV9U3c0Io/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCU0xytBx8yP1VJs0-ELp5kbReXvw",
      videoId: "_DGaIf0fhok",
      categoria: "WWE Worlds Collide"
    },
    {
      titulo: "El PSG aplastó al Inter y es campeón de la Champions League",
      miniatura: "https://i.ytimg.com/vi/ZZAtqW-1158/maxresdefault.jpg",
      videoId: "ZZAtqW-1158",
      categoria: "UEFA Champions League"
    },
    {
      titulo: "Resultados Monday Night Raw 2 de Junio 2025",
      miniatura: "https://i.ytimg.com/vi/Hlpg57TyNaU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLASTEU4QX7LrGYTH9yGdXaMX6mQNw",
      videoId: "ppuSesibwP4",
      categoria: "WWE RAW"
    },
    {
      titulo: "Chelsea campeón de la Conference League",
      miniatura: "https://i.ytimg.com/vi/u7Xpidn8mDY/maxresdefault.jpg",
      videoId: "u7Xpidn8mDY",
      categoria: "Resumen y mejores momentos"
    },
    {
      titulo: "¡Stephanie Vaquer pierde el título!",
      miniatura: "https://www.wwe.com/f/styles/og_image/public/2025/05/dchinxt855_07_ntwk--91560c60f1b5ad849c076187e75fe049.jpg",
      videoId: "R_IZrbAKolA",
      categoria: "WWE NXT - Mayo 27"
    },
    {
      titulo: "WWE Saturday Night's Main Event 2025 Resultados",
      miniatura: "https://i.ytimg.com/vi/PmfetrCWOC8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCStGSuBlj0dE0o6htDtZaxNsFaAw",
      videoId: "USVczeoxbbY",
      categoria: "WWE"
    },
    {
      titulo: "Worlds Collide - ¿Qué esperar de AAA y WWE?",
      miniatura: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVPlM_eCHn5Qt74Ngx4rspWdBYHO9Ti0-9aw&s",
      videoId: "_WdZ6IFHXmI",
      categoria: "WWE Worlds Collide"
    }
  ];

  const contenedor = document.getElementById("sidebar-scroll");
  const reproductor = document.getElementById("main-video");
  const mensaje = document.getElementById('mensaje-evento');

  // Generar miniaturas
  videos.forEach((video) => {
    const enlace = document.createElement("a");
    enlace.href = "#";
    enlace.className = "list-group-item list-group-item-action d-flex gap-3 align-items-start video-thumb";
    enlace.setAttribute("data-video", video.videoId);
    enlace.innerHTML = `
      <img src="${video.miniatura}" class="rounded" style="width: 100px;" alt="Miniatura">
      <div>
        <h6 class="mb-1 fw-bold">${video.titulo}</h6>
        <small>${video.categoria}</small>
      </div>
    `;
    contenedor.appendChild(enlace);
  });

  // Cargar primer video
  const primerVideo = document.querySelector('.video-thumb');
  if (primerVideo && reproductor) {
    const primerID = primerVideo.getAttribute('data-video');
    reproductor.src = `https://www.youtube.com/embed/${primerID}`;
  }

  // Reemplazar video al hacer clic en miniatura
  contenedor.addEventListener("click", function (e) {
    const link = e.target.closest(".video-thumb");
    if (link) {
      e.preventDefault();
      const videoId = link.getAttribute("data-video");
      if (reproductor) {
        reproductor.src = `https://www.youtube.com/embed/${videoId}`;
      }
    }
  });

  // Mostrar mensaje si el evento aún no está disponible
  document.querySelectorAll('.ver-evento').forEach(boton => {
    boton.addEventListener('click', function (e) {
      if (this.dataset.disponible === "false") {
        e.preventDefault();
        if (mensaje) {
          mensaje.classList.remove('d-none');
          setTimeout(() => mensaje.classList.add('d-none'), 3000);
        }
      }
    });
  });

  // Ajustar altura del sidebar al reproductor
  window.addEventListener('load', () => {
    const sidebar = document.getElementById("sidebar-scroll");
    if (reproductor && sidebar) {
      const height = reproductor.offsetHeight;
      sidebar.style.maxHeight = height + 'px';
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const canales = [
    {
      titulo: "ESPN En Vivo",
      img: "./IMAGENES/espn.png",
      link: "./HTML/ESPN.html"
    },
    {
      titulo: "Win Sports + En Vivo",
      img: "./IMAGENES/image.jfif",
      link: "./HTML/Winplus.html"
    },
    {
      titulo: "DSports En Vivo",
      img: "./IMAGENES/Dsports.png",
      link: "./HTML/Dsports.html"
    },
    {
      titulo: "Fox Sports MX En Vivo",
      img: "./IMAGENES/fxmx.png",
      link: "./HTML/FoxMX.html"
    },
    {
      titulo: "ESPN 2 En Vivo",
      img: "./IMAGENES/espn-2-logo-png_seeklogo-49202.png",
      link: "./HTML/ESPN2.html"
    },
    {
      titulo: "TyC Sports En Vivo",
      img: "./IMAGENES/tycsports.png",
      link: "./HTML/tycsports.html"
    },
    {
      titulo: "TNT Sports En Vivo",
      img: "./IMAGENES/tnt-sports-logo-png_seeklogo-486966.png",
      link: "./HTML/tntsportsa.html"
    },
    {
      titulo: "TUDN En Vivo",
      img: "./IMAGENES/Tudn-Free-Trial.png",
      link: "./HTML/TUDNMX.html"
    },
    {
      titulo: "ESPN Deportes USA En Vivo",
      img: "./IMAGENES/espnusa.png",
      link: "./HTML/espndeportesusa.html"
    }
  ];

  const contenedor = document.getElementById("contenedor-canales");

  // Crear título
  const titulo = document.createElement("h1");
  titulo.id = "canales";
  titulo.className = "text-center mb-4";
  titulo.textContent = "CANALES EN VIVO";
  contenedor.appendChild(titulo);

  // Crear fila (row)
  const row = document.createElement("div");
  row.className = "row";

  // Crear cada canal como columna
  canales.forEach(canal => {
    const col = document.createElement("div");
    col.className = "col-md-4 h-100";

    col.innerHTML = `
      <a href="${canal.link}" class="text-decoration-none">
        <div class="card card-uniforme mb-4 shadow-sm">
          <img src="${canal.img}" class="card-img-top" alt="Canal">
          <div class="card-body">
            <h5 class="card-title">${canal.titulo}</h5>
            <p class="card-text">Transmisión continua en alta definición.</p>
          </div>
        </div>
      </a>
    `;

    row.appendChild(col);
  });

  // Insertar la fila en el contenedor principal
  contenedor.appendChild(row);
});
