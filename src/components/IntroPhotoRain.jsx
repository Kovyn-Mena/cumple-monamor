import React, { useEffect, useMemo, useState } from 'react'
import './IntroPhotoRain.css'

/**
 * IntroPhotoRain
 * Capa de transición cinematográfica:
 * - Despliega pequeñas fotografías flotantes/cayendo suavemente al presionar ENTRAR.
 * - Utiliza transform y opacity para 60fps en iPhone.
 * - Soporte para fallback si las fotos aún no existen físicamente.
 * - Soporte para prefers-reduced-motion.
 */
export default function IntroPhotoRain({ photos = [], onComplete, durationMs = 2700 }) {
  // Estado para registrar qué imágenes fallaron al cargar (para mostrar placeholder estilizado)
  const [failedImages, setFailedImages] = useState({})

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

  // Temporizador para finalizar la transición y llamar a onComplete
  useEffect(() => {
    // Si el usuario tiene movimiento reducido activado, acortamos a 1200ms
    const isReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const actualDuration = isReduced ? 1200 : durationMs

    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete()
      }
    }, actualDuration)

    return () => clearTimeout(timer)
  }, [durationMs, onComplete])

  // Generamos una distribución fija y armoniosa de 16-20 posiciones por toda la pantalla
  const rainItems = useMemo(() => {
    const totalItems = Math.min(Math.max(photos.length, 16), 22)
    const list = []

    // Coordenadas pre-calculadas en cuadrícula distribuida con pequeñas variaciones
    const baseCoords = [
      { x: 8, y: 8, rotStart: -8, rotEnd: 5, delay: 0.05, size: 78, fall: 120 },
      { x: 74, y: 6, rotStart: 7, rotEnd: -6, delay: 0.12, size: 84, fall: 150 },
      { x: 40, y: 12, rotStart: -5, rotEnd: 8, delay: 0.2, size: 88, fall: 130 },
      { x: 18, y: 26, rotStart: 9, rotEnd: -4, delay: 0.15, size: 76, fall: 140 },
      { x: 62, y: 24, rotStart: -10, rotEnd: 6, delay: 0.28, size: 82, fall: 160 },
      { x: 86, y: 28, rotStart: 6, rotEnd: -9, delay: 0.35, size: 74, fall: 110 },
      { x: 5, y: 44, rotStart: -7, rotEnd: 5, delay: 0.22, size: 80, fall: 145 },
      { x: 34, y: 40, rotStart: 8, rotEnd: -7, delay: 0.4, size: 90, fall: 170 },
      { x: 78, y: 46, rotStart: -6, rotEnd: 8, delay: 0.3, size: 78, fall: 135 },
      { x: 52, y: 52, rotStart: 10, rotEnd: -5, delay: 0.45, size: 84, fall: 150 },
      { x: 14, y: 64, rotStart: -9, rotEnd: 7, delay: 0.38, size: 82, fall: 125 },
      { x: 70, y: 68, rotStart: 7, rotEnd: -8, delay: 0.5, size: 86, fall: 140 },
      { x: 42, y: 70, rotStart: -5, rotEnd: 6, delay: 0.55, size: 80, fall: 130 },
      { x: 88, y: 76, rotStart: 8, rotEnd: -6, delay: 0.42, size: 76, fall: 120 },
      { x: 8, y: 82, rotStart: -6, rotEnd: 9, delay: 0.6, size: 78, fall: 115 },
      { x: 56, y: 84, rotStart: 7, rotEnd: -5, delay: 0.65, size: 85, fall: 110 }
    ]

    for (let i = 0; i < totalItems; i++) {
      const coord = baseCoords[i % baseCoords.length]
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

  return (
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
}
