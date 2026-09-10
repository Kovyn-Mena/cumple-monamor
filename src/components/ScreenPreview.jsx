import React, { useState } from 'react'

/**
 * ScreenPreview
 * Segunda pantalla del prototipo:
 * - Demuestra cómo se verá el contenido estructurado en capítulos o etapas.
 * - Tarjeta con cristal oscuro (dark glassmorphism) y acentos violetas.
 * - Pequeña interacción táctil de demostración.
 * - Botón para regresar y probar la transición de navegación.
 */
export default function ScreenPreview({ onBack }) {
  const [unlocked, setUnlocked] = useState(false)

  return (
    <div className="preview-container">
      <div className="preview-card">
        <span className="preview-chapter-tag">Capítulo I • El Comienzo</span>
        
        <h2 className="preview-headline">Donde Todo Empieza</h2>

        <p className="preview-body-text">
          Este es el primer paso de un recorrido interactivo diseñado para celebrar 
          tu día especial. A través de cada sección descubriremos memorias, 
          mensajes y pequeños detalles preparados para ti.
        </p>

        {/* Micro-interacción táctil de prueba */}
        <div 
          className="preview-interactive-box"
          onClick={() => setUnlocked(!unlocked)}
          role="button"
          tabIndex={0}
        >
          <span className="interactive-box-icon">
            {unlocked ? '🔮' : '✨'}
          </span>
          <span className="interactive-box-text">
            {unlocked ? 'Detalle revelado: Todo lo especial está por venir.' : 'Toca aquí para una sorpresa'}
          </span>
        </div>
      </div>

      {/* Botón para volver y probar la fluidez */}
      <button 
        className="btn-secondary"
        onClick={onBack}
      >
        ← Volver al inicio
      </button>
    </div>
  )
}
