// Detectar si estamos en la página "programacion.html"
const desdeProgramacion = window.location.pathname.includes("programacion.html");

// Lista de eventos
const eventos = [
  //{
  //  titulo: "Mundial de Clubes FIFA 2025",
  //  tituloDestacado: "Ver Mundial de Clubes FIFA 2025 En Vivo",
  //  descripcion: "Del 14 de junio al 13 de julio",
  //  imagen: "https://www.365scores.com/es/news/wp-content/uploads/2024/12/image-17-1024x582.png",
  //  imagenDestacada: "IMAGENES/mundialdeclubes2025.webp",
  //  enlace: "HTML/destacada.html", //Entrada Index
  //  enlaceProgramacion: "destacada.html", //Progrmación
  //  disponible: true,
  //  destacado: true,
  //  orden: 1,
   // inicio: "2025-06-14T12:00:00",
   // fin: "2025-07-13T23:59:59"
  //},

  {
    titulo: "Fluminense Vs Dortmund - Mundial de Clubes 2025",
    tituloDestacado: "Ver Mundial de Clubes FIFA 2025 En Vivo",
    descripcion: "Mundial de Clubes 2025",
    imagen: "https://www.ole.com.ar/2025/06/16/iK-NPaKak_1290x760__1.jpg",
    imagenDestacada: "IMAGENES/mundialdeclubes2025.webp",
    enlace: "HTML/destacada.html", //Entrada Index
    enlaceProgramacion: "destacada.html", //Progrmación
    destacado: true,
    orden: 2,
    inicio: "2025-06-17T11:00:00",
    fin: "2025-06-17T13:30:00"
  },

  {
    titulo: "River Plate Vs Urawa Red - Mundial de Clubes 2025",
    tituloDestacado: "Ver Mundial de Clubes FIFA 2025 En Vivo",
    descripcion: "Mundial de Clubes 2025",
    imagen: "https://www.ole.com.ar/images/2025/06/16/JECcITDMa_1290x760__2.jpg#1750082176759",
    imagenDestacada: "IMAGENES/mundialdeclubes2025.webp",
    enlace: "HTML/destacada.html", //Entrada Index
    enlaceProgramacion: "destacada.html", //Progrmación
    destacado: true,
    orden: 3,
    inicio: "2025-06-17T14:00:00",
    fin: "2025-06-17T16:00:00"
  },


 // {
 //   titulo: "Copa Oro de la Concacaf 2025",
  //  tituloDestacado: "Ver Copa Oro de la Concacaf En Vivo",
  //  descripcion: "Del 14 de junio al 6 de julio",
  //  imagen: "https://pbs.twimg.com/media/GtfcAWBaoAEYseK.jpg:large",
  //  imagenDestacada: "https://ds-images.bolavip.com/news/image?src=https%3A%2F%2Fimages.bolavip.com%2Fjpg%2Fmx%2Ffull%2FBMX_20240808_BMX_151308_cop.jpg&width=1200&height=740",
  //  enlace: "HTML/destacada3.html", //Entrada Index
 //   enlaceProgramacion: "destacada3.html", //Progrmación
 //   destacado: false,
 //   inicio: "2025-06-16T18:00",
 //   fin: "2025-07-06T23:59",
 //   orden: 2
//  },

  {
    titulo: "Curazao Vs El Salvador - Copa Oro 2025",
    tituloDestacado: "Copa Oro de la Concacaf 2025 En Vivo",
    descripcion: "Copa Oro de la Concacaf 2025",
    imagen: "https://images.mlssoccer.com/image/private/t_editorial_landscape_8_desktop_mobile/prd-league/p1yazsnshenwrj4negv0.png",
    imagenDestacada: "https://ds-images.bolavip.com/news/image?src=https%3A%2F%2Fimages.bolavip.com%2Fjpg%2Fmx%2Ffull%2FBMX_20240808_BMX_151308_cop.jpg&width=1200&height=740",
    enlace: "HTML/destacada3.html", //Entrada Index
    enlaceProgramacion: "destacada3.html", //Progrmación
    destacado: true,
    inicio: "2025-06-17T19:00",
    fin: "2025-06-17T21:30",
    orden: 4,
  },

  {
    titulo: "Monterrey Vs Inter - Mundial de Clubes 2025",
    tituloDestacado: "Ver Mundial de Clubes FIFA 2025 En Vivo",
    descripcion: "Mundial de Clubes 2025",
    imagen: "https://www.ole.com.ar/2025/06/16/aE4chr6gt_720x0__1.jpg",
    imagenDestacada: "IMAGENES/mundialdeclubes2025.webp",
    enlace: "HTML/destacada.html", //Entrada Index
    enlaceProgramacion: "destacada.html", //Progrmación
    destacado: true,
    orden: 5,
    inicio: "2025-06-17T20:00:00",
    fin: "2025-06-17T22:00:00"
  },


  {
    titulo: "Canadá Vs Honduras - Copa Oro 2025",
    tituloDestacado: "Copa Oro de la Concacaf 2025 En Vivo",
    descripcion: "Copa Oro de la Concacaf 2025",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkqOryacwb-0Av63pG8t_bR8jvMiWZXDg7Q&s",
    imagenDestacada: "https://ds-images.bolavip.com/news/image?src=https%3A%2F%2Fimages.bolavip.com%2Fjpg%2Fmx%2Ffull%2FBMX_20240808_BMX_151308_cop.jpg&width=1200&height=740",
    enlace: "HTML/destacada3.html", //Entrada Index
    enlaceProgramacion: "destacada3.html", //Progrmación
    destacado: true,
    inicio: "2025-06-17T21:30",
    fin: "2025-06-17T23:30",
    orden: 6,
  },

  {
    titulo: "WWE Monday Night Raw 23 de junio de 2025",
    tituloDestacado: "Ver WWE Monday Night Raw En Vivo",
    descripcion: "Transmisión en vivo.",
    imagen: "https://i0.wp.com/featuresofwrestling.com/wp-content/uploads/2025/06/wwe-raw-june-16.jpg?fit=1200%2C675&ssl=1",
    imagenDestacada: "https://i0.wp.com/featuresofwrestling.com/wp-content/uploads/2025/06/wwe-raw-june-16.jpg?fit=1200%2C675&ssl=1",
    enlace: "HTML/destacada2.html", //Entrada Index
    enlaceProgramacion: "destacada2.html", //Progrmación
    disponible: true,
    destacado: true,
    orden: 7,
    inicio: "2025-06-23T19:00:00",
    fin: "2025-06-23T22:00:00"
  },
  {
    titulo: "WWE NXT 17 de junio de 2025",
    tituloDestacado: "Ver WWE NXT 17 de junio de 2025 En Vivo",
    descripcion: "Transmisión en vivo.",
    imagen: "https://img.solowrestling.com/images/140/140803-wwe-nxt.jpg",
    imagenDestacada: "https://img.solowrestling.com/images/140/140803-wwe-nxt.jpg",
    enlace: "HTML/destacada2.html", //Entrada Index
    enlaceProgramacion: "destacada2.html", //Progrmación
    destacado: false,
    inicio: "2025-06-17T19:00",
    fin: "2025-06-17T21:30",
    orden: 8,
  },
  {
    titulo: "AEW Grand Slam México - Junio 2025",
    tituloDestacado: "Ver AEW Grand Slam México En Vivo",
    descripcion: "Miércoles 18 de junio",
    imagen: "https://static-live.nmas.com.mx/nmas-news/styles/corte_16_9/cloud-storage/2025-04/aew-grand-slam-arena-mexico-cmll-boletos.jpg?h=920929c4&itok=7OtrCZPx",
    imagenDestacada: "https://static-live.nmas.com.mx/nmas-news/styles/corte_16_9/cloud-storage/2025-04/aew-grand-slam-arena-mexico-cmll-boletos.jpg?h=920929c4&itok=7OtrCZPx",
    enlace: "HTML/FoxMX.html", //Entrada Index
    enlaceProgramacion: "FoxMX.html", //Progrmación
    disponible: false,
    destacado: false,
    orden: 9,
    inicio: "2025-06-18T19:00:00",
    fin: "2025-06-18T22:30:00"
  },
  {
    titulo: "WWE SmackDown 20 de junio de 2025",
    tituloDestacado: "Ver WWE SmackDown 20 de junio de 2025 En Vivo",
    descripcion: "Transmisión en vivo.",
    imagen: "https://featuresofwrestling.com/wp-content/uploads/2025/06/wwe-smackdown-june-20.jpg",
    imagenDestacada: "https://featuresofwrestling.com/wp-content/uploads/2025/06/wwe-smackdown-june-20.jpg",
    enlace: "HTML/destacada2.html", //Entrada Index
    enlaceProgramacion: "destacada2.html", //Progrmación
    disponible: false,
    destacado: false,
    orden: 10,
    inicio: "2025-06-20T19:00:00",
    fin: "2025-06-20T21:30:00"
  },
  {
    titulo: "Final Ida Liga BetPlay Dimayor 2025-1",
    tituloDestacado: "Ver Final Liga BetPlay 2025-1 En Vivo",
    descripcion: "Lunes 23 de junio",
    imagen: "https://currambachannel.com/wp-content/uploads/2025/05/liga-betplay-dimayor.jpg",
    imagenDestacada: "https://currambachannel.com/wp-content/uploads/2025/05/liga-betplay-dimayor.jpg",
    enlace: "HTML/Winplus.html", //Entrada Index
    enlaceProgramacion: "Winplus.html", //Progrmación
    destacado: false,
    inicio: "2025-06-23T00:00",
    fin: "2025-06-23T23:59",
    orden: 11,
  },
  {
    titulo: "WWE Night Of Champions 2025",
    tituloDestacado: "NOC 2025 - Este sábado",
    descripcion: "Sábado 28 de junio",
    imagen: "https://i.ytimg.com/vi/iH69djqmbco/maxresdefault.jpg",
    imagenDestacada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe1i-86gCPH_6GhM7zY6dcuXolAtynB43h_A&s",
    enlace: "HTML/destacada2.html", //Entrada Index
    enlaceProgramacion: "destacada2.html", //Progrmación
    disponible: false,
    destacado: false,
    orden: 12,
    inicio: "2025-06-28T19:00:00",
    fin: "2025-06-28T23:00:00"
  }
];

// Ordenar eventos por su orden
eventos.sort((a, b) => a.orden - b.orden);

// Obtener el contenedor donde se mostrarán los eventos
const contenedor = document.getElementById("contenedor-eventos");

function mostrarProximoEventoEnVivo() {
  const ahora = new Date();
  const eventosFuturos = eventos.filter(evento => new Date(evento.inicio) > ahora);
  if (eventosFuturos.length === 0) return;

  eventosFuturos.sort((a, b) => new Date(a.inicio) - new Date(b.inicio));
  const proximo = eventosFuturos[0];
  const inicioProximo = new Date(proximo.inicio);

  const contenedor = document.getElementById("proximo-evento");

  function actualizarTemporizador() {
    const ahora = new Date();
    const diff = inicioProximo - ahora;

    if (diff <= 0) {
      contenedor.textContent = "¡Ya está en vivo!";
      return;
    }

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    let tiempoTexto = "PRÓXIMO EN VIVO: ";
    if (dias > 0) tiempoTexto += `${dias}d `;
    if (horas > 0 || dias > 0) tiempoTexto += `${horas}h `;
    if (minutos > 0) tiempoTexto += `${minutos}m `;
    tiempoTexto += `${segundos}s`;

    contenedor.textContent = `${tiempoTexto} - ${proximo.titulo}`;
  }

  actualizarTemporizador();
  setInterval(actualizarTemporizador, 1000);
}

function mostrarEventosEnVivo() {
  const contenedor = document.getElementById("eventos-en-vivo");
  if (!contenedor) return;

  const ahora = new Date();
  const eventosEnVivo = eventos.filter(evento => {
    const inicio = new Date(evento.inicio);
    const fin = new Date(evento.fin);
    return ahora >= inicio && ahora <= fin;
  });

  eventosEnVivo.forEach(evento => {
    const enlace = desdeProgramacion && evento.enlaceProgramacion ? evento.enlaceProgramacion : evento.enlace;

    const div = document.createElement("div");
    div.className = "evento-en-vivo";

    div.innerHTML = `
      <span>${evento.titulo}</span>
      <a href="${enlace}" class="btn btn-danger btn-sm">Ver en Vivo</a>
    `;

    contenedor.appendChild(div);
  });
}


// Mostrar eventos
if (contenedor) {
  eventos.forEach((evento, index) => {
    const inicio = new Date(evento.inicio);
    const fin = new Date(evento.fin);
    const ahora = new Date();
    const diferenciaMinutos = (inicio - ahora) / (1000 * 60);
    const enlaceCorrecto = desdeProgramacion && evento.enlaceProgramacion ? evento.enlaceProgramacion : evento.enlace;

    const card = document.createElement("div");
    card.className = "card h-100 bg-secondary text-white me-3";
    card.style.width = "18rem";

    let botonHTML = "";
    if (ahora > fin) {
      botonHTML = `<button class="btn btn-outline-light ver-evento" data-disponible="finalizado">Evento finalizado</button>`;
    } else if (diferenciaMinutos <= 30) {
      botonHTML = `<a href="${enlaceCorrecto}" class="btn btn-light ver-evento" data-disponible="true">Ver Evento</a>`;
    } else {
      botonHTML = `<button class="btn btn-outline-light ver-evento" data-disponible="false">Evento no disponible aún</button>`;
    }

    card.innerHTML = `
      <img src="${evento.imagen}" class="card-img-top" alt="${evento.titulo}">
      <div class="card-body">
        <h5 class="card-title">${evento.titulo}</h5>
        <p class="card-text">${evento.descripcion}</p>
        <p class="temporizador" data-inicio="${evento.inicio}" data-fin="${evento.fin}" data-index="${index}" style="color:white"></p>
        ${botonHTML}
      </div>
    `;
    contenedor.appendChild(card);
  });
}

function iniciarTemporizadores() {
  const temporizadores = document.querySelectorAll(".temporizador");

  temporizadores.forEach(temp => {
    const inicio = new Date(temp.dataset.inicio);
    const fin = new Date(temp.dataset.fin);
    const index = parseInt(temp.dataset.index);
    const card = temp.closest(".card");
    const btn = card.querySelector(".ver-evento");
    const enlaceCorrecto = desdeProgramacion && eventos[index].enlaceProgramacion ? eventos[index].enlaceProgramacion : eventos[index].enlace;

    function actualizar() {
      const ahora = new Date();
      const dif = inicio - ahora;

      if (ahora >= fin) {
        const minutosDesdeFin = (ahora - fin) / (1000 * 60);
        if (minutosDesdeFin >= 15) {
          card.remove(); // Ocultar
        } else {
          temp.textContent = "Finalizado";
          if (btn && btn.dataset.disponible !== "finalizado") {
            btn.outerHTML = `<button class="btn btn-outline-light ver-evento" data-disponible="finalizado">Evento finalizado</button>`;
          }
        }
        return;
      }

      if (dif <= 0) {
        temp.textContent = "En vivo";
        if (btn && btn.dataset.disponible !== "true") {
          btn.outerHTML = `<a href="${enlaceCorrecto}" class="btn btn-light ver-evento" data-disponible="true">Ver Evento</a>`;
        }
        return;
      }

      const minutosRestantes = dif / (1000 * 60);
      if (minutosRestantes <= 30 && btn && btn.dataset.disponible === "false") {
        btn.outerHTML = `<a href="${enlaceCorrecto}" class="btn btn-light ver-evento" data-disponible="true">Ver Evento</a>`;
      }

      const dias = Math.floor(dif / (1000 * 60 * 60 * 24));
      const horas = Math.floor((dif / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((dif / (1000 * 60)) % 60);
      const segundos = Math.floor((dif / 1000) % 60);

      let tiempoTexto = "";
      if (dias > 0) tiempoTexto += `${dias}d `;
      if (horas > 0 || dias > 0) tiempoTexto += `${horas}h `;
      if (minutos > 0) tiempoTexto += `${minutos}m `;
      tiempoTexto += `${segundos}s`;

      temp.textContent = minutosRestantes <= 5 ? `${tiempoTexto} ¡Comienza pronto!` : tiempoTexto;
    }

    actualizar();
    setInterval(actualizar, 1000);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  iniciarTemporizadores();
  mostrarProximoEventoEnVivo();
  mostrarEventosEnVivo();

  document.addEventListener("click", function (e) {
    const btn = e.target.closest(".ver-evento");
    const mensaje = document.getElementById("mensaje-evento");

    if (btn && btn.dataset.disponible === "false") {
      e.preventDefault();
      if (mensaje) {
        mensaje.textContent = "⏳ Evento aún no disponible";
        mensaje.classList.remove("d-none");
        setTimeout(() => mensaje.classList.add("d-none"), 3000);
      }
    }

    if (btn && btn.dataset.disponible === "finalizado") {
      e.preventDefault();
      if (mensaje) {
        mensaje.textContent = "📴 Este evento ya finalizó";
        mensaje.classList.remove("d-none");
        setTimeout(() => mensaje.classList.add("d-none"), 3000);
      }
    }
  });
});

// CAMBIO AUTOMÁTICO DE TÍTULO EN destacadas
document.addEventListener("DOMContentLoaded", () => {
  const rutaActual = window.location.pathname;
  const nombreArchivo = rutaActual.substring(rutaActual.lastIndexOf("/") + 1);
  const archivosPermitidos = ["destacada.html", "destacada2.html", "destacada3.html"];

  if (archivosPermitidos.includes(nombreArchivo)) {
    const ahora = new Date();
    const eventosDestacados = eventos.filter(evento =>
      evento.enlace.includes(nombreArchivo) || evento.enlaceProgramacion.includes(nombreArchivo)
    );

    const eventoActivo = eventosDestacados.find(evento => {
      const inicio = new Date(evento.inicio);
      const fin = new Date(evento.fin);
      return ahora >= inicio && ahora <= fin;
    });

    const proximoEvento = eventosDestacados.find(evento => new Date(evento.inicio) > ahora);
    const eventoMostrado = eventoActivo || proximoEvento;

    if (eventoMostrado && eventoMostrado.tituloDestacado) {
      const h1 = document.querySelector(".titulo-evento");
      if (h1) h1.textContent = eventoMostrado.titulo;
    }
  }
});
