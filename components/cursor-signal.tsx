'use client'

import { useEffect, useRef } from 'react'

export function CursorSignal() {
  const signalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const signal = signalRef.current
    if (!signal) return
    let frame = 0
    const move = (event: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        signal.style.setProperty('--cursor-x', `${event.clientX}px`)
        signal.style.setProperty('--cursor-y', `${event.clientY}px`)
        signal.classList.add('cursor-signal-active')
      })
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', move)
    }
  }, [])

  return <div ref={signalRef} className="cursor-signal" aria-hidden="true"><span className="cursor-signal-core" /><span className="cursor-signal-ring" /><span className="cursor-signal-crosshair" /></div>
}
