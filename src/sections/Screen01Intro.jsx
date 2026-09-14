import React, { useState } from 'react'
import { experienceData } from '../data/experienceData'
import IntroPhotoRain from '../components/IntroPhotoRain'

/**
 * Screen01Intro — Pantalla 1: Inicio / Entrada
 * - Fondo oscuro profundo con luz violeta difusa.
 * - Título cinematográfico "MONAMOR".
 * - Frase en Cormorant Garamond itálica ("Tengo algo que enseñarte.").
 * - Botón "ENTRAR" que dispara la lluvia de fotografías antes de avanzar.
 */
export default function Screen01Intro({ onNext }) {
  const data = experienceData.screen01
  const photoList = experienceData.introPhotoRain || []
  const [isRaining, setIsRaining] = useState(false)

  const handleStart = () => {
    // Evitar múltiples ejecuciones si el usuario pulsa varias veces
    if (isRaining) return

    // Si no hay fotos configuradas o la lista está vacía, avanzamos inmediatamente
    if (!photoList || photoList.length === 0) {
      onNext()
      return
    }

    // Iniciar la lluvia de fotografías
    setIsRaining(true)
  }

  const handleRainComplete = () => {
    onNext()
  }

  return (
    <>
      {/* Capa de lluvia de fotos activada al pulsar ENTRAR */}
      {isRaining && (
        <IntroPhotoRain 
          photos={photoList} 
          onComplete={handleRainComplete} 
          durationMs={3700}
        />
      )}

      <div className={`screen-layout intro-section ${isRaining ? 'is-launching' : ''}`}>
        {/* Detalle editorial superior */}
        <span className="editorial-eyebrow">{data.badge}</span>

        {/* Identidad central */}
        <div className="title-block">
          <span className="pretitle-tag">{data.pretitle}</span>
          <h1 className="main-title">{data.name}</h1>
          <div className="luminous-divider" />
        </div>

        {/* Subtítulo poético */}
        <p className="poetic-quote">
          "{data.subtitle}"
        </p>

        {/* Botón de entrada táctil */}
        <div className="action-block">
          <button 
            className="btn-gothic-primary" 
            onClick={handleStart}
            disabled={isRaining}
            aria-label="Entrar a la experiencia"
          >
            <span>{isRaining ? 'Abriendo...' : data.buttonText}</span>
          </button>
          <span className="tap-hint">{isRaining ? 'Preparando...' : data.tapHint}</span>
        </div>
      </div>
    </>
  )
}

