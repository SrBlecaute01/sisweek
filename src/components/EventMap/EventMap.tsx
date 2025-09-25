import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import type {MarkerData} from "../../types";

interface EventMapProps {
  center: [number, number];
  zoom: number;
  markers: MarkerData[];
  className?: string;
}

function EventMap({center, zoom, markers, className}: EventMapProps) {
  return (
      <MapContainer
          center={center}
          zoom={zoom}
          minZoom={0}
          maxZoom={25}
          className={className || ""}
          style={{}}
      >
        <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | &copy; <a href="https://carto.com/attributions">CARTO</a>'
            maxZoom={25}
        />
        {markers.map((marker, index) => (
            <Marker key={index} position={marker.position}>
              <Popup>{marker.popupText}</Popup>
            </Marker>
        ))}
      </MapContainer>
  );
}

export default EventMap;