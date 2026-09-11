/**
 * ============================================================================
 * EXPERIENCE DATA (Contenido Editable del Proyecto)
 * ============================================================================
 * Este archivo centraliza TODO el contenido de la web interactiva.
 * Cuando quieras personalizar los textos, fechas o fotos para Paula,
 * solo debes modificar los valores entre comillas aquí abajo.
 * 
 * NOTA: Los textos entre corchetes "[...]" son placeholders de prueba.
 */

export const experienceData = {
  // PANTALLA 1: INICIO / ENTRADA
  screen01: {
    badge: "10 • SEPTIEMBRE",
    pretitle: "Para ti.",
    name: "MONAMOR",
    subtitle: "Tengo algo que enseñarte.",
    buttonText: "ENTRAR",
    tapHint: "Toca para comenzar"
  },

  // PANTALLA 2: BIENVENIDA
  screen02: {
    tag: "Antes de empezar",
    title: "Una pequeña dedicatoria",
    message1: "No sabía muy bien cómo hacerte un regalo que pudiera guardar todo lo que quería decirte.",
    message2: "Así que construí este pequeño rincón, un lugar oscuro y tranquilo, hecho solo para ti.",
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
    buttonText: "SIGUIENTE CAPÍTULO"
  },

  // PANTALLA 4: RECUERDOS / GALERÍA
  screen04: {
    tag: "Capítulo II",
    title: "Galería de Recuerdos",
    subtitle: "Pequeños fragmentos de tiempo congelados.",
    memories: [
      {
        id: 1,
        caption: "Esta me gusta porque...",
        description: "[Texto explicando por qué esta foto es especial]",
        imagePlaceholder: "[Foto 1]"
      },
      {
        id: 2,
        caption: "Uno de mis recuerdos favoritos.",
        description: "[Texto recordando las risas de ese instante]",
        imagePlaceholder: "[Foto 2]"
      },
      {
        id: 3,
        caption: "Simplemente tú.",
        description: "[Texto sobre lo increíble que te ves aquí]",
        imagePlaceholder: "[Foto 3]"
      }
    ],
    buttonText: "CONTINUAR EL VIAJE"
  },

  // PANTALLA 5: COSAS QUE AMO DE TI
  screen05: {
    tag: "Capítulo III",
    title: "Cosas que amo de ti",
    subtitle: "Toca cada tarjeta para revelar un secreto.",
    cards: [
      {
        id: 1,
        number: "01",
        teaser: "Toca para descubrir",
        revealedTitle: "Tu forma de iluminar",
        revealedText: "[Aquí irá una cosa que amo de ti: por ejemplo, tu risa o tu mirada.]"
      },
      {
        id: 2,
        number: "02",
        teaser: "Toca para descubrir",
        revealedTitle: "Tu complicidad",
        revealedText: "[Aquí irá una segunda cosa que amo de ti.]"
      },
      {
        id: 3,
        number: "03",
        teaser: "Toca para descubrir",
        revealedTitle: "Nuestros momentos de paz",
        revealedText: "[Aquí irá una tercera cosa que amo de ti.]"
      }
    ],
    buttonText: "SIGUIENTE RETO"
  },

  // PANTALLA 6: MINI-JUEGO / QUIZ
  screen06: {
    tag: "Capítulo IV",
    title: "¿Cuánto recuerdas?",
    subtitle: "Un pequeño test sobre nuestra historia juntos.",
    questions: [
      {
        id: 1,
        question: "¿Dónde ocurrió [MOMENTO ESPECIAL 1]?",
        options: [
          "[Opción A: Lugar incorrecto 1]",
          "[Opción B: Respuesta correcta]",
          "[Opción C: Lugar incorrecto 2]"
        ],
        correctIndex: 1,
        successMessage: "Sabía que te acordabas. ♡",
        failMessage: "Casi... pero estuviste cerca."
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
        failMessage: "Por poco... pero cuenta el intento."
      }
    ],
    completionMessage: "Creo que conoces bastante bien nuestra historia.",
    buttonText: "CONTINUAR"
  },

  // PANTALLA 7: SECCIÓN SECRETA
  screen07: {
    waitText: "Espera...",
    hintText: "Creo que todavía falta algo escondido por aquí.",
    secretTrigger: "✦",
    discoveredTitle: "Ok, sí. Esto estaba escondido a propósito.",
    surpriseContent: "[Aquí irá la sorpresa: una foto oculta, un audio o un mensaje especial.]",
    buttonText: "IR A LA CARTA"
  },

  // PANTALLA 8: CARTA
  screen08: {
    tag: "Capítulo V",
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
    buttonText: "VER MENSAJE FINAL"
  },

  // PANTALLA 9: FINAL
  screen09: {
    tag: "Para Siempre",
    title: "Feliz Cumpleaños, Paula",
    finalMessage: "[Mensaje final: Gracias por existir y por ser mi persona favorita en este mundo.]",
    closingWords: "Te quiero.",
    restartButtonText: "↻ Volver a empezar"
  }
}
