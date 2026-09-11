import React from 'react'
import { experienceData } from '../data/experienceData'

/**
 * Screen01Intro — Pantalla 1: Inicio / Entrada
 * - Fondo oscuro profundo con luz violeta difusa.
 * - Título cinematográfico "MONAMOR".
 * - Frase en Cormorant Garamond itálica ("Tengo algo que enseñarte.").
 * - Botón "ENTRAR" que dispara una transición cinematográfica.
 */
export default function Screen01Intro({ onNext }) {
  const data = experienceData.screen01

  return (
    <div className="screen-layout intro-section">
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
          onClick={onNext}
          aria-label="Entrar a la experiencia"
        >
          <span>{data.buttonText}</span>
        </button>
        <span className="tap-hint">{data.tapHint}</span>
      </div>
    </div>
  )
}
