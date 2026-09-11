import React, { useState } from 'react'
import { experienceData } from '../data/experienceData'

/**
 * Screen07Secret — Pantalla 7: Sección Secreta (Anomalía y Descubrimiento)
 * - Narrativa con personalidad ("Creías que ya habías terminado... Qué ingenua.").
 * - Gatillo interactivo en penumbra que no frustra ni es obvio.
 * - Revelación de la sorpresa oculta con tarjeta de cristal y resplandor.
 */
export default function Screen07Secret({ onNext, onBack }) {
  const data = experienceData.screen07
  const [isDiscovered, setIsDiscovered] = useState(false)

  return (
    <div className="screen-layout secret-section">
      {!isDiscovered ? (
        /* Estado 1: La Pausa y la Anomalía */
        <div className="secret-mystery-box">
          <div className="title-block">
            <h2 className="secret-pause-title">{data.pauseTitle}</h2>
            <span className="secret-pause-subtitle">"{data.pauseSubtitle}"</span>
            <div className="luminous-divider" />
          </div>

          <p className="secret-hint-text">
            {data.hintText}
          </p>

          <div className="secret-ambient-zone">
            {/* Gatillo / Anomalía visual discreta */}
            <button
              className="secret-anomaly-btn"
              onClick={() => setIsDiscovered(true)}
              aria-label="Descubrir la anomalía oculta"
            >
              <span className="anomaly-glyph">{data.secretTriggerSymbol}</span>
              <span className="anomaly-pulse-ring" />
            </button>
          </div>
        </div>
      ) : (
        /* Estado 2: Secreto Revelado */
        <div className="gothic-card secret-revealed-card">
          <span className="card-tag">{data.discoveredTag}</span>

          <h2 className="secret-discovered-title">
            "{data.discoveredTitle}"
          </h2>

          <div className="luminous-divider" />

          {/* Tarjeta con el contenido sorpresa placeholder */}
          <div className="surprise-frame">
            <span className="surprise-icon">🗝️</span>
            <p className="surprise-text">
              {data.surpriseContent}
            </p>
          </div>

          <div className="card-actions">
            <button
              className="btn-gothic-primary"
              onClick={onNext}
              aria-label="Avanzar a la siguiente parte"
            >
              <span>{data.buttonText}</span>
            </button>
          </div>
        </div>
      )}

      {/* Acción de retorno */}
      <div className="section-actions">
        {onBack && (
          <button 
            className="btn-gothic-ghost" 
            onClick={onBack}
            aria-label="Volver al quiz"
          >
            ← {data.backText}
          </button>
        )}
      </div>
    </div>
  )
}
