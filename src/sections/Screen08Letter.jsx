import React, { useState } from 'react'
import { experienceData } from '../data/experienceData'

/**
 * Screen08Letter — Pantalla 8: Confesión, Foto Especial y La Carta
 * - Progresión emocional en 4 etapas fluidas:
 *   1. Confesión previa (pausa emocional minimalista).
 *   2. Foto Especial reservada para el final.
 *   3. Sobre cerrado con sello de cera.
 *   4. Carta desplegada con tipografía clásica.
 */
export default function Screen08Letter({ onNext, onBack }) {
  const data = experienceData.screen08
  // Etapas: 'confession' | 'specialPhoto' | 'envelope' | 'letter'
  const [phase, setPhase] = useState('confession')

  return (
    <div className="screen-layout letter-section">
      {/* Encabezado */}
      <div className="section-header">
        <span className="card-tag">{data.tag}</span>
        <h2 className="section-title">Palabras para ti</h2>
        <div className="luminous-divider" />
      </div>

      {/* FASE 1: PAUSA EMOCIONAL / CONFESIÓN */}
      {phase === 'confession' && (
        <div className="confession-box">
          <h3 className="confession-title">{data.confessionTitle}</h3>
          <p className="confession-subtitle">{data.confessionSubtitle}</p>
          
          <div className="confession-body-card">
            <p className="confession-text">
              "{data.confessionBody}"
            </p>
          </div>

          <div className="section-actions">
            <button 
              className="btn-gothic-primary"
              onClick={() => setPhase('specialPhoto')}
              aria-label="Continuar a la foto especial"
            >
              <span>Continuar →</span>
            </button>
          </div>
        </div>
      )}

      {/* FASE 2: FOTOGRAFÍA ESPECIAL RESERVADA */}
      {phase === 'specialPhoto' && (
        <div className="special-photo-box">
          <span className="special-photo-badge">{data.specialPhotoBadge}</span>
          <h3 className="special-photo-title">"{data.specialPhotoTitle}"</h3>

          <div className="special-photo-frame">
            {data.specialPhoto ? (
              <img src={data.specialPhoto} alt={data.specialPhotoTitle} className="special-photo-img" loading="lazy" />
            ) : (
              <div className="special-photo-inner">
                <span className="photo-icon">✨</span>
                <span className="special-photo-tag">{data.specialPhotoPlaceholder}</span>
              </div>
            )}
          </div>

          <p className="special-photo-caption">
            "{data.specialPhotoCaption}"
          </p>

          <div className="section-actions">
            <button 
              className="btn-gothic-primary"
              onClick={() => setPhase('envelope')}
              aria-label="Ir al sobre de la carta"
            >
              <span>Ir a la carta →</span>
            </button>
          </div>
        </div>
      )}

      {/* FASE 3: EL SOBRE CERRADO */}
      {phase === 'envelope' && (
        <div className="envelope-wrapper">
          <div 
            className="gothic-envelope"
            onClick={() => setPhase('letter')}
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
            onClick={() => setPhase('letter')}
            aria-label="Abrir la carta"
          >
            <span>{data.openButtonText}</span>
          </button>
        </div>
      )}

      {/* FASE 4: LA CARTA DESPLEGADA */}
      {phase === 'letter' && (
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
            ← {data.backText}
          </button>
        )}
      </div>
    </div>
  )
}
