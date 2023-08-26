'use client'
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY!,
  });

  if (!isLoaded) return <div style={{textAlign: "center"}}>Loading map...</div>

  return (
    <div className="text-center d-flex flex-column" style={{height: "100%"}}>
      <GoogleMap>
        <Marker position={{lat: 4, lng: 4}} />
      </GoogleMap>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.09251811908!2d153.01111021038042!3d-27.49749801779115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91508241eb7c49%3A0x9ae9946d3710eee9!2sThe%20University%20of%20Queensland!5e0!3m2!1sen!2sau!4v1693012952105!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style={{border: 0}}
            loading="lazy"
            />
    </div>
  );
}

export default Map;
