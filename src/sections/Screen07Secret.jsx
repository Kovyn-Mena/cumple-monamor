import React, { useState } from 'react'
import { experienceData } from '../data/experienceData'

/**
 * Screen07Secret — Pantalla 7: Sección Secreta
 * - Mecánica de misterio y descubrimiento.
 * - Muestra un mensaje sutil de pausa y un gatillo interactivo oculto/discreto.
 * - Al ser descubierto, despliega con una animación el contenido secreto.
 */
export default function Screen07Secret({ onNext, onBack }) {
  const data = experienceData.screen07
  const [isDiscovered, setIsDiscovered] = useState(false)

  return (
    <div className="screen-layout secret-section">
      {!isDiscovered ? (
        /* Estado 1: Búsqueda / Misterio */
        <div className="secret-mystery-box">
          <span className="secret-wait-tag">{data.waitText}</span>
          
          <h2 className="secret-hint-title">
            "{data.hintText}"
          </h2>

          <div className="secret-ambient-zone">
            <p className="secret-micro-hint">
              (Hay un pequeño secreto flotando en la penumbra...)
            </p>

            {/* Elemento oculto interactivo */}
            <button
              className="secret-trigger-btn"
              onClick={() => setIsDiscovered(true)}
              aria-label="Tocar el secreto oculto"
            >
              <span className="trigger-symbol">{data.secretTrigger}</span>
              <span className="trigger-ripple" />
            </button>
          </div>
        </div>
      ) : (
        /* Estado 2: Secreto Revelado */
        <div className="gothic-card secret-revealed-card">
          <span className="card-tag">Secreto Desbloqueado</span>

          <h2 className="secret-discovered-title">
            {data.discoveredTitle}
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
              aria-label="Continuar a la carta"
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
