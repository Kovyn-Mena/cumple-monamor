import React, { useState } from 'react'
import { experienceData } from '../data/experienceData'

/**
 * Screen04Gallery — Pantalla 4: Archivo // Nosotros
 * - Estilo índice personal de registros y memorias.
 * - Lista táctil de entradas ([01] EL COMIENZO, [02] ..., etc.).
 * - Al tocar un registro, se abre el detalle con fotografía, fecha y relato.
 * - Incluye el sutil detalle narrativo: "todavía falta una foto por encontrar...".
 */
export default function Screen04Gallery({ onNext, onBack }) {
  const data = experienceData.screen04
  const [activeMemory, setActiveMemory] = useState(data.memories[0])

  return (
    <div className="screen-layout archive-section">
      {/* Encabezado del Archivo */}
      <div className="section-header">
        <span className="card-tag">{data.tag}</span>
        <h2 className="section-title">{data.title}</h2>
        <p className="section-subtitle">{data.subtitle}</p>
        <div className="luminous-divider" />
      </div>

      {/* Detalle narrativo / susurro */}
      {data.whisper && (
        <span className="narrative-whisper">
          "{data.whisper}"
        </span>
      )}

      {/* Selector tipo índice de registros */}
      <div className="archive-index-tabs" role="tablist">
        {data.memories.map((mem) => {
          const isActive = activeMemory?.id === mem.id

          return (
            <button
              key={mem.id}
              className={`archive-tab-btn ${isActive ? 'is-active' : ''}`}
              onClick={() => setActiveMemory(mem)}
              role="tab"
              aria-selected={isActive}
            >
              <span className="tab-code">[{mem.code}]</span>
              <span className="tab-title">{mem.title}</span>
            </button>
          )
        })}
      </div>

      {/* Tarjeta del registro activo */}
      {activeMemory && (
        <article className="gothic-card archive-detail-card" key={activeMemory.id}>
          <div className="archive-card-header">
            <span className="archive-entry-code">REGISTRO #{activeMemory.code}</span>
            <span className="event-date">{activeMemory.date}</span>
          </div>

          {/* Marco fotográfico o imagen real */}
          <div className="gallery-photo-frame">
            {activeMemory.image ? (
              <img src={activeMemory.image} alt={activeMemory.title} className="gallery-photo-img" loading="lazy" />
            ) : (
              <div className="photo-placeholder-content">
                <span className="photo-icon">📷</span>
                <span className="photo-tag">{activeMemory.imagePlaceholder}</span>
              </div>
            )}
          </div>

          {/* Relato del recuerdo */}
          <div className="archive-card-body">
            <h3 className="gallery-caption">
              "{activeMemory.caption}"
            </h3>
            <p className="gallery-description">
              {activeMemory.description}
            </p>
          </div>
        </article>
      )}

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
            aria-label="Volver a nuestra historia"
          >
            ← {data.backText}
          </button>
        )}
      </div>
    </div>
  )
}
