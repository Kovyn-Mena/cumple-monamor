import React, { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import './IntroPhotoRain.css'

/**
 * IntroPhotoRain
 * Capa de transición cinematográfica de lluvia de fotografías:
 * - Se renderiza directamente en document.body mediante createPortal para
 *   evitar que los transforms del contenedor padre (screen-transition) distorsionen
 *   el sistema de coordenadas de position: fixed en pantallas de escritorio.
 * - Distribuye las fotografías uniformemente en 6 zonas horizontales (de 0% a 100% del viewport).
 */
export default function IntroPhotoRain({ photos = [], onComplete, durationMs = 2700 }) {
  const [failedImages, setFailedImages] = useState({})
  const [mounted, setMounted] = useState(false)

  // Asegurar montaje en cliente para createPortal
  useEffect(() => {
    setMounted(true)
  }, [])

  // Precarga silenciosa en segundo plano
  useEffect(() => {
    if (Array.isArray(photos)) {
      photos.forEach(src => {
        if (typeof src === 'string' && src.trim()) {
          const img = new Image()
          img.src = src
        }
      })
    }
  }, [photos])

  // Temporizador para finalizar la transición
  useEffect(() => {
    const isReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const actualDuration = isReduced ? 1200 : durationMs

    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete()
      }
    }, actualDuration)

    return () => clearTimeout(timer)
  }, [durationMs, onComplete])

  // Distribución equilibrada dividida en 6 zonas horizontales a lo ancho de toda la pantalla
  const rainItems = useMemo(() => {
    const totalItems = Math.min(Math.max(photos.length, 18), 24)
    const list = []

    // 18 coordenadas distribuidas sistemáticamente por todo el ancho (x de 3% a 93%)
    const distribution = [
      // Zona 1: Extremo Izquierdo (3% - 15%)
      { x: 4, y: 10, rotStart: -10, rotEnd: 6, delay: 0.05, size: 82, fall: 140 },
      { x: 12, y: 42, rotStart: 7, rotEnd: -8, delay: 0.22, size: 76, fall: 130 },
      { x: 6, y: 74, rotStart: -8, rotEnd: 7, delay: 0.45, size: 80, fall: 120 },

      // Zona 2: Izquierda Media (18% - 32%)
      { x: 22, y: 18, rotStart: 8, rotEnd: -6, delay: 0.15, size: 88, fall: 155 },
      { x: 28, y: 55, rotStart: -7, rotEnd: 9, delay: 0.35, size: 84, fall: 145 },
      { x: 20, y: 82, rotStart: 9, rotEnd: -5, delay: 0.55, size: 78, fall: 110 },

      // Zona 3: Centro Izquierda (36% - 48%)
      { x: 38, y: 8, rotStart: -6, rotEnd: 8, delay: 0.1, size: 86, fall: 150 },
      { x: 44, y: 46, rotStart: 9, rotEnd: -7, delay: 0.3, size: 90, fall: 165 },
      { x: 36, y: 76, rotStart: -9, rotEnd: 6, delay: 0.5, size: 82, fall: 125 },

      // Zona 4: Centro Derecha (52% - 64%)
      { x: 54, y: 14, rotStart: 7, rotEnd: -9, delay: 0.18, size: 84, fall: 140 },
      { x: 60, y: 50, rotStart: -8, rotEnd: 7, delay: 0.4, size: 88, fall: 160 },
      { x: 52, y: 80, rotStart: 6, rotEnd: -8, delay: 0.6, size: 78, fall: 115 },

      // Zona 5: Derecha Media (68% - 82%)
      { x: 72, y: 10, rotStart: -9, rotEnd: 6, delay: 0.12, size: 86, fall: 150 },
      { x: 78, y: 44, rotStart: 8, rotEnd: -7, delay: 0.32, size: 80, fall: 135 },
      { x: 70, y: 72, rotStart: -7, rotEnd: 8, delay: 0.52, size: 84, fall: 130 },

      // Zona 6: Extremo Derecho (85% - 94%)
      { x: 88, y: 16, rotStart: 8, rotEnd: -8, delay: 0.25, size: 76, fall: 125 },
      { x: 92, y: 52, rotStart: -9, rotEnd: 5, delay: 0.42, size: 82, fall: 140 },
      { x: 86, y: 80, rotStart: 6, rotEnd: -6, delay: 0.62, size: 78, fall: 115 }
    ]

    for (let i = 0; i < totalItems; i++) {
      const coord = distribution[i % distribution.length]
      const photoSrc = photos[i % (photos.length || 1)] || null

      list.push({
        id: i,
        src: photoSrc,
        left: `${coord.x}%`,
        top: `${coord.y}%`,
        rotStart: `${coord.rotStart}deg`,
        rotEnd: `${coord.rotEnd}deg`,
        delay: `${coord.delay}s`,
        duration: `${2.1 + (i % 3) * 0.2}s`,
        size: `${coord.size}px`,
        fallDist: `${coord.fall}px`
      })
    }

    return list
  }, [photos])

  const handleImageError = (id) => {
    setFailedImages(prev => ({ ...prev, [id]: true }))
  }

  const content = (
    <div className="photo-rain-layer" aria-hidden="true">
      {rainItems.map((item) => {
        const hasError = failedImages[item.id] || !item.src

        return (
          <div
            key={item.id}
            className="photo-rain-item"
            style={{
              left: item.left,
              top: item.top,
              '--rot-start': item.rotStart,
              '--rot-end': item.rotEnd,
              '--delay': item.delay,
              '--duration': item.duration,
              '--photo-size': item.size,
              '--fall-dist': item.fallDist
            }}
          >
            <div className="photo-rain-card">
              {!hasError ? (
                <img
                  src={item.src}
                  alt=""
                  className="photo-rain-img"
                  onError={() => handleImageError(item.id)}
                  loading="eager"
                />
              ) : (
                <div className="photo-rain-placeholder">
                  <span className="placeholder-icon">✨</span>
                  <span className="placeholder-tag">Recuerdo</span>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )

  if (!mounted || typeof document === 'undefined') {
    return null
  }

  // Renderizado mediante portal para desacoplar del layout centrado de 480px
  return createPortal(content, document.body)
}
