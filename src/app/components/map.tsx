'use client'
import { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function Map() {
  const [ latitude, setLatitude ] = useState(-27.49742232162857)
  const [ longitude, setLongitude ] = useState(153.01368955550595)
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  if (!isLoaded) return <div style={{textAlign: "center"}}>Loading map...</div>

  const center = { lat: latitude, lng: longitude }
  return (
    <div className="text-center d-flex flex-column" style={{height: "100%", width: "100%"}}>
      <GoogleMap
        zoom={15}
        center={center}
        mapContainerStyle={{ height: "100%", width: "100%" }}
      >
        <Marker position={{ lat: 4, lng: 4 }} />
      </GoogleMap>
    </div>
  );
}

export default Map;
