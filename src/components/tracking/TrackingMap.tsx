// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// To make this work, you need to install react-leaflet and leaflet
// For now, this is a styled placeholder.

const TrackingMap = ({ updates }: { updates: any[] }) => {
  return (
    <div className="bg-gray-200 rounded-lg shadow-md h-96 flex items-center justify-center">
      <p className="text-gray-500">Map will be displayed here.</p>

      {/* <MapContainer
        center={[0, 0]}
        zoom={6}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {updates.map((update) => (
          <Marker
            key={update.id}
            position={[update.latitude, update.longitude]}
          >
            <Popup>{update.status_update}</Popup>
          </Marker>
        ))}
      </MapContainer> */}
    </div>
  );
};

export default TrackingMap;
