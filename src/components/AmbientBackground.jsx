import React, { useMemo } from 'react'

/**
 * AmbientBackground
 * Crea la atmósfera "Dark Valentine's":
 * - Luces nebulosas violetas suaves.
 * - Viñeta oscura periférica.
 * - Partículas / polvo estelar flotante optimizado con CSS puro.
 */
export default function AmbientBackground() {
  // Generamos un número reducido de partículas para que sea ultra fluido en iPhone
  const particles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      top: `${(i * 17) % 95}%`,
      left: `${(i * 29 + 7) % 92}%`,
      size: `${(i % 3) + 2}px`,
      duration: `${4 + (i % 5)}s`,
      delay: `${(i % 4) * 0.8}s`
    }))
  }, [])

  return (
    <div className="ambient-wrapper" aria-hidden="true">
      {/* Luces violetas difusas */}
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />
      
      {/* Partículas de luz sutiles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="ambient-particle"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay
          }}
        />
      ))}

      {/* Viñeta de sombra para dar profundidad */}
      <div className="ambient-vignette" />
    </div>
  )
}
