import React, { useEffect, useRef, useState } from 'react';
import Modal from './Modal';
import GoogleMapReact from 'google-map-react';



const Map = () => {
  const mapRef = useRef(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    } else {
      console.warn('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <>
      {currentLocation && (
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAvQXVwQJ_jNUW4SZYRuhUt_vnn7VOtsbc' }}
            defaultCenter={currentLocation}
            defaultZoom={12}
            yesIWantToUseGoogleMapApiInternals={true}
            onGoogleApiLoaded={({ map }) => {
              
              const marker = new window.google.maps.Marker({
                position: currentLocation,
                map: map,
                animation: window.google.maps.Animation.DROP,
                icon: {
                  url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
                },
              });
            }}
          />
        </div>
      )}
      <Modal />
    </>
  );
};

export default Map;

