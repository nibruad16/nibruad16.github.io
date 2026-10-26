'use client'

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import countries from 'world-atlas/countries-110m.json'
import { useEffect, useState, type ComponentProps } from 'react'

// @types/react-simple-maps lags v5: it accepts TopoJSON and per-state styles at runtime.
const geography = countries as unknown as ComponentProps<typeof Geographies>['geography']
const geoStyle = { default: { outline: 'none' }, hover: { outline: 'none' }, pressed: { outline: 'none' } } as unknown as ComponentProps<typeof Geography>['style']

const home: [number, number] = [8.54, 39.27]

export function GlobalContactMap() {
  // Projected marker coordinates differ in the last float digit between server and client,
  // so the map itself only renders after mount.
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <figure className="m-0">
      <div role="img" aria-label="World map marking Adama, Ethiopia" className="retro-well relative aspect-[16/9] overflow-hidden bg-desktop!">
        {mounted && (
          <ComposableMap projectionConfig={{ scale: 150 }} className="absolute inset-0 size-full" aria-hidden="true">
            <Geographies geography={geography}>{({ geographies }) => geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} fill="#d4d4d4" stroke="#808080" strokeWidth={0.4} style={geoStyle} />)}</Geographies>
            <Marker coordinates={[home[1], home[0]]}><rect x={-5} y={-5} width={10} height={10} fill="#ff00b8" stroke="#000" strokeWidth={1.5} /><circle r={12} fill="none" stroke="#ff00b8" strokeWidth={1.5} className="map-ping" /></Marker>
          </ComposableMap>
        )}
        <span className="retro-tag absolute left-3 top-3">■ Adama / base</span>
        <span className="retro-tag absolute bottom-3 right-3">Every timezone</span>
      </div>
      <figcaption className="px-1 pt-2 font-mono text-xs">Based in Adama, Ethiopia. Working remotely with teams in any timezone.</figcaption>
    </figure>
  )
}
