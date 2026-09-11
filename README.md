# 🌙 Para Monamor — Experiencia Web Interactiva de Cumpleaños

Una experiencia web frontend interactiva, íntima y cinematográfica con estética **Dark Valentine's / Romance Oscuro**, diseñada especialmente para celebrar el cumpleaños de Paula (27 de Septiembre).

Construida con **React 19 + Vite + JavaScript**, optimizada *mobile-first* para **iPhone (Safari)** y lista para desplegarse como sitio estático en **GitHub Pages**.

---

## 🎨 Identidad Visual y Atmósfera

* **Paleta**: Negro obsidiana profundo (`#050408`), fondos violeta oscuro y acentos púrpura tenue.
* **Tipografías**: 
  * **Cinzel**: Títulos elegantes, números y detalles editoriales clásicos/góticos.
  * **Cormorant Garamond**: Citas poéticas, dedicatorias y cuerpo de la carta en cursiva literaria.
  * **Montserrat**: Textos auxiliares limpios y legibles.
* **Iluminación**: Nebulosas violetas difusas, viñeta oscura periférica y partículas estelares sutiles animadas con CSS puro.
* **Rendimiento**: Animaciones 100% aceleradas por hardware (`transform` y `opacity`) a 60 fps estables sin dependencias externas pesadas.

---

## 🧭 Recorrido de la Experiencia (9 Pantallas)

1. **Pantalla 1 — Inicio / Entrada**:
   * Titular cinematográfico *MONAMOR*, fecha editorial y botón *ENTRAR*.
   * Al presionar *ENTRAR*, se activa una **Lluvia de Recuerdos** (fotografías flotantes por todo el viewport) antes de continuar.
2. **Pantalla 2 — Bienvenida**:
   * Dedicatoria íntima en tarjeta de cristal oscuro (*dark glassmorphism*).
3. **Pantalla 3 — Nuestra Historia**:
   * Línea de tiempo vertical con hilo luminoso, fechas y relatos cronológicos.
4. **Pantalla 4 — Archivo // Nosotros**:
   * Índice táctil de memorias (`[01]`, `[02]`, `[03]`) que abre registros fotográficos y anécdotas.
5. **Pantalla 5 — Cosas que amo de ti**:
   * Tarjetas interactivas con efecto *reveal* al toque y contador de secretos descubiertos.
6. **Pantalla 6 — Mini-juego / Quiz**:
   * Test sobre la historia compartida con seguimiento por pasos, respuestas con personalidad y desbloqueo de acceso.
7. **Pantalla 7 — Sección Secreta**:
   * Misterio en penumbra (*"Creías que ya habías terminado... Qué ingenua."*) y gatillo interactivo (`✦`) para revelar una sorpresa oculta.
8. **Pantalla 8 — La Carta**:
   * **Fase 1**: Pausa emocional / Confesión previa.
   * **Fase 2**: Fotografía especial reservada para el final.
   * **Fase 3 y 4**: Sobre oscuro con sello de cera que se abre hacia la carta desplegada.
9. **Pantalla 9 — Final / Cierre**:
   * Despedida serena en penumbra, palabras de cierre (*"Te quiero."*) y botón discreto para reiniciar el recorrido.

---

## ✍️ Cómo Personalizar el Contenido

Todo el contenido editable del proyecto está desacoplado de la lógica de los componentes.

### 1. Textos, Preguntas y Carta
Edita el archivo:
```text
src/data/experienceData.js
```
Allí podrás cambiar:
* El nombre, fecha y subtítulos.
* Los hitos de la línea de tiempo.
* Las preguntas y respuestas del quiz.
* Las confesiones y el texto completo de la carta.

### 2. Fotos de la Lluvia Inicial
Coloca tus imágenes optimizadas (recomendado `.webp` o `.jpg` ligero, ~300x300px) en:
```text
public/images/intro/
```
Ejemplo: `paula-01.webp`, `paula-02.webp`, etc., y añade sus rutas al arreglo `introPhotoRain` en `experienceData.js`.

---

## 🚀 Instalación y Ejecución Local

### Requisitos
* [Node.js](https://nodejs.org/) (versión 18 o superior).

### Pasos
1. Clona o abre la carpeta del proyecto en tu terminal:
   ```bash
   cd "cumple monamor"
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre `http://localhost:5173/` en tu navegador.

> 💡 **Tip para probar en iPhone**: Abre las DevTools del navegador (`F12`), activa el modo dispositivo (`Ctrl + Shift + M`) y selecciona **iPhone 14/15 Pro**.

---

## 📦 Compilación y Despliegue en GitHub Pages

El proyecto ya está configurado con `base: './'` en `vite.config.js` para ser compatible con cualquier subruta de GitHub Pages.

Para generar la versión de producción:
```bash
npm run build
```
La carpeta generada `dist/` contiene el sitio estático listo para ser publicado.

---

## 📱 Características Móviles y Accesibilidad

* **Mobile-First**: Adaptado para áreas seguras de iPhone (`env(safe-area-inset-*)`) y Dynamic Island.
* **Sin dependencia de hover**: 100% interactuable mediante toques (`tap` / `onClick`).
* **Previene rebote blanco en iOS**: `overscroll-behavior-y: none`.
* **Accesibilidad**: Soporte nativo para `prefers-reduced-motion: reduce`.
