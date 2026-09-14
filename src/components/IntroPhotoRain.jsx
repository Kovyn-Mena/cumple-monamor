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
export default function IntroPhotoRain({ photos = [], onComplete, durationMs = 3700 }) {
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

  // Distribución equilibrada para 10 fotografías repartidas en todo el viewport
  const rainItems = useMemo(() => {
    const totalItems = Math.min(Math.max(photos.length, 10), 12)
    const list = []

    // 10 coordenadas cuidadosamente espaciadas horizontal (4% a 92%) y verticalmente
    const distribution = [
      // 1. Extremo izquierdo superior
      { x: 5, y: 12, rotStart: -9, rotEnd: 6, delay: 0.08, size: 94, fall: 145 },
      // 2. Izquierda media baja
      { x: 16, y: 55, rotStart: 7, rotEnd: -7, delay: 0.32, size: 98, fall: 155 },
      // 3. Centro-izquierda superior
      { x: 28, y: 18, rotStart: -6, rotEnd: 8, delay: 0.18, size: 100, fall: 160 },
      // 4. Centro-izquierda inferior
      { x: 36, y: 68, rotStart: 8, rotEnd: -6, delay: 0.60, size: 92, fall: 135 },
      // 5. Centro superior (destacada)
      { x: 48, y: 8, rotStart: -7, rotEnd: 7, delay: 0.25, size: 104, fall: 170 },
      // 6. Centro-derecha medio
      { x: 58, y: 50, rotStart: 6, rotEnd: -8, delay: 0.48, size: 98, fall: 150 },
      // 7. Centro-derecha superior
      { x: 68, y: 16, rotStart: -8, rotEnd: 6, delay: 0.15, size: 96, fall: 160 },
      // 8. Derecha inferior
      { x: 78, y: 65, rotStart: 7, rotEnd: -7, delay: 0.72, size: 92, fall: 135 },
      // 9. Extremo derecho superior
      { x: 88, y: 14, rotStart: -6, rotEnd: 8, delay: 0.38, size: 94, fall: 145 },
      // 10. Centro inferior (cierre suave)
      { x: 50, y: 78, rotStart: 8, rotEnd: -6, delay: 0.85, size: 96, fall: 125 }
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
        duration: `${2.9 + (i % 3) * 0.25}s`,
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
