import React, { useState } from 'react'
import { experienceData } from '../data/experienceData'

/**
 * Screen05LoveCards — Pantalla 5: Cosas que amo de ti
 * - Revelaciones progresivas táctiles y accesibles.
 * - Tarjetas inicialmente cerradas que se descubren al tocarlas.
 * - Una tarjeta revelada permanece abierta para evitar cierres accidentales.
 * - Contador de descubrimientos dinámico y banner poético final al revelar todas.
 */
export default function Screen05LoveCards({ onNext, onBack }) {
  const data = experienceData.screen05 || {}
  const cards = Array.isArray(data.cards) ? data.cards : []
  
  // IDs de las tarjetas descubiertas
  const [revealedIds, setRevealedIds] = useState([])

  const revealCard = (id) => {
    setRevealedIds(prev => {
      if (prev.includes(id)) return prev
      return [...prev, id]
    })
  }

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      revealCard(id)
    }
  }

  const totalCards = cards.length
  const revealedCount = revealedIds.filter(id => cards.some(c => c.id === id)).length
  const allRevealed = totalCards > 0 && revealedCount >= totalCards

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
        <span>Secretos revelados: {revealedCount} de {totalCards}</span>
      </div>

      {/* Grid de tarjetas interactivas */}
      <div className="love-cards-grid">
        {cards.map((card) => {
          const isRevealed = revealedIds.includes(card.id)

          return (
            <div
              key={card.id}
              className={`love-card ${isRevealed ? 'is-revealed' : 'is-closed'}`}
              onClick={() => revealCard(card.id)}
              onKeyDown={(e) => handleKeyDown(e, card.id)}
              role="button"
              tabIndex={0}
              aria-expanded={isRevealed}
              aria-label={`Tarjeta ${card.number}: ${isRevealed ? card.revealedTitle : (card.teaser || 'Toca para descubrir')}`}
            >
              <div className="love-card-header">
                <span className="love-card-number">{card.number}</span>
                <span className="love-card-state-icon" aria-hidden="true">
                  {isRevealed ? '🔮' : '✦'}
                </span>
              </div>

              {!isRevealed ? (
                /* Estado Oculto */
                <div className="love-card-teaser">
                  <span className="teaser-text">{card.teaser || 'Toca para descubrir'}</span>
                  <span className="teaser-hint">{card.number} / abrir</span>
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

      {/* Mensaje final al completar todos los secretos */}
      {allRevealed && data.allRevealedNotice && (
        <div className="all-revealed-banner" role="status" aria-live="polite">
          <span className="banner-sparkle" aria-hidden="true">✦</span>
          <p className="banner-text">{data.allRevealedNotice}</p>
        </div>
      )}

      {/* Acciones de navegación */}
      <div className="section-actions">
        <button 
          className={`btn-gothic-primary ${allRevealed ? 'is-unlocked' : ''}`}
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
