import React, { useState } from 'react'
import { experienceData } from '../data/experienceData'

/**
 * Screen09Final — Pantalla 9: Final / Cierre
 * - Cierre íntimo, poético y minimalista.
 * - Atmósfera de serenidad con resplandor violeta muy sutil.
 * - Mensaje final de agradecimiento y afecto.
 * - Opción interactiva para desbloquear video sorpresa de YouTube.
 * - Botón discreto para reiniciar el recorrido desde el inicio.
 */
export default function Screen09Final({ onRestart }) {
  const data = experienceData.screen09
  const [isBonusUnlocked, setIsBonusUnlocked] = useState(false)

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

        {/* Sección interactiva: Felicitación extra / Video YouTube */}
        <div className="final-special-wrapper">
          {!isBonusUnlocked ? (
            <button
              className="final-special-trigger-btn"
              onClick={() => setIsBonusUnlocked(true)}
              aria-label="Desbloquear mensaje adicional de cumpleaños"
            >
              <span className="final-special-glyph">✦</span>
              <span className="final-special-trigger-text">{data.specialBonusTriggerText}</span>
              <span className="final-special-sparkle">✨</span>
            </button>
          ) : (
            <div className="final-special-card">
              <span className="card-tag">{data.specialBonusTitle}</span>
              {data.specialBonusMessage && (
                <p className="final-special-desc">{data.specialBonusMessage}</p>
              )}
              
              <a
                href={data.specialBonusUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gothic-primary final-video-link-btn"
                aria-label="Abrir video de felicitación en YouTube"
              >
                <svg
                  className="yt-play-icon"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>{data.specialBonusButtonText}</span>
                <span className="link-arrow-icon">↗</span>
              </a>
            </div>
          )}
        </div>

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
