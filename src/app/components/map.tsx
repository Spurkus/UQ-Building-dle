'use client'
import { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useShareableState } from '../hooks/useShareableState';
import { useBetween } from 'use-between';
import { correct_answer, buildings } from "../shared";

function Map() {
  const { playing, setPlaying, gameover } = useBetween(useShareableState);
  const [ zoom, setZoom ] = useState(15)
  const [ latitude, setLatitude ] = useState(-27.49742232162857)
  const [ longitude, setLongitude ] = useState(153.01368955550595)
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  if (!isLoaded) return <div style={{textAlign: "center"}}>Loading map...</div>

  const center = { lat: latitude, lng: longitude }

  if (gameover && playing) {
    setLatitude(buildings[correct_answer].latitude)
    setLongitude(buildings[correct_answer].longitude)
    setZoom(18)
    setPlaying(false)
    return
  }

  return (
    <div className="text-center d-flex flex-column" style={{height: "50%", width: "100%"}}>
      <GoogleMap
        zoom={zoom}
        center={center}
        mapContainerStyle={{ height: "100%", width: "100%" }}
        options={{ mapTypeControl: false, streetViewControl: false}}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}

export default Map;
