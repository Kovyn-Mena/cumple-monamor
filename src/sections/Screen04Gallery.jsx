import React, { useState } from 'react'
import { experienceData } from '../data/experienceData'

/**
 * Screen04Gallery — Pantalla 4: Recuerdos / Galería
 * - Galería de memorias íntima optimizada para iPhone y pantallas táctiles.
 * - Tarjetas con marcos fotográficos estilizados en cristal oscuro.
 * - Captions poéticos y descripciones explicativas.
 * - Micro-interacción táctil al tocar una fotografía para destacarla.
 */
export default function Screen04Gallery({ onNext, onBack }) {
  const data = experienceData.screen04
  const [selectedId, setSelectedId] = useState(null)

  const handleSelect = (id) => {
    setSelectedId(prev => (prev === id ? null : id))
  }

  return (
    <div className="screen-layout gallery-section">
      {/* Encabezado de la galería */}
      <div className="section-header">
        <span className="card-tag">{data.tag}</span>
        <h2 className="section-title">{data.title}</h2>
        <p className="section-subtitle">{data.subtitle}</p>
        <div className="luminous-divider" />
      </div>

      {/* Lista de tarjetas de recuerdo */}
      <div className="gallery-grid">
        {data.memories.map((item, index) => {
          const isSelected = selectedId === item.id

          return (
            <article 
              key={item.id || index}
              className={`gallery-card ${isSelected ? 'is-focused' : ''}`}
              onClick={() => handleSelect(item.id)}
              role="button"
              tabIndex={0}
              aria-label={`Recuerdo: ${item.caption}`}
            >
              {/* Marco fotográfico placeholder */}
              <div className="gallery-photo-frame">
                <div className="photo-placeholder-content">
                  <span className="photo-icon">📷</span>
                  <span className="photo-tag">{item.imagePlaceholder}</span>
                </div>
                {isSelected && (
                  <div className="photo-focus-badge">
                    <span>Recuerdo seleccionado</span>
                  </div>
                )}
              </div>

              {/* Pie de foto / Caption */}
              <div className="gallery-caption-block">
                <h3 className="gallery-caption">
                  "{item.caption}"
                </h3>
                <p className="gallery-description">
                  {item.description}
                </p>
              </div>
            </article>
          )
        })}
      </div>

      <span className="tap-hint">Toca una foto para iluminarla</span>

      {/* Acciones de navegación */}
      <div className="section-actions">
        <button 
          className="btn-gothic-primary" 
          onClick={onNext}
          aria-label="Continuar a las cosas que amo de ti"
        >
          <span>{data.buttonText}</span>
        </button>

        {onBack && (
          <button 
            className="btn-gothic-ghost" 
            onClick={onBack}
            aria-label="Volver a la línea de tiempo"
          >
            ← Volver a nuestra historia
          </button>
        )}
      </div>
    </div>
  )
}
