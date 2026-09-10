import React from 'react'

/**
 * ScreenIntro
 * Primera pantalla visual con estética Dark Valentine's / Romance Oscuro:
 * - Detalle editorial minimalista
 * - Titular MONAMOR en tipografía Cinzel
 * - Frase poética en Cormorant Garamond itálica (estilo dedicatoria de libro clásico)
 * - Botón de entrada sobrio, refinado y táctil
 */
export default function ScreenIntro({ onStart }) {
  return (
    <div className="intro-container">
      {/* Detalle editorial minimalista (sin clichés de SaaS/badge) */}
      <span className="intro-eyebrow">Una historia para ti</span>

      {/* Titular e identidad */}
      <div className="intro-title-wrapper">
        <span className="intro-pretitle">Feliz Cumpleaños</span>
        <h1 className="intro-name">MONAMOR</h1>
        <div className="intro-divider" />
      </div>

      {/* Frase poética estilo dedicatoria literaria */}
      <p className="intro-phrase">
        "Hay personas que sin hacer ruido llenan cada rincón de luz. 
        Hoy este pequeño universo está creado solo para ti."
      </p>

      {/* Botón principal sobrio y refinado */}
      <div className="intro-action">
        <button 
          className="btn-primary" 
          onClick={onStart}
          aria-label="Descubrir la experiencia"
        >
          <span>Descubrir</span>
        </button>
        <span className="hint-tap">Toca para entrar</span>
      </div>
    </div>
  )
}

