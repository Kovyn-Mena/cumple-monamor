import React, { useState } from 'react'
import { experienceData } from '../data/experienceData'

/**
 * Screen05LoveCards — Pantalla 5: Cosas que amo de ti
 * - Tarjetas interactivas que ocultan un secreto.
 * - Al tocar cada tarjeta, se despliega suavemente el mensaje íntimo con un resplandor violeta.
 * - Contador de descubrimientos para enriquecer la experiencia interactiva.
 */
export default function Screen05LoveCards({ onNext, onBack }) {
  const data = experienceData.screen05
  // Guardamos los IDs de las tarjetas descubiertas
  const [revealedIds, setRevealedIds] = useState([])

  const toggleCard = (id) => {
    setRevealedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const allRevealed = revealedIds.length === data.cards.length

  return (
    <div className="screen-layout love-cards-section">
      {/* Encabezado */}
      <div className="section-header">
        <span className="card-tag">{data.tag}</span>
        <h2 className="section-title">{data.title}</h2>
        <p className="section-subtitle">{data.subtitle}</p>
        <div className="luminous-divider" />
      </div>

      {/* Indicador de progreso de descubrimiento */}
      <div className="discovery-counter">
        <span>Secretos revelados: {revealedIds.length} de {data.cards.length}</span>
      </div>

      {/* Grid de tarjetas interactivas */}
      <div className="love-cards-grid">
        {data.cards.map((card) => {
          const isRevealed = revealedIds.includes(card.id)

          return (
            <div
              key={card.id}
              className={`love-card ${isRevealed ? 'is-revealed' : ''}`}
              onClick={() => toggleCard(card.id)}
              role="button"
              tabIndex={0}
              aria-expanded={isRevealed}
              aria-label={`Tarjeta ${card.number}: ${isRevealed ? card.revealedTitle : card.teaser}`}
            >
              <div className="love-card-header">
                <span className="love-card-number">{card.number}</span>
                <span className="love-card-state-icon">
                  {isRevealed ? '🔮' : '✦'}
                </span>
              </div>

              {!isRevealed ? (
                /* Estado Oculto */
                <div className="love-card-teaser">
                  <span className="teaser-text">{card.teaser}</span>
                  <span className="teaser-hint">Toca para abrir</span>
                </div>
              ) : (
                /* Estado Revelado */
                <div className="love-card-content">
                  <h3 className="revealed-title">{card.revealedTitle}</h3>
                  <p className="revealed-text">"{card.revealedText}"</p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Acciones de navegación */}
      <div className="section-actions">
        <button 
          className="btn-gothic-primary" 
          onClick={onNext}
          aria-label="Ir al mini-juego"
        >
          <span>{data.buttonText}</span>
        </button>

        {onBack && (
          <button 
            className="btn-gothic-ghost" 
            onClick={onBack}
            aria-label="Volver a la galería"
          >
            ← {data.backText}
          </button>
        )}
      </div>
    </div>
  )
}
