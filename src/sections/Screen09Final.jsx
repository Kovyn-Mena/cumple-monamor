import React from 'react'
import { experienceData } from '../data/experienceData'

/**
 * Screen09Final — Pantalla 9: Final / Cierre
 * - Cierre íntimo, poético y minimalista.
 * - Atmósfera de serenidad con resplandor violeta muy sutil.
 * - Mensaje final de agradecimiento y afecto.
 * - Botón discreto para reiniciar el recorrido desde el inicio.
 */
export default function Screen09Final({ onRestart }) {
  const data = experienceData.screen09

  return (
    <div className="screen-layout final-section">
      <div className="final-content-box">
        {/* Detalle superior */}
        <span className="editorial-eyebrow">{data.tag}</span>

        {/* Titular final */}
        <h1 className="final-title">{data.title}</h1>
        <div className="luminous-divider" />

        {/* Mensaje final */}
        <p className="final-message">
          "{data.finalMessage}"
        </p>

        {/* Palabras de cierre */}
        <p className="final-closing-words">
          {data.closingWords}
        </p>

        {/* Botón de reinicio */}
        <div className="final-actions">
          <button
            className="btn-gothic-ghost final-restart-btn"
            onClick={onRestart}
            aria-label="Volver a empezar la experiencia"
          >
            {data.restartButtonText}
          </button>
        </div>
      </div>
    </div>
  )
}
