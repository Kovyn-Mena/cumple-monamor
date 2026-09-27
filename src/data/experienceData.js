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
        title: "¿Flores?",
        date: "7 de marzo del 2026",
        description: "¿Un regalo, o significaba algo más?",
        imagePlaceholder: "[Foto de aquel día]",
        image: "./images/timeline/02.jpeg"
      },
      {
        id: 3,
        step: "03",
        title: "¿Coffee party?",
        date: "18 de marzo del 2026",
        description: "¿Recuerdas qué pasó ese día?",
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
        title: "¿Feli feli?",
        date: "",
        caption: "La sonrisa que quiero ver toda la vida.",
        description: "Nada me hace más feliz que verte sonreír.",
        imagePlaceholder: "[Foto de su mejor ángulo]",
        image: "./images/gallery/01.jpeg"
      },
      {
        id: 2,
        code: "02",
        title: "¿Pintura?",
        date: "",
        caption: "¿Una artista en su campo?",
        description: "Nuestro cultural-artist moment jajaj.",
        imagePlaceholder: "[Foto en su elemento]",
        image: "./images/gallery/02.jpeg"
      },
      {
        id: 3,
        code: "03",
        title: "Dos bebés",
        date: "",
        caption: "Simplemente tú siendo tú.",
        description: "Una bebé con otra bebé.",
        imagePlaceholder: "[Foto espontánea]",
        image: "./images/gallery/03.jpeg"
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
        revealedTitle: "La forma en que haces sentir a las personas que quieres",
        revealedText: "Tienes una manera muy tuya de demostrar cariño y ser tú en sí, incluso en cosas pequeñas que quizá ni notas, pero que terminan significando muchísimo para todos los que te rodeamos."
      },
      {
        id: 2,
        number: "02",
        teaser: "Toca para descubrir",
        revealedTitle: "Tu forma de ser cuando tienes confianza",
        revealedText: "Esa versión tuya que sale cuando estás cómoda o incluso ahora que te conozco más; la versión de ti que eres cuando estamos solos, con tus acciones tiernas y espontáneas o las tonterías que solo a ti se te ocurriría decir. Es una parte de ti que no se ve tan seguido con los demás, pero es muy linda y me hace pensar cada día más en que estoy en el lugar correcto."
      },
      {
        id: 3,
        number: "03",
        teaser: "Toca para descubrir",
        revealedTitle: "La manera en que conviertes momentos normales en recuerdos",
        revealedText: "Contigo muchas veces no tiene que estar pasando nada extraordinario para que un momento termine siendo especial. Incluso antes de que nuestro vínculo se convirtiera en algo más, cada momento contigo se sentía memorable y todos son recuerdos que tienen un lugar especial en mi corazón."
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
        question: "¿Quién es más bebé?",
        options: [
          "Luna",
          "Coco",
          "Paris"
        ],
        allCorrect: true,
        correctIndex: 0,
        successMessage: "¡Todas! Son unos súper bebés, ¿por qué elegirías una? ♡",
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
    specialPhoto: "./images/letter/especial.jpeg",
    
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
