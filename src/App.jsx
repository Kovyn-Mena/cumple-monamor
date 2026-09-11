import React, { useState } from 'react'
import AmbientBackground from './components/AmbientBackground'
import Screen01Intro from './sections/Screen01Intro'
import Screen02Welcome from './sections/Screen02Welcome'
import './App.css'

/**
 * App — Orquestador Principal
 * Controla el avance secuencial por las pantallas del proyecto
 * con transiciones cinematográficas y fluidas.
 */
function App() {
  // Índice de pantalla actual: 1 a 9
  const [currentScreen, setCurrentScreen] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Función de navegación fluida
  const goToScreen = (screenNumber) => {
    if (isTransitioning) return
    setIsTransitioning(true)

    setTimeout(() => {
      setCurrentScreen(screenNumber)
      setIsTransitioning(false)
      // Asegurar scroll al tope en cada cambio de pantalla para iPhone
      window.scrollTo({ top: 0, behavior: 'instant' })
    }, 450)
  }

  return (
    <>
      {/* Fondo inmersivo con iluminación ambiental violeta y partículas */}
      <AmbientBackground />

      {/* Contenedor central mobile-first */}
      <main className="experience-wrapper">
        <div className={`screen-transition ${isTransitioning ? 'exiting' : 'entering'}`}>
          {currentScreen === 1 && (
            <Screen01Intro onNext={() => goToScreen(2)} />
          )}

          {currentScreen === 2 && (
            <Screen02Welcome 
              onNext={() => goToScreen(1)} 
              onBack={() => goToScreen(1)} 
            />
          )}
        </div>
      </main>
    </>
  )
}

export default App
