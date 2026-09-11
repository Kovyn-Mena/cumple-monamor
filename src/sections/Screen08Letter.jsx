import React, { useState } from 'react'
import { experienceData } from '../data/experienceData'

/**
 * Screen08Letter — Pantalla 8: La Carta
 * - Clímax emocional de la experiencia.
 * - Presenta inicialmente un sobre oscuro elegante con sello de cera violeta.
 * - Al pulsar "ABRIR CARTA", se despliega suavemente el documento con tipografía literaria.
 * - Botón para avanzar hacia la pantalla final.
 */
export default function Screen08Letter({ onNext, onBack }) {
  const data = experienceData.screen08
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="screen-layout letter-section">
      {/* Encabezado */}
      <div className="section-header">
        <span className="card-tag">{data.tag}</span>
        <h2 className="section-title">Palabras para ti</h2>
        <div className="luminous-divider" />
      </div>

      {!isOpen ? (
        /* Estado 1: El Sobre Cerrado */
        <div className="envelope-wrapper">
          <div 
            className="gothic-envelope"
            onClick={() => setIsOpen(true)}
            role="button"
            tabIndex={0}
            aria-label="Sobre cerrado. Toca para abrir."
          >
            <div className="envelope-flap" />
            <div className="envelope-seal">
              <span className="seal-emblem">💌</span>
            </div>
            <div className="envelope-body">
              <p className="envelope-title">"{data.envelopeTitle}"</p>
              <span className="envelope-hint">Toca el sobre para abrirlo</span>
            </div>
          </div>

          <button 
            className="btn-gothic-primary"
            onClick={() => setIsOpen(true)}
            aria-label="Abrir la carta"
          >
            <span>{data.openButtonText}</span>
          </button>
        </div>
      ) : (
        /* Estado 2: La Carta Desplegada */
        <article className="gothic-card letter-card">
          <header className="letter-header">
            <h3 className="letter-greeting">{data.letterGreeting}</h3>
          </header>

          <div className="letter-body-content">
            {data.letterBody.map((paragraph, idx) => (
              <p key={idx} className="letter-paragraph">
                {paragraph}
              </p>
            ))}
          </div>

          <footer className="letter-footer">
            <span className="letter-signature">{data.letterSignature}</span>
            <span className="letter-author">{data.author}</span>
          </footer>

          <div className="card-actions letter-actions">
            <button
              className="btn-gothic-primary"
              onClick={onNext}
              aria-label="Ver mensaje final"
            >
              <span>{data.buttonText}</span>
            </button>
          </div>
        </article>
      )}

      {/* Acción de retorno */}
      <div className="section-actions">
        {onBack && (
          <button 
            className="btn-gothic-ghost" 
            onClick={onBack}
            aria-label="Volver a la sección secreta"
          >
            ← Volver al secreto
          </button>
        )}
      </div>
    </div>
  )
}
