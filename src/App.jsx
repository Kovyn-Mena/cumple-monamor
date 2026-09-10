import React, { useState } from 'react'
import AmbientBackground from './components/AmbientBackground'
import ScreenIntro from './components/ScreenIntro'
import ScreenPreview from './components/ScreenPreview'
import './App.css'

/**
 * App Principal
 * Controla el estado de navegación y las transiciones fluidas entre pantallas.
 */
function App() {
  // Estado actual: 'intro' | 'preview'
  const [currentScreen, setCurrentScreen] = useState('intro')
  // Estado para controlar la animación de salida / entrada
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Función para cambiar de pantalla con una suave animación
  const navigateTo = (targetScreen) => {
    if (isTransitioning) return
    setIsTransitioning(true)

    // Tiempo sincronizado con la animación CSS (500ms)
    setTimeout(() => {
      setCurrentScreen(targetScreen)
      setIsTransitioning(false)
    }, 450)
  }

  return (
    <>
      {/* Fondo ambiental permanente con luces violetas y partículas */}
      <AmbientBackground />

      {/* Contenedor principal de la experiencia */}
      <main className="app-container">
        <div className={`screen-transition ${isTransitioning ? 'exiting' : 'entering'}`}>
          {currentScreen === 'intro' && (
            <ScreenIntro onStart={() => navigateTo('preview')} />
          )}

          {currentScreen === 'preview' && (
            <ScreenPreview onBack={() => navigateTo('intro')} />
          )}
        </div>
      </main>
    </>
  )
}

export default App
