// Detectar si estamos en la página "programacion.html"
const desdeProgramacion = window.location.pathname.includes("programacion.html");

// Lista de eventos
const eventos = [

// Eventos 2025-06-19
{
    titulo: "Inter Miami Vs Porto - Mundial de Clubes 2025",
    tituloDestacado: "Ver Mundial de Clubes FIFA 2025 En Vivo",
    descripcion: "Mundial de Clubes 2025",
    imagen: "https://www.ole.com.ar/2025/06/18/crOflMEsa_1290x760__1.jpg",
    imagenDestacada: "IMAGENES/mundialdeclubes2025.webp",
    enlace: "HTML/destacada.html",
    enlaceProgramacion: "destacada.html",
    destacado: true,
    orden: 2,
    inicio: "2025-06-19T14:00:00",
    fin: "2025-06-19T16:00:00"
},


// Eventos 2025-06-21
{
    titulo: "Mamelodi Vs Dortmund - Mundial de Clubes 2025",
    tituloDestacado: "Ver Mundial de Clubes FIFA 2025 En Vivo",
    descripcion: "Mundial de Clubes 2025",
    imagen: "https://image.discovery.indazn.com/ca/v2/ca/image?id=ab2r6pmbqilkgq9nl6awlz6e3_image-header_pUs_1747916130000&quality=70",
    imagenDestacada: "IMAGENES/mundialdeclubes2025.webp",
    enlace: "HTML/destacada.html",
    enlaceProgramacion: "destacada.html",
    destacado: true,
    orden: 9,
    inicio: "2025-06-21T11:00:00",
    fin: "2025-06-21T13:00:00"
},
{
    titulo: "Inter Vs Urawa Reds - Mundial de Clubes 2025",
    tituloDestacado: "Ver Mundial de Clubes FIFA 2025 En Vivo",
    descripcion: "Mundial de Clubes 2025",
    imagen: "https://image.discovery.indazn.com/ca/v2/ca/image?id=5pzxbchh5qkfxint2xz6plmz_image-header_pUs_1747916130000&quality=70",
    imagenDestacada: "IMAGENES/mundialdeclubes2025.webp",
    enlace: "HTML/destacada.html",
    enlaceProgramacion: "destacada.html",
    destacado: true,
    orden: 10,
    inicio: "2025-06-21T14:00:00",
    fin: "2025-06-21T16:00:00"
},
{
    titulo: "Fluminense Vs Ulsan - Mundial de Clubes 2025",
    tituloDestacado: "Ver Mundial de Clubes FIFA 2025 En Vivo",
    descripcion: "Mundial de Clubes 2025",
    imagen: "https://image.discovery.indazn.com/ca/v2/ca/image?id=5wj26heozks166oe0ysr4dhfb_image-header_pUs_1749734163000&quality=70",
    imagenDestacada: "IMAGENES/mundialdeclubes2025.webp",
    enlace: "HTML/destacada.html",
    enlaceProgramacion: "destacada.html",
    destacado: true,
    orden: 11,
    inicio: "2025-06-21T17:00:00",
    fin: "2025-06-21T19:00:00"
},
{
    titulo: "Curazao Vs Canadá - Copa Oro 2025",
    tituloDestacado: "Ver Copa Oro de la Concacaf 2025 En Vivo",
    descripcion: "Copa Oro de la Concacaf 2025",
    imagen: "https://www.deportestvc.com/wp-content/uploads/2025/03/principal_cuales-son-las-selecciones-clasificadas-a-la-copa-oro-2025-estas-son-las-16-afortunadas.jpg",
    imagenDestacada: "https://www.deportestvc.com/wp-content/uploads/2025/03/principal_cuales-son-las-selecciones-clasificadas-a-la-copa-oro-2025-estas-son-las-16-afortunadas.jpg",
    enlace: "HTML/destacada3.html",
    enlaceProgramacion: "destacada3.html",
    destacado: false,
    inicio: "2025-06-21T18:00:00",
    fin: "2025-06-21T20:00:00",
    orden: 12
},
{
    titulo: "River Plate Vs Monterrey - Mundial de Clubes 2025",
    tituloDestacado: "Ver Mundial de Clubes FIFA 2025 En Vivo",
    descripcion: "Mundial de Clubes 2025",
    imagen: "https://image.discovery.indazn.com/ca/v2/ca/image?id=79oznqjlvguoeuvxoebislqb2_image-header_pUs_1750085293000&quality=70",
    imagenDestacada: "IMAGENES/mundialdeclubes2025.webp",
    enlace: "HTML/destacada.html",
    enlaceProgramacion: "destacada.html",
    destacado: true,
    orden: 13,
    inicio: "2025-06-21T20:00:00",
    fin: "2025-06-21T22:00:00"
},
{
    titulo: "Honduras Vs El Salvador - Copa Oro 2025",
    tituloDestacado: "Ver Copa Oro de la Concacaf 2025 En Vivo",
    descripcion: "Copa Oro de la Concacaf 2025",
    imagen: "https://www.deportestvc.com/wp-content/uploads/2025/03/principal_cuales-son-las-selecciones-clasificadas-a-la-copa-oro-2025-estas-son-las-16-afortunadas.jpg",
    imagenDestacada: "https://www.deportestvc.com/wp-content/uploads/2025/03/principal_cuales-son-las-selecciones-clasificadas-a-la-copa-oro-2025-estas-son-las-16-afortunadas.jpg",
    enlace: "HTML/destacada3.html",
    enlaceProgramacion: "destacada3.html",
    destacado: false,
    inicio: "2025-06-21T21:00:00",
    fin: "2025-06-21T23:00:00",
    orden: 14
},

// Eventos 2025-06-22
{
    titulo: "Juventus Vs Wydad AC - Mundial de Clubes 2025",
    tituloDestacado: "Ver Mundial de Clubes FIFA 2025 En Vivo",
    descripcion: "Mundial de Clubes 2025",
    imagen: "https://image.discovery.indazn.com/ca/v2/ca/image?id=ee09szjfrl4quqp1aj77sxl6w_image-header_pUs_1748550756000&quality=70",
    imagenDestacada: "IMAGENES/mundialdeclubes2025.webp",
    enlace: "HTML/destacada.html",
    enlaceProgramacion: "destacada.html",
    destacado: true,
    orden: 15,
    inicio: "2025-06-22T11:00:00",
    fin: "2025-06-22T13:00:00"
},
{
    titulo: "Real Madrid Vs Pachuca - Mundial de Clubes 2025",
    tituloDestacado: "Ver Mundial de Clubes FIFA 2025 En Vivo",
    descripcion: "Mundial de Clubes 2025",
    imagen: "https://image.discovery.indazn.com/ca/v2/ca/image?id=d5b8cwbt0zi3bwkv6i915bmz2_image-header_pUs_1750085941000&quality=70",
    imagenDestacada: "IMAGENES/mundialdeclubes2025.webp",
    enlace: "HTML/destacada.html",
    enlaceProgramacion: "destacada.html",
    destacado: true,
    orden: 16,
    inicio: "2025-06-22T14:00:00",
    fin: "2025-06-22T16:00:00"
},
{
    titulo: "RB Salzburg Vs Al Hilal - Mundial de Clubes 2025",
    tituloDestacado: "Ver Mundial de Clubes FIFA 2025 En Vivo",
    descripcion: "Mundial de Clubes 2025",
    imagen: "https://image.discovery.indazn.com/ca/v2/ca/image?id=cmoiylpbhcu9knd5g8yxxzt8e_image-header_pEs_1740401733000&quality=70",
    imagenDestacada: "IMAGENES/mundialdeclubes2025.webp",
    enlace: "HTML/destacada.html",
    enlaceProgramacion: "destacada.html",
    destacado: true,
    orden: 17,
    inicio: "2025-06-22T17:00:00",
    fin: "2025-06-22T19:00:00"
},
{
    titulo: "Arabia Saudita Vs Trinidad y Tobago - Copa Oro 2025",
    tituloDestacado: "Ver Copa Oro de la Concacaf 2025 En Vivo",
    descripcion: "Copa Oro de la Concacaf 2025",
    imagen: "https://www.deportestvc.com/wp-content/uploads/2025/03/principal_cuales-son-las-selecciones-clasificadas-a-la-copa-oro-2025-estas-son-las-16-afortunadas.jpg",
    imagenDestacada: "https://www.deportestvc.com/wp-content/uploads/2025/03/principal_cuales-son-las-selecciones-clasificadas-a-la-copa-oro-2025-estas-son-las-16-afortunadas.jpg",
    enlace: "HTML/destacada3.html",
    enlaceProgramacion: "destacada3.html",
    destacado: false,
    inicio: "2025-06-22T18:00:00",
    fin: "2025-06-22T20:00:00",
    orden: 18
},
{
    titulo: "Estados Unidos Vs Haití - Copa Oro 2025",
    tituloDestacado: "Ver Copa Oro de la Concacaf 2025 En Vivo",
    descripcion: "Copa Oro de la Concacaf 2025",
    imagen: "https://www.deportestvc.com/wp-content/uploads/2025/03/principal_cuales-son-las-selecciones-clasificadas-a-la-copa-oro-2025-estas-son-las-16-afortunadas.jpg",
    imagenDestacada: "https://www.deportestvc.com/wp-content/uploads/2025/03/principal_cuales-son-las-selecciones-clasificadas-a-la-copa-oro-2025-estas-son-las-16-afortunadas.jpg",
    enlace: "HTML/destacada3.html",
    enlaceProgramacion: "destacada3.html",
    destacado: false,
    inicio: "2025-06-22T18:00:00",
    fin: "2025-06-22T20:00:00",
    orden: 19
},
{
    titulo: "Manchester City Vs Al Ain - Mundial de Clubes 2025",
    tituloDestacado: "Ver Mundial de Clubes FIFA 2025 En Vivo",
    descripcion: "Mundial de Clubes 2025",
    imagen: "https://image.discovery.indazn.com/ca/v2/ca/image?id=epbgg3t2lcxp63nqp99lrv1i3_image-header_pUs_1740413914000&quality=50",
    imagenDestacada: "IMAGENES/mundialdeclubes2025.webp",
    enlace: "HTML/destacada.html",
    enlaceProgramacion: "destacada.html",
    destacado: true,
    orden: 20,
    inicio: "2025-06-22T20:00:00",
    fin: "2025-06-22T22:00:00"
},
{
    titulo: "República Dominicana Vs Surinam - Copa Oro 2025",
    tituloDestacado: "Ver Copa Oro de la Concacaf 2025 En Vivo",
    descripcion: "Copa Oro de la Concacaf 2025",
    imagen: "https://www.deportestvc.com/wp-content/uploads/2025/03/principal_cuales-son-las-selecciones-clasificadas-a-la-copa-oro-2025-estas-son-las-16-afortunadas.jpg",
    imagenDestacada: "https://www.deportestvc.com/wp-content/uploads/2025/03/principal_cuales-son-las-selecciones-clasificadas-a-la-copa-oro-2025-estas-son-las-16-afortunadas.jpg",
    enlace: "HTML/destacada3.html",
    enlaceProgramacion: "destacada3.html",
    destacado: false,
    inicio: "2025-06-22T21:00:00",
    fin: "2025-06-22T23:00:00",
    orden: 21
},
{
    titulo: "México Vs Costa Rica - Copa Oro 2025",
    tituloDestacado: "Ver Copa Oro de la Concacaf 2025 En Vivo",
    descripcion: "Copa Oro de la Concacaf 2025",
    imagen: "https://www.deportestvc.com/wp-content/uploads/2025/03/principal_cuales-son-las-selecciones-clasificadas-a-la-copa-oro-2025-estas-son-las-16-afortunadas.jpg",
    imagenDestacada: "https://www.deportestvc.com/wp-content/uploads/2025/03/principal_cuales-son-las-selecciones-clasificadas-a-la-copa-oro-2025-estas-son-las-16-afortunadas.jpg",
    enlace: "HTML/destacada3.html",
    enlaceProgramacion: "destacada3.html",
    destacado: false,
    inicio: "2025-06-22T21:00:00",
    fin: "2025-06-22T23:00:00",
    orden: 22
},

// Eventos 2025-06-23
{
    titulo: "Seattle Sounders Vs PSG - Mundial de Clubes 2025",
    tituloDestacado: "Ver Mundial de Clubes FIFA 2025 En Vivo",
    descripcion: "Mundial de Clubes 2025",
    imagen: "https://image.discovery.indazn.com/ca/v2/ca/image?id=4v1jk9zffiizxfk4nurnw0hig_image-header_pUs_1740397143000&quality=70",
    imagenDestacada: "IMAGENES/mundialdeclubes2025.webp",
    enlace: "HTML/destacada.html",
    enlaceProgramacion: "destacada.html",
    destacado: true,
    orden: 23,
    inicio: "2025-06-23T14:00:00",
    fin: "2025-06-23T16:00:00"
},
{
    titulo: "Atlético Madrid Vs Botafogo",
    tituloDestacado: "Ver Mundial de Clubes FIFA 2025 En Vivo",
    descripcion: "Mundial de Clubes 2025",
    imagen: "https://image.discovery.indazn.com/ca/v2/ca/image?id=9plvepqr2cxyspmlo49iby6yz_image-header_pRow_1736415194000&quality=70",
    imagenDestacada: "IMAGENES/mundialdeclubes2025.webp",
    enlace: "HTML/destacada.html",
    enlaceProgramacion: "destacada.html",
    destacado: true,
    orden: 24,
    inicio: "2025-06-23T14:00:00",
    fin: "2025-06-23T16:00:00"
},
{
    titulo: "Santa Fe Vs Medellín - Final Liga BetPlay 2025-I (Ida)",
    tituloDestacado: "Ver Liga BetPlay 2025 En Vivo",
    descripcion: "Partido de Ida",
    imagen: "https://cdn.clarosports.com/clarosports/2025/04/directo-ligabetplay-171746.jpg",
    imagenDestacada: "https://cdn.clarosports.com/clarosports/2025/04/directo-ligabetplay-171746.jpg",
    enlace: "HTML/Winplus.html",
    enlaceProgramacion: "Winplus.html",
    destacado: true,
    orden: 25,
    inicio: "2025-06-23T19:30:00",
    fin: "2025-06-23T21:30:00"
},
{
    titulo: "Porto Vs Al-Ahly - Mundial de Clubes 2025",
    tituloDestacado: "Ver Mundial de Clubes FIFA 2025 En Vivo",
    descripcion: "Mundial de Clubes 2025",
    imagen: "https://image.discovery.indazn.com/ca/v2/ca/image?id=f43yexvekmgpz1rvr8ae2ib7d_image-header_pRow_1736420675000&quality=70",
    imagenDestacada: "IMAGENES/mundialdeclubes2025.webp",
    enlace: "HTML/destacada.html",
    enlaceProgramacion: "destacada.html",
    destacado: true,
    orden: 26,
    inicio: "2025-06-23T20:00:00",
    fin: "2025-06-23T22:00:00"
},
{
    titulo: "Inter Miami Vs Palmeiras - Mundial de Clubes 2025",
    tituloDestacado: "Ver Mundial de Clubes FIFA 2025 En Vivo",
    descripcion: "Mundial de Clubes 2025",
    imagen: "https://image.discovery.indazn.com/ca/v2/ca/image?id=ae2mrcz6qgsl9caocudv2y82h_image-header_pUs_1740397527000&quality=70",
    imagenDestacada: "IMAGENES/mundialdeclubes2025.webp",
    enlace: "HTML/destacada.html",
    enlaceProgramacion: "destacada.html",
    destacado: true,
    orden: 27,
    inicio: "2025-06-23T20:00:00",
    fin: "2025-06-23T22:00:00"
},

// Eventos 2025-06-24
{
    titulo: "Guadalupe Vs Guatemala - Copa Oro 2025",
    tituloDestacado: "Ver Copa Oro de la Concacaf 2025 En Vivo",
    descripcion: "Copa Oro de la Concacaf 2025",
    imagen: "https://www.deportestvc.com/wp-content/uploads/2025/03/principal_cuales-son-las-selecciones-clasificadas-a-la-copa-oro-2025-estas-son-las-16-afortunadas.jpg",
    imagenDestacada: "https://www.deportestvc.com/wp-content/uploads/2025/03/principal_cuales-son-las-selecciones-clasificadas-a-la-copa-oro-2025-estas-son-las-16-afortunadas.jpg",
    enlace: "HTML/destacada3.html",
    enlaceProgramacion: "destacada3.html",
    destacado: false,
    inicio: "2025-06-24T18:00:00",
    fin: "2025-06-24T20:00:00",
    orden: 28
},
{
    titulo: "Panamá Vs Jamaica - Copa Oro 2025",
    tituloDestacado: "Ver Copa Oro de la Concacaf 2025 En Vivo",
    descripcion: "Copa Oro de la Concacaf 2025",
    imagen: "https://www.deportestvc.com/wp-content/uploads/2025/03/principal_cuales-son-las-selecciones-clasificadas-a-la-copa-oro-2025-estas-son-las-16-afortunadas.jpg",
    imagenDestacada: "https://www.deportestvc.com/wp-content/uploads/2025/03/principal_cuales-son-las-selecciones-clasificadas-a-la-copa-oro-2025-estas-son-las-16-afortunadas.jpg",
    enlace: "HTML/destacada3.html",
    enlaceProgramacion: "destacada3.html",
    destacado: false,
    inicio: "2025-06-24T18:00:00",
    fin: "2025-06-24T20:00:00",
    orden: 29
},
{
    titulo: "Canadá Vs El Salvador - Copa Oro 2025",
    tituloDestacado: "Ver Copa Oro de la Concacaf 2025 En Vivo",
    descripcion: "Copa Oro de la Concacaf 2025",
    imagen: "https://www.deportestvc.com/wp-content/uploads/2025/03/principal_cuales-son-las-selecciones-clasificadas-a-la-copa-oro-2025-estas-son-las-16-afortunadas.jpg",
    imagenDestacada: "https://ds-images.bolavip.com%2Fnews%2Fimage%3Fsrc%3Dhttps%253A%252F%252Fimages.bolavip.com%252Fjpg%252Fmx%252Ffull%252FBMX_20240808_BMX_151308_cop.jpg&width=1200&height=740",
    enlace: "HTML/destacada3.html",
    enlaceProgramacion: "destacada3.html",
    destacado: false,
    inicio: "2025-06-24T21:00:00",
    fin: "2025-06-24T23:00:00",
    orden: 30
},
{
    titulo: "Honduras Vs Curazao - Copa Oro 2025",
    tituloDestacado: "Ver Copa Oro de la Concacaf 2025 En Vivo",
    descripcion: "Copa Oro de la Concacaf 2025",
    imagen: "https://www.deportestvc.com/wp-content/uploads/2025/03/principal_cuales-son-las-selecciones-clasificadas-a-la-copa-oro-2025-estas-son-las-16-afortunadas.jpg",
    imagenDestacada: "https://www.deportestvc.com/wp-content/uploads/2025/03/principal_cuales-son-las-selecciones-clasificadas-a-la-copa-oro-2025-estas-son-las-16-afortunadas.jpg",
    enlace: "HTML/destacada3.html",
    enlaceProgramacion: "destacada3.html",
    destacado: false,
    inicio: "2025-06-24T21:00:00",
    fin: "2025-06-24T23:00:00",
    orden: 31
},

// Eventos 2025-06-28
{
    titulo: "Medellín Vs Santa Fe - Final Liga BetPlay 2025-I (Vuelta)",
    tituloDestacado: "Ver Liga BetPlay 2025 En Vivo",
    descripcion: "Partido de Vuelta",
    imagen: "https://elperiodicodeportivo.com.co/wp-content/uploads/2025/06/DTXKYLBZ5NGU3HJPOVII7RUVEE.jpg",
    imagenDestacada: "https://elperiodicodeportivo.com.co/wp-content/uploads/2025/06/DTXKYLBZ5NGU3HJPOVII7RUVEE.jpg",
    enlace: "HTML/Winplus.html",
    enlaceProgramacion: "Winplus.html",
    destacado: true,
    orden: 32,
    inicio: "2025-06-28T18:00:00",
    fin: "2025-06-28T20:00:00"
},

{
    titulo: "WWE Monday Night Raw 23 de junio de 2025",
    tituloDestacado: "Ver WWE Monday Night Raw En Vivo",
    descripcion: "Transmisión en vivo.",
    imagen: "https://www.newscaststudio.com/wp-content/uploads/2024/12/raw-old-logo.jpg",
    imagenDestacada: "../IMAGENES/RAWPoster.jpg",
    enlace: "HTML/destacada2.html", //Entrada Index
    enlaceProgramacion: "destacada2.html", //Progrmación
    disponible: true,
    destacado: true,
    orden: 7,
    inicio: "2025-06-16T19:00:00",
    fin: "2025-06-16T22:00:00"

  },
  
  {
    titulo: "WWE NXT 17 de junio de 2025",
    tituloDestacado: "Ver WWE NXT En Vivo",
    descripcion: "Transmisión en vivo.",
    imagen: "https://img.solowrestling.com/images/140/140803-wwe-nxt.jpg",
    imagenDestacada: "https://img.solowrestling.com/images/140/140803-wwe-nxt.jpg",
    enlace: "HTML/destacada2.html", //Entrada Index
    enlaceProgramacion: "destacada2.html", //Progrmación
    destacado: false,
    inicio: "2025-06-17T19:00",
    fin: "2025-06-17T22:00",
    orden: 8,
  },
  {
    titulo: "AEW Dynamite 18 de junio de 2025",
    tituloDestacado: "Ver AEW Dynamite En Vivo",
    descripcion: "Transmisión en vivo.",
    imagen: "https://www.postwrestling.com/wp-content/uploads/2025/02/GjwV-N6XgAAUTTg.jpg",
    imagenDestacada: "https://cdn.f4wonline.com/wp-content/uploads/2024/01/aew-collision-logo.png",
    enlace: "HTML/destacada2.html", //Entrada Index
    enlaceProgramacion: "destacada2.html", //Progrmación
    disponible: false,
    destacado: true,
    orden: 8,
    inicio: "2025-06-18T19:00:00",
    fin: "2025-06-18T22:00:00"
  },

  {
    titulo: "AEW Collision 21 de junio de 2025",
    tituloDestacado: "AEW Collision En Vivo",
    descripcion: "Transmisión en vivo.",
    imagen: "https://cdn.f4wonline.com/wp-content/uploads/2024/01/aew-collision-logo.png",
    imagenDestacada: "https://cdn.f4wonline.com/wp-content/uploads/2024/01/aew-collision-logo.png",
    enlace: "HTML/destacada2.html", //Entrada Index
    enlaceProgramacion: "destacada2.html", //Progrmación
    disponible: false,
    destacado: true,
    orden: 9,
    inicio: "2025-06-21T19:00:00",
    fin: "2025-06-21T22:00:00"
  },

  {
    titulo: "WWE SmackDown 20 de junio de 2025",
    tituloDestacado: "Ver WWE SmackDown En Vivo",
    descripcion: "Transmisión en vivo.",
    imagen: "https://featuresofwrestling.com/wp-content/uploads/2025/06/wwe-smackdown-june-20.jpg",
    imagenDestacada: "https://featuresofwrestling.com/wp-content/uploads/2025/06/wwe-smackdown-june-20.jpg",
    enlace: "HTML/destacada2.html", //Entrada Index
    enlaceProgramacion: "destacada2.html", //Progrmación
    destacado: true,
    orden: 8,
    inicio: "2025-06-20T19:00:00",
    fin: "2025-06-20T21:00:00"
  },


  //{
    //titulo: "Final Ida Liga BetPlay Dimayor 2025-1",
    //tituloDestacado: "Ver Final Liga BetPlay 2025-1 En Vivo",
    //descripcion: "Lunes 23 de junio",
   // imagen: "https://currambachannel.com/wp-content/uploads/2025/05/liga-betplay-dimayor.jpg",
   // imagenDestacada: "https://currambachannel.com/wp-content/uploads/2025/05/liga-betplay-dimayor.jpg",
   // enlace: "HTML/Winplus.html", //Entrada Index
   // enlaceProgramacion: "Winplus.html", //Progrmación
   // destacado: false,
   // inicio: "2025-06-23T00:00",
   // fin: "2025-06-23T23:59",
   // orden: 11,
 // },

  {
    titulo: "WWE Night Of Champions 2025",
    tituloDestacado: "Ver WWE Night Of Champions 2025 En Vivo",
    descripcion: "Sábado 28 de junio",
    imagen: "https://i.ytimg.com/vi/iH69djqmbco/maxresdefault.jpg",
    imagenDestacada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe1i-86gCPH_6GhM7zY6dcuXolAtynB43h_A&s",
    enlace: "HTML/destacada2.html", //Entrada Index
    enlaceProgramacion: "destacada2.html", //Progrmación
    disponible: false,
    destacado: false,
    orden: 12,
    inicio: "2025-06-28T19:00:00",
    fin: "2025-06-28T22:00:00"
  },

  {
    titulo: "WWE Saturday Night's Main Event 12 de julio de 2025",
    tituloDestacado: "Ver WWE Saturday Night's Main Event 2025",
    descripcion: "Sabado 12 de julio",
    imagen: "https://www.wwe.com/f/styles/wwe_large/public/all/2025/06/_SNME_Match_GuntherGoldberg_16x9_Date--b5ea3578f9b67d70a6cf5dd80335082b.jpg",
    imagenDestacada: "https://www.wwe.com/f/styles/wwe_large/public/all/2025/06/_SNME_Match_GuntherGoldberg_16x9_Date--b5ea3578f9b67d70a6cf5dd80335082b.jpg",
    enlace: "HTML/destacada2.html", //Entrada Index
    enlaceProgramacion: "destacada2.html", //Progrmación
    disponible: false,
    destacado: false,
    orden: 12,
    inicio: "2025-07-12T19:00:00",
    fin: "2025-07-12T22:00:00"
  }
];

// Lista de títulos a actualizar

// Lista de títulos para actualizar su fecha automáticamente

const titulosParaActualizar = [
  "WWE Monday Night Raw 23 de junio de 2025",
  "WWE NXT 17 de junio de 2025",
  "AEW Dynamite 18 de junio de 2025",
  "AEW Collision 21 de junio de 2025",
  "WWE SmackDown 20 de junio de 2025"
];


function actualizarEventosPasadosEspecificos(eventos, titulosActualizar) {
  const ahora = new Date();
  eventos.forEach(evento => {
    if (!titulosActualizar.includes(evento.titulo)) return;

    let inicio = new Date(evento.inicio);
    let fin = new Date(evento.fin);

    while (fin.getTime() <= ahora.getTime()) {
      inicio = new Date(inicio.getTime() + 7 * 86400000);
      fin = new Date(fin.getTime() + 7 * 86400000);
    }

    evento.inicio = inicio.toISOString();
    evento.fin = fin.toISOString();

    const opcionesFecha = { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'America/Bogota' };
    const nuevaFecha = inicio.toLocaleDateString('es-CO', opcionesFecha);

    evento.titulo = evento.titulo.replace(/\d{1,2} de \w+ de \d{4}/i, nuevaFecha);

    if (evento.tituloDestacado) {
      const tieneFecha = /\d{1,2} de \w+ de \d{4}/i.test(evento.tituloDestacado);
      if (tieneFecha) {
        evento.tituloDestacado = evento.tituloDestacado.replace(/\d{1,2} de \w+ de \d{4}/i, nuevaFecha);
      } else {
        evento.tituloDestacado = evento.tituloDestacado.replace("En Vivo", `${nuevaFecha} En Vivo`);
      }
    }
  });
}

// =====================================================================
// Función para generar descripciones de fecha dinámicas (Hoy, Mañana, etc.)
// =====================================================================
/**
 * Genera una descripción de fecha dinámica (Hoy, Mañana, Ayer, o día de la semana y fecha).
 * @param {string} fechaInicioISO - La fecha de inicio del evento en formato ISO 8601 (e.g., "2025-06-20T11:00:00").
 * @returns {string} La descripción de la fecha formateada.
 */
  function obtenerDescripcionFecha(fechaInicioISO, fechaFinISO) {
      const ahora = new Date();
      const inicio = new Date(fechaInicioISO);
      const fin = fechaFinISO ? new Date(fechaFinISO) : null;

      // 🛑 Si el evento ya terminó
      if (fin && ahora > fin) {
          return "Finalizado";
      }

      // 🔴 Si está en vivo
      if (fin && ahora >= inicio && ahora <= fin) {
          return "Transmisión en vivo";
      }

      // ⏳ Aún no empieza
      const opcionesHora = { hour: 'numeric', minute: '2-digit', hour12: true };
      const horaFormateada = inicio.toLocaleTimeString(undefined, opcionesHora);

      const unDiaEnMs = 24 * 60 * 60 * 1000;
      const inicioSinHora = new Date(inicio);
      inicioSinHora.setHours(0, 0, 0, 0);
      const ahoraSinHora = new Date(ahora);
      ahoraSinHora.setHours(0, 0, 0, 0);

      const diffDias = Math.round((inicioSinHora - ahoraSinHora) / unDiaEnMs);

      if (diffDias === 0) {
          return `Hoy ${horaFormateada}`;
      } else if (diffDias === 1) {
          return `Mañana ${horaFormateada}`;
      } else if (diffDias === -1) {
          return `Ayer ${horaFormateada}`;
      } else {
          const opcionesFechaCompleta = { weekday: 'short', day: 'numeric', month: 'numeric' };
          let fechaCompletaFormateada = inicio.toLocaleDateString(undefined, opcionesFechaCompleta).replace(/\./g, '');
          fechaCompletaFormateada = fechaCompletaFormateada.charAt(0).toUpperCase() + fechaCompletaFormateada.slice(1);
          return `${fechaCompletaFormateada} ${horaFormateada}`;
      }
  }



// Aplicar la actualización ANTES de todo
actualizarEventosPasadosEspecificos(eventos, titulosParaActualizar);


// Ordenar eventos por su orden

actualizarEventosPasadosEspecificos(eventos, titulosParaActualizar);

// Ordenar por orden

eventos.sort((a, b) => a.orden - b.orden);

document.addEventListener("DOMContentLoaded", () => {
  const rutaActual = window.location.pathname;
  const nombreArchivo = rutaActual.substring(rutaActual.lastIndexOf("/") + 1);

  // MOSTRAR TÍTULO AUTOMÁTICO EN PÁGINAS DESTACADAS
  const archivosDestacados = ["destacada.html", "destacada2.html", "destacada3.html"];
  if (archivosDestacados.includes(nombreArchivo)) {
    const ahora = new Date();
    const eventosDestacados = eventos.filter(evento =>
      evento.enlace.includes(nombreArchivo) || evento.enlaceProgramacion.includes(nombreArchivo)
    );

    const eventoActivo = eventosDestacados.find(e => new Date(e.inicio) <= ahora && new Date(e.fin) >= ahora);
    const proximoEvento = eventosDestacados.find(e => new Date(e.inicio) > ahora);
    const eventoMostrado = eventoActivo || proximoEvento;

    if (eventoMostrado) {
      const h1 = document.querySelector(".titulo-evento");
      if (h1) h1.textContent = eventoMostrado.titulo;
    }
  }

// SI EXISTE EL CONTENEDOR DE EVENTOS, RENDERIZAMOS LAS TARJETAS
const contenedorPrincipal = document.getElementById("contenedor-eventos");

if (contenedorPrincipal) {
  const ahora = new Date();
  const eventosFutbol = [];
  const eventosLucha = [];
  const eventosOtros = [];

  eventos.forEach((evento, index) => {
    const inicio = new Date(evento.inicio);
    const diferenciaHoras = (inicio - ahora) / 3600000;

    const eventoConIndice = { ...evento, index };
    const tituloLower = evento.titulo.toLowerCase();

    const palabrasFutbol = [
      "mundial de clubes",
      "liga",
      "uefa europa league",
      "uefa champions league",
      "betplay",
      "copa oro",
      "eliminatorias",
      "copa libertadores",
      "copa sudamericana",
      "conference",
      "league",
      "futbol",
      "copa",
      "mundial"
    ];

    const contienePalabraFutbol = palabrasFutbol.some(p => tituloLower.includes(p));
    const esFutbol = contienePalabraFutbol || (tituloLower.includes("vs") && !tituloLower.includes("wwe") && !tituloLower.includes("aew"));

    const esLucha = tituloLower.includes("wwe") || tituloLower.includes("aew") || tituloLower.includes("lucha");

    if (esFutbol) {
      if (diferenciaHoras <= 24) {
        eventosFutbol.push(eventoConIndice);
      }
    } else if (esLucha) {
      eventosLucha.push(eventoConIndice);
    } else {
      eventosOtros.push(eventoConIndice);
    }
  });


  const crearSeccion = (tituloTexto, id) => {
    const seccion = document.createElement("section");
    seccion.innerHTML = `
      <h3 class="text-white mt-4 text-center border-bottom border-secondary pb-2">${tituloTexto}</h3>
      <div id="${id}" class="d-flex gap-3 flex-wrap justify-content-center px-2 mt-3"></div>
    `;
    contenedorPrincipal.appendChild(seccion);
    return seccion.querySelector("div");
  };

  const renderEventos = (titulo, id, lista) => {
    if (lista.length === 0) return;
    const contenedor = crearSeccion(titulo, id);

    lista.forEach(({ index, ...evento }) => {
      const inicio = new Date(evento.inicio);
      const fin = new Date(evento.fin);
      const diferenciaMinutos = (inicio - ahora) / 60000;
      const enlaceCorrecto = desdeProgramacion && evento.enlaceProgramacion ? evento.enlaceProgramacion : evento.enlace;

      const card = document.createElement("div");
      card.className = "card h-100 bg-secondary text-white me-3";
      card.style.width = "18rem";

      const botonHTML =
        ahora > fin ? `<button class="btn btn-outline-light ver-evento" data-disponible="finalizado">Evento finalizado</button>` :
        diferenciaMinutos <= 30 ? `<a href="${enlaceCorrecto}" class="btn btn-light ver-evento" data-disponible="true">Ver Evento</a>` :
        `<button class="btn btn-outline-light ver-evento" data-disponible="false">Evento no disponible aún</button>`;

      card.innerHTML = `
        <img src="${evento.imagen}" class="card-img-top" alt="${evento.titulo}">
        <div class="card-body">
          <h5 class="card-title">${evento.titulo}</h5>
          <p class="card-text">${obtenerDescripcionFecha(evento.inicio, evento.fin)}</p>
          <p class="temporizador" data-inicio="${evento.inicio}" data-fin="${evento.fin}" data-index="${index}" style="color:white"></p>
          ${botonHTML}
        </div>
      `;

      contenedor.appendChild(card);
    });
  };

  renderEventos("PROGRAMACION FUTBOL", "futbol-eventos", eventosFutbol);
  renderEventos("PROGRAMACION LUCHA LIBRE", "lucha-eventos", eventosLucha);
  renderEventos("Otros Eventos", "otros-eventos", eventosOtros);
}


  // TEMPORIZADORES
  iniciarTemporizadores();

  // EVENTOS EN VIVO
  mostrarProximoEventoEnVivo();
  mostrarEventosEnVivo();

  // CLICK EN BOTONES
  document.addEventListener("click", e => {
    const btn = e.target.closest(".ver-evento");
    const mensaje = document.getElementById("mensaje-evento");

    if (btn && (btn.dataset.disponible === "false" || btn.dataset.disponible === "finalizado")) {
      e.preventDefault();
      if (mensaje) {
        mensaje.textContent = btn.dataset.disponible === "false"
          ? "⏳ Evento aún no disponible"
          : "📴 Este evento ya finalizó";
        mensaje.classList.remove("d-none");
        setTimeout(() => mensaje.classList.add("d-none"), 3000);
      }
    }
  });
});

// TEMPORIZADOR POR TARJETA
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
        const minutosDesdeFin = (ahora - fin) / 60000;
        if (minutosDesdeFin >= 15) card.remove();
        else {
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

      const minutosRestantes = dif / 60000;
      if (minutosRestantes <= 30 && btn && btn.dataset.disponible === "false") {
        btn.outerHTML = `<a href="${enlaceCorrecto}" class="btn btn-light ver-evento" data-disponible="true">Ver Evento</a>`;
      }

      const dias = Math.floor(dif / 86400000);
      const horas = Math.floor((dif / 3600000) % 24);
      const minutos = Math.floor((dif / 60000) % 60);
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

// MOSTRAR PRÓXIMO EN VIVO
function mostrarProximoEventoEnVivo() {
  const ahora = new Date();
  const eventosFuturos = eventos.filter(e => new Date(e.inicio) > ahora);
  if (eventosFuturos.length === 0) return;

  eventosFuturos.sort((a, b) => new Date(a.inicio) - new Date(b.inicio));
  const proximoInicio = new Date(eventosFuturos[0].inicio);

  // Filtrar todos los que tengan exactamente la misma hora
  const proximosSimultaneos = eventosFuturos.filter(e => new Date(e.inicio).getTime() === proximoInicio.getTime());

  const contenedor = document.getElementById("proximo-evento");
  if (!contenedor) return;

  function actualizarTemporizador() {
    const ahora = new Date();
    const diff = proximoInicio - ahora;

    if (diff <= 0) {
      clearInterval(intervaloTemporizador);
      mostrarEventosEnVivo();
      mostrarProximoEventoEnVivo();
      return;
    }

    const dias = Math.floor(diff / 86400000);
    const horas = Math.floor((diff / 3600000) % 24);
    const minutos = Math.floor((diff / 60000) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    let tiempoTexto = "PRÓXIMO EN VIVO: ";
    if (dias > 0) tiempoTexto += `${dias}d `;
    if (horas > 0 || dias > 0) tiempoTexto += `${horas}h `;
    if (minutos > 0) tiempoTexto += `${minutos}m `;
    tiempoTexto += `${segundos}s`;

    // Mostrar todos los títulos que coinciden
    const titulos = proximosSimultaneos.map(e => e.titulo).join(" | ");
    contenedor.textContent = `${tiempoTexto} - ${titulos}`;
  }

  const intervaloTemporizador = setInterval(actualizarTemporizador, 1000);
  actualizarTemporizador();
}

// MOSTRAR EN VIVO
function mostrarEventosEnVivo() {
  const contenedor = document.getElementById("eventos-en-vivo");
  if (!contenedor) return;

  contenedor.innerHTML = ""; // ✅ Esto evita duplicados
  
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
    div.innerHTML = `<span>${evento.titulo}</span> <a href="${enlace}" class="btn btn-danger btn-sm">Ver en Vivo</a>`;
    contenedor.appendChild(div);
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
  mostrarProximoEventoEnVivo();
  mostrarEventosEnVivo();

  // 🔁 Revisa los eventos en vivo cada 10 segundos por si alguno comienza en ese intervalo
  setInterval(mostrarEventosEnVivo, 10000);

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
}); // <-- Esta es la que cierra todo correctamente


// CAMBIO AUTOMÁTICO DE TÍTULO EN destacadas
document.addEventListener("DOMContentLoaded", () => {
  const rutaActual = window.location.pathname;
  const nombreArchivo = rutaActual.substring(rutaActual.lastIndexOf("/") + 1);
  const archivosPermitidos = ["destacada.html", "destacada2.html", "destacada3.html", "Winplus.html"];

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
