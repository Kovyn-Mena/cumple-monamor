/**
 * ============================================================================
 * EXPERIENCE DATA (Contenido Editable y Narrativa del Proyecto)
 * ============================================================================
 * Centraliza todo el contenido editable, textos poéticos, placeholders
 * y estructura narrativa de la experiencia.
 */

export const experienceData = {
  // PANTALLA 1: INICIO / ENTRADA
  screen01: {
    badge: "27 • SEPTIEMBRE",
    pretitle: "Para ti.",
    name: "MONAMOR",
    subtitle: "Tengo algo que enseñarte.",
    buttonText: "ENTRAR",
    tapHint: "Toca para comenzar"
  },

  // LLUVIA DE FOTOGRAFÍAS (Transición al pulsar ENTRAR)
  // Coloca tus imágenes .webp en public/images/intro/ y agrega sus rutas aquí.
  introPhotoRain: [
    "./images/intro/paula-01.webp",
    "./images/intro/paula-02.webp",
    "./images/intro/paula-03.webp",
    "./images/intro/paula-04.webp",
    "./images/intro/paula-05.webp",
    "./images/intro/paula-06.webp",
    "./images/intro/paula-07.webp",
    "./images/intro/paula-08.webp",
    "./images/intro/paula-09.webp",
    "./images/intro/paula-10.webp",
    "./images/intro/paula-11.webp",
    "./images/intro/paula-12.webp",
    "./images/intro/paula-13.webp",
    "./images/intro/paula-14.webp",
    "./images/intro/paula-15.webp"
  ],

  // PANTALLA 2: BIENVENIDA
  screen02: {
    tag: "Antes de empezar",
    title: "Una pequeña dedicatoria",
    message1: "No sabía muy bien cómo hacerte un regalo que pudiera guardar todo lo que quería decirte.",
    message2: "Así que construí este pequeño rincón, un lugar oscuro y tranquilo, hecho solo para ti.",
    whisper: "sigue.",
    buttonText: "CONTINUAR",
    backText: "Volver al inicio"
  },

  // PANTALLA 3: NUESTRA HISTORIA (Timeline)
  screen03: {
    tag: "Capítulo I",
    title: "Nuestra Historia",
    subtitle: "Los momentos que nos trajeron hasta aquí.",
    events: [
      {
        id: 1,
        step: "01",
        title: "El Comienzo",
        date: "[FECHA INICIAL]",
        description: "[Aquí escribiré cómo nos conocimos o el primer recuerdo especial juntos.]",
        imagePlaceholder: "[Foto del primer momento]"
      },
      {
        id: 2,
        step: "02",
        title: "Aquel Día Especial",
        date: "[FECHA DEL RECUERDO]",
        description: "[Aquí irá la anécdota o ese momento donde supimos que esto era único.]",
        imagePlaceholder: "[Foto de aquel día]"
      },
      {
        id: 3,
        step: "03",
        title: "Un Viaje / Aventura",
        date: "[FECHA DEL VIAJE]",
        description: "[Aquí irá la historia de una escapada, salida o noche inolvidable.]",
        imagePlaceholder: "[Foto de la aventura]"
      }
    ],
    closingText: "Y de alguna manera llegamos hasta aquí...",
    whisper: "esto apenas comienza.",
    buttonText: "EXPLORAR EL ARCHIVO",
    backText: "Volver a la bienvenida"
  },

  // PANTALLA 4: ARCHIVO DE NOSOTROS (Galería Personal)
  screen04: {
    tag: "Capítulo II",
    title: "Archivo // Nosotros",
    subtitle: "Registros de instantes que el tiempo no borra.",
    whisper: "todavía falta una foto por encontrar...",
    memories: [
      {
        id: 1,
        code: "01",
        title: "El Comienzo",
        date: "[FECHA REGISTRO 01]",
        caption: "Esta me gusta porque...",
        description: "[Aquí irá el texto explicando por qué esta foto es especial.]",
        imagePlaceholder: "[Foto del Registro 01]"
      },
      {
        id: 2,
        code: "02",
        title: "Tardes Compartidas",
        date: "[FECHA REGISTRO 02]",
        caption: "Uno de mis recuerdos favoritos.",
        description: "[Aquí irá el texto recordando las risas y la complicidad de ese día.]",
        imagePlaceholder: "[Foto del Registro 02]"
      },
      {
        id: 3,
        code: "03",
        title: "En Cualquier Rincón",
        date: "[FECHA REGISTRO 03]",
        caption: "Simplemente tú.",
        description: "[Aquí irá el texto sobre lo increíble y natural que te ves aquí.]",
        imagePlaceholder: "[Foto del Registro 03]"
      }
    ],
    buttonText: "CONTINUAR EL VIAJE",
    backText: "Volver a nuestra historia"
  },

  // PANTALLA 5: COSAS QUE AMO DE TI (Descubrimiento Progresivo)
  screen05: {
    tag: "Capítulo III",
    title: "Cosas que amo de ti",
    subtitle: "Pequeños secretos que encuentro en ti cada día.",
    cards: [
      {
        id: 1,
        number: "01",
        teaser: "Toca para descubrir",
        revealedTitle: "Tu forma de iluminar",
        revealedText: "[Aquí irá una cosa que amo de ti: por ejemplo, tu risa, tu bondad o tu forma de mirar.]"
      },
      {
        id: 2,
        number: "02",
        teaser: "Toca para descubrir",
        revealedTitle: "Tu complicidad",
        revealedText: "[Aquí irá una segunda cosa que amo de ti: cómo entendemos todo sin decir una sola palabra.]"
      },
      {
        id: 3,
        number: "03",
        teaser: "Toca para descubrir",
        revealedTitle: "Nuestros momentos de paz",
        revealedText: "[Aquí irá una tercera cosa que amo de ti: la calma infinita que encuentro cuando estoy a tu lado.]"
      }
    ],
    allRevealedNotice: "Todos los secretos han sido descubiertos.",
    buttonText: "SIGUIENTE RETO",
    backText: "Volver al archivo"
  },

  // PANTALLA 6: MINI-JUEGO / QUIZ (Con Consecuencias y Desbloqueo)
  screen06: {
    tag: "Capítulo IV",
    title: "¿Cuánto recuerdas?",
    subtitle: "Un pequeño test para comprobar si tienes buena memoria.",
    questions: [
      {
        id: 1,
        question: "¿Dónde ocurrió [MOMENTO ESPECIAL 1]?",
        options: [
          "[Opción A: Lugar incorrecto]",
          "[Opción B: Respuesta correcta]",
          "[Opción C: Otro lugar incorrecto]"
        ],
        correctIndex: 1,
        successMessage: "Sabía que te acordabas. ♡",
        failMessage: "Casi... pero estuviste muy cerca."
      },
      {
        id: 2,
        question: "¿Cuál fue la primera [COMIDA / PELÍCULA / CANCIÓN] que compartimos?",
        options: [
          "[Opción A: Respuesta correcta]",
          "[Opción B: Opción incorrecta]",
          "[Opción C: Otra opción incorrecta]"
        ],
        correctIndex: 0,
        successMessage: "¡Exacto! Memoria intacta.",
        failMessage: "Por poco... pero cuenta la intención."
      },
      {
        id: 3,
        question: "¿Quién [HIZO / DIJO] esto primero?",
        options: [
          "[Opción A: Paula]",
          "[Opción B: Yo]",
          "[Opción C: Los dos al mismo tiempo]"
        ],
        correctIndex: 2,
        successMessage: "Inconfundible. Lo sabíamos los dos.",
        failMessage: "Casi... fue una pequeña trampa."
      }
    ],
    unlockTitle: "3/3 recuerdos recuperados",
    unlockMessage: "Creo que ya estás lista para lo que sigue.",
    buttonText: "CONTINUAR",
    backText: "Volver a cosas que amo"
  },

  // PANTALLA 7: SECCIÓN SECRETA (Anomalía y Descubrimiento)
  screen07: {
    pauseTitle: "Creías que ya habías terminado.",
    pauseSubtitle: "Qué ingenua.",
    hintText: "Hay una pequeña anomalía flotando en la penumbra... encuéntrala.",
    secretTriggerSymbol: "✦",
    discoveredTag: "Acceso Concedido",
    discoveredTitle: "Ok, sí. Esto estaba escondido a propósito.",
    surpriseContent: "[Aquí irá la sorpresa: una promesa, un detalle oculto o una memoria guardada especialmente para ti.]",
    buttonText: "AVANZAR",
    backText: "Volver al quiz"
  },

  // PANTALLA 8: CONFESIÓN, FOTO ESPECIAL Y LA CARTA
  screen08: {
    tag: "Capítulo V",
    // Pausa emocional previa
    confessionTitle: "Hay algo que no sabía cómo poner en esta página...",
    confessionSubtitle: "Así que simplemente voy a decirlo:",
    confessionBody: "[Aquí irá una pequeña confesión o mensaje íntimo antes de la carta.]",
    
    // Foto especial reservada
    specialPhotoBadge: "Archivo // Registro Final",
    specialPhotoTitle: "Ahora sí.",
    specialPhotoPlaceholder: "[FOTO ESPECIAL: Aquella imagen que no podía faltar]",
    specialPhotoCaption: "Esta fotografía también tenía que estar aquí.",
    
    // Sobre y Carta
    envelopeTitle: "Hay algo que quiero decirte.",
    openButtonText: "ABRIR CARTA",
    letterGreeting: "Querida Paula,",
    letterBody: [
      "[Párrafo 1 de la carta: Aquí escribiré lo que significas para mí y cómo haces especial cada día.]",
      "[Párrafo 2 de la carta: Recordando momentos y agradeciendo por todo lo compartido.]",
      "[Párrafo 3 de la carta: Palabras de cierre llenas de cariño y buenos deseos.]"
    ],
    letterSignature: "Siempre tuyo,",
    author: "Kovyn",
    buttonText: "VER MENSAJE FINAL",
    backText: "Volver al secreto"
  },

  // PANTALLA 9: FINAL (Minimalismo y Serenidad)
  screen09: {
    tag: "Para Siempre",
    title: "Feliz Cumpleaños, Paula",
    finalMessage: "[Mensaje final: Gracias por existir y por ser mi persona favorita en este mundo.]",
    closingWords: "Te quiero.",
    restartButtonText: "↻ Volver a empezar"
  }
}
