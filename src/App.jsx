import React, { useState } from 'react'
import AmbientBackground from './components/AmbientBackground'
import Screen01Intro from './sections/Screen01Intro'
import Screen02Welcome from './sections/Screen02Welcome'
import Screen03Timeline from './sections/Screen03Timeline'
import Screen04Gallery from './sections/Screen04Gallery'
import Screen05LoveCards from './sections/Screen05LoveCards'
import Screen06Quiz from './sections/Screen06Quiz'
import Screen07Secret from './sections/Screen07Secret'
import Screen08Letter from './sections/Screen08Letter'
import Screen09Final from './sections/Screen09Final'
import './App.css'

/**
 * App — Orquestador Principal
 * Controla el avance secuencial por las 9 pantallas del proyecto
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
      // Scroll automático al inicio en cada cambio de pantalla para Safari / iPhone
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
              onNext={() => goToScreen(3)} 
              onBack={() => goToScreen(1)} 
            />
          )}

          {currentScreen === 3 && (
            <Screen03Timeline 
              onNext={() => goToScreen(4)} 
              onBack={() => goToScreen(2)} 
            />
          )}

          {currentScreen === 4 && (
            <Screen04Gallery 
              onNext={() => goToScreen(5)} 
              onBack={() => goToScreen(3)} 
            />
          )}

          {currentScreen === 5 && (
            <Screen05LoveCards 
              onNext={() => goToScreen(6)} 
              onBack={() => goToScreen(4)} 
            />
          )}

          {currentScreen === 6 && (
            <Screen06Quiz 
              onNext={() => goToScreen(7)} 
              onBack={() => goToScreen(5)} 
            />
          )}

          {currentScreen === 7 && (
            <Screen07Secret 
              onNext={() => goToScreen(8)} 
              onBack={() => goToScreen(6)} 
            />
          )}

          {currentScreen === 8 && (
            <Screen08Letter 
              onNext={() => goToScreen(9)} 
              onBack={() => goToScreen(7)} 
            />
          )}

          {currentScreen === 9 && (
            <Screen09Final 
              onRestart={() => goToScreen(1)} 
            />
          )}
        </div>
      </main>
    </>
  )
}

export default App
