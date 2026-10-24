'use client'

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import countries from 'world-atlas/countries-110m.json'
import { useEffect, useState, type ComponentProps } from 'react'

// @types/react-simple-maps lags v5: it accepts TopoJSON and per-state styles at runtime.
const geography = countries as unknown as ComponentProps<typeof Geographies>['geography']
const geoStyle = { default: { outline: 'none' }, hover: { fill: '#3f1d2a', outline: 'none' }, pressed: { outline: 'none' } } as unknown as ComponentProps<typeof Geography>['style']

const locations = [[8.54, 39.27], [40.7128, -74.006], [51.5072, -0.1276], [35.6762, 139.6503]]

export function GlobalContactMap() {
  // Projected marker coordinates differ in the last float digit between server and client,
  // so the map itself only renders after mount.
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return <div aria-label="Animated world map showing remote collaboration locations" role="img" className="relative min-h-80 overflow-hidden rounded-xl border border-red-300/15 bg-[#080d16]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(248,113,113,.12),transparent_58%)]" /><div className="absolute inset-x-[8%] inset-y-10 overflow-hidden rounded-[50%] globe-rotation" aria-hidden="true">{mounted && <ComposableMap projectionConfig={{ scale: 145 }} className="absolute inset-0 size-full"><Geographies geography={geography}>{({ geographies }) => geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} fill="#182235" stroke="#334155" strokeWidth={0.35} style={geoStyle} />)}</Geographies>{locations.map(([lat, lon], index) => <Marker key={`${lat}-${lon}`} coordinates={[lon, lat]}><circle r={3.5} fill="#fda4af" className="map-ping" style={{ animationDelay: `${index * -0.7}s` }} /><circle r={10} fill="none" stroke="#fb7185" strokeOpacity={0.45} className="map-ping" style={{ animationDelay: `${index * -0.7}s` }} /></Marker>)}</ComposableMap>}</div><svg className="pointer-events-none absolute inset-0 size-full" viewBox="0 0 800 360" preserveAspectRatio="none" aria-hidden="true"><path className="flight-path" d="M250 220 Q390 80 485 175 T640 165" /><path className="flight-path flight-path-delay" d="M250 220 Q430 300 640 165" /><circle className="flight-dot" cx="250" cy="220" r="3" /><circle className="flight-dot flight-dot-delay" cx="250" cy="220" r="3" /></svg><div className="absolute inset-x-4 top-4 flex justify-between font-mono text-[9px] uppercase tracking-[.18em] text-red-200/70"><span>remote_mesh / global</span><span className="text-red-300">async collaboration</span></div><div className="absolute left-5 top-14 rounded border border-red-300/20 bg-[#090d16]/75 px-2 py-1 font-mono text-[8px] uppercase tracking-wider text-red-200 backdrop-blur">Adama / base</div><div className="absolute right-5 top-20 rounded border border-white/10 bg-[#090d16]/75 px-2 py-1 font-mono text-[8px] uppercase tracking-wider text-slate-400 backdrop-blur">global clients</div><div className="absolute inset-x-4 bottom-4 flex justify-between font-mono text-[9px] text-slate-600"><span>Adama ↔ everywhere</span><span className="text-red-300/70">every timezone</span></div></div>
}
