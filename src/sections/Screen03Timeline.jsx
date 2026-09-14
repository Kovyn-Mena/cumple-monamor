import React from 'react'
import { experienceData } from '../data/experienceData'

/**
 * Screen03Timeline — Pantalla 3: Nuestra Historia
 * - Timeline vertical minimalista y cinematográfica.
 * - Hitos cronológicos con fecha, título, relato y contenedor de fotografía placeholder.
 * - Línea de tiempo con luz violeta tenue.
 * - Botones de avance y retroceso.
 */
export default function Screen03Timeline({ onNext, onBack }) {
  const data = experienceData.screen03

  return (
    <div className="screen-layout timeline-section">
      {/* Encabezado de la sección */}
      <div className="section-header">
        <span className="card-tag">{data.tag}</span>
        <h2 className="section-title">{data.title}</h2>
        <p className="section-subtitle">{data.subtitle}</p>
        <div className="luminous-divider" />
      </div>

      {/* Línea de tiempo vertical */}
      <div className="timeline-container">
        <div className="timeline-track" aria-hidden="true" />

        {data.events.map((event, index) => (
          <article key={event.id || index} className="timeline-item">
            {/* Nodo luminoso en la línea */}
            <div className="timeline-node" aria-hidden="true">
              <span className="node-glow" />
            </div>

            {/* Tarjeta del hito */}
            <div className="timeline-card">
              <div className="timeline-card-header">
                <span className="event-step">{event.step}</span>
                <span className="event-date">{event.date}</span>
              </div>

              <h3 className="event-title">{event.title}</h3>

              {/* Placeholder o Imagen Real */}
              <div className="media-placeholder" role="img" aria-label={event.imagePlaceholder || event.title}>
                {event.image ? (
                  <img src={event.image} alt={event.title} className="media-img" loading="lazy" />
                ) : (
                  <div className="media-placeholder-inner">
                    <span className="media-icon">🖼️</span>
                    <span className="media-text">{event.imagePlaceholder}</span>
                  </div>
                )}
              </div>

              <p className="event-description">
                "{event.description}"
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Mensaje de cierre de la timeline */}
      <p className="timeline-closing">
        "{data.closingText}"
      </p>

      {/* Acciones de navegación */}
      <div className="section-actions">
        <button 
          className="btn-gothic-primary" 
          onClick={onNext}
          aria-label="Ir a la galería de recuerdos"
        >
          <span>{data.buttonText}</span>
        </button>

        {onBack && (
          <button 
            className="btn-gothic-ghost" 
            onClick={onBack}
            aria-label="Volver a la pantalla anterior"
          >
            ← Volver a la bienvenida
          </button>
        )}
      </div>
    </div>
  )
}
