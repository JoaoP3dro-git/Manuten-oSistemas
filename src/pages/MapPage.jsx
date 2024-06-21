import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export function MapPage() {
    const position = [-25.42494104761025, -49.27224469379518]

    return(
        <>
            <h2>Mapa</h2>
            <div>
              <MapContainer style={{ height: 500, width: 500 }} center={position} zoom={12}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <Marker position={position}>
                  <Popup>
                    Senai
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
        </>
    )
}