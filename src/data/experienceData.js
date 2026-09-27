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
  introPhotoRain: [
    "./images/intro/paula-01.jpeg",
    "./images/intro/paula-02.jpeg",
    "./images/intro/paula-03.jpeg",
    "./images/intro/paula-04.jpeg",
    "./images/intro/paula-05.jpeg",
    "./images/intro/paula-06.jpeg",
    "./images/intro/paula-07.jpeg"
  ],

  // PANTALLA 2: BIENVENIDA
  screen02: {
    tag: "Antes de empezar",
    title: "Una pequeña dedicatoria",
    message1: "No sabía muy bien cómo hacerlo, pero sabía que era algo que habías visto, que querías y que te gustaría.",
    message2: "Así que, aunque no es perfecto, aquí tengo este pequeño lugar para ti.",
    whisper: "sigue.",
    buttonText: "CONTINUAR",
    backText: "Volver al inicio"
  },

  // PANTALLA 3: TIMELINE
  screen03: {
    tag: "Capítulo I",
    title: "¿Recuerdas los días que empezaron esto?",
    subtitle: "Los momentos que nos trajeron hasta aquí.",
    events: [
      {
        id: 1,
        step: "01",
        title: "¿Elecciones? ¿Tatuaje? ¿P y K?",
        date: "26 de febrero del 2026",
        description: "Un día que quizás en ese momento pasó desapercibido.",
        imagePlaceholder: "[Foto del primer momento]",
        image: "./images/timeline/01.jpeg"
      },
      {
        id: 2,
        step: "02",
        title: "Aquel Día Especial",
        date: "[FECHA DEL RECUERDO]",
        description: "[Aquí irá la anécdota o ese momento donde supimos que esto era único.]",
        imagePlaceholder: "[Foto de aquel día]",
        image: "./images/timeline/02.jpeg"
      },
      {
        id: 3,
        step: "03",
        title: "Un Viaje / Aventura",
        date: "[FECHA DEL VIAJE]",
        description: "[Aquí irá la historia de una escapada, salida o noche inolvidable.]",
        imagePlaceholder: "[Foto de la aventura]",
        image: "./images/timeline/03.jpeg"
      }
    ],
    closingText: "Y de alguna manera llegamos hasta aquí...",
    whisper: "esto apenas comienza.",
    buttonText: "EXPLORAR EL ARCHIVO",
    backText: "Volver a la bienvenida"
  },

  // PANTALLA 4: ARCHIVO // ELLA (Galería Personal de Facetas de Paula)
  screen04: {
    tag: "Capítulo II",
    title: "Archivo // Ella",
    subtitle: "Registros de instantes donde fuiste puramente tú.",
    whisper: "todavía falta una foto por encontrar...",
    memories: [
      {
        id: 1,
        code: "01",
        title: "Tu mejor ángulo",
        date: "[FECHA REGISTRO 01]",
        caption: "Esa sonrisa que lo cambia todo.",
        description: "[Aquí pon por qué te encanta esta foto suya: su mirada, su estilo o la seguridad que transmite.]",
        imagePlaceholder: "[Foto de su mejor ángulo]",
        image: "" // Ruta: "./images/gallery/01.webp" (o .jpg / .png)
      },
      {
        id: 2,
        code: "02",
        title: "En tu elemento",
        date: "[FECHA REGISTRO 02]",
        caption: "Haciendo lo que más te apasiona.",
        description: "[Aquí pon qué hacía en esta foto: trabajando en lo suyo, estudiando, comiendo algo rico o en su hobby.]",
        imagePlaceholder: "[Foto en su elemento]",
        image: "" // Ruta: "./images/gallery/02.webp" (o .jpg / .png)
      },
      {
        id: 3,
        code: "03",
        title: "Espontánea & Caótica",
        date: "[FECHA REGISTRO 03]",
        caption: "Simplemente tú siendo tú.",
        description: "[Aquí pon una anécdota divertida o esa cara graciosa/auténtica que solo tú sabes capturar.]",
        imagePlaceholder: "[Foto espontánea o graciosa]",
        image: "" // Ruta: "./images/gallery/03.webp" (o .jpg / .png)
      }
    ],
    buttonText: "CONTINUAR EL VIAJE",
    backText: "Volver a nuestra historia"
  },

  // PANTALLA 5: LO QUE TE HACE ÚNICA (Superpoderes y Virtudes de Paula)
  screen05: {
    tag: "Capítulo III",
    title: "Lo que te hace única",
    subtitle: "Pequeños superpoderes que llevas contigo a donde vas.",
    cards: [
      {
        id: 1,
        number: "01",
        teaser: "Toca para descubrir",
        revealedTitle: "Tu determinación y fuerza",
        revealedText: "[Aquí escribe sobre su perseverancia para lograr lo que se propone y cómo nunca se rinde ante los retos.]"
      },
      {
        id: 2,
        number: "02",
        teaser: "Toca para descubrir",
        revealedTitle: "Tu luz y espontaneidad",
        revealedText: "[Aquí escribe sobre cómo su risa, sus ocurrencias y su energía llenan cualquier lugar.]"
      },
      {
        id: 3,
        number: "03",
        teaser: "Toca para descubrir",
        revealedTitle: "Tu nobleza de corazón",
        revealedText: "[Aquí escribe sobre la forma tan genuina y bonita en la que cuidas y te preocupas por los que quieres.]"
      }
    ],
    allRevealedNotice: "Todas estas cosas hacen que este mundo sea un lugar mucho más bonito contigo en él.",
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
    surpriseContent: "[Aquí irá la sorpresa: una promesa, un detalle oculto o un deseo especial de cumpleaños para ti.]",
    buttonText: "AVANZAR",
    backText: "Volver al quiz"
  },

  // PANTALLA 8: CONFESIÓN, FOTO ESPECIAL Y LA CARTA DE CUMPLEAÑOS
  screen08: {
    tag: "Capítulo V",
    // Pausa emocional previa
    confessionTitle: "Antes de que termine tu día...",
    confessionSubtitle: "Quería recordarte algo importante:",
    confessionBody: "[Aquí pon unas palabras reconociendo la increíble persona en la que te has convertido este año y lo orgulloso que estoy de ti.]",
    
    // Foto especial reservada
    specialPhotoBadge: "Archivo // El Retrato",
    specialPhotoTitle: "La foto que mejor te define",
    specialPhotoPlaceholder: "[FOTO ESPECIAL DE PAULA]",
    specialPhotoCaption: "Esta fotografía captura exactamente quién eres.",
    specialPhoto: "", // Ruta: "./images/letter/especial.webp" (o .jpg / .png)
    
    // Sobre y Carta
    envelopeTitle: "Hay algo que quiero decirte hoy.",
    openButtonText: "ABRIR CARTA",
    letterGreeting: "Querida Paula,",
    letterBody: [
      "[Párrafo 1: Feliz cumpleaños. Hoy celebramos tu vida, tu risa y todo lo increíble que traes a este mundo.]",
      "[Párrafo 2: Admiro la mujer en la que te has convertido, lo mucho que te esfuerzas cada día y cada uno de tus sueños.]",
      "[Párrafo 3: Que este nuevo año de vida venga lleno de éxitos, paz y momentos que te hagan sonreír cada día.]"
    ],
    letterSignature: "Con todo mi cariño y admiración,",
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
    
    // Regalo extra / Felicitación en video
    specialBonusTriggerText: "¿Por si no te han felicitado lo suficiente?",
    specialBonusTitle: "Un regalo más...",
    specialBonusMessage: "Preparé algo especial para ti. Toca el botón para verlo:",
    specialBonusButtonText: "Ver video especial",
    specialBonusUrl: "https://www.youtube.com", // Aquí puedes pegar el link del video de YouTube que vas a subir

    restartButtonText: "↻ Volver al principio"
  }
}
