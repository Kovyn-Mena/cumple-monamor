import React from 'react'
import { experienceData } from '../data/experienceData'

/**
 * Screen02Welcome — Pantalla 2: Bienvenida
 * - Tarjeta en cristal oscuro con atmósfera cálida e íntima.
 * - Mensaje introductorio de dedicatoria.
 * - Botón "CONTINUAR" y opción para retroceder.
 */
export default function Screen02Welcome({ onNext, onBack }) {
  const data = experienceData.screen02

  return (
    <div className="screen-layout welcome-section">
      <div className="gothic-card">
        <span className="card-tag">{data.tag}</span>

        <h2 className="card-title">{data.title}</h2>
        <div className="luminous-divider" />

        <div className="card-message-group">
          <p className="poetic-paragraph">
            "{data.message1}"
          </p>
          <p className="poetic-subtext">
            {data.message2}
          </p>
        </div>

        {/* Acciones de avance */}
        <div className="card-actions">
          <button 
            className="btn-gothic-primary" 
            onClick={onNext}
            aria-label="Continuar la experiencia"
          >
            <span>{data.buttonText}</span>
          </button>

          {onBack && (
            <button 
              className="btn-gothic-ghost" 
              onClick={onBack}
              aria-label="Volver al inicio"
            >
              ← {data.backText}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
