import React, { useEffect } from "react";
import GoogleMap from "google-map-react";
import Modal from "./Modal";
import { Loader } from "@googlemaps/js-api-loader";

const Marker = ({ text, lat, lng }) => <div>{text}</div>;

const RouteMap = ({ markers, center, zoom }) => {
  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyAvQXVwQJ_jNUW4SZYRuhUt_vnn7VOtsbc", // Replace with your Google Maps API key
      version: "weekly",
    });

    loader.load().then(() => {
      const mapOptions = {
        center: center,
        zoom: zoom,
      };

      const map = new window.google.maps.Map(
        document.getElementById("map"),
        mapOptions
      );

      const renderPolylines = (map, maps) => {
        /** Example of rendering geodesic polyline */
        // let geodesicPolyline = new maps.Polyline({
        //   path: markers,
        //   geodesic: true,
        //   strokeColor: "#00a1e1",
        //   strokeOpacity: 1.0,
        //   strokeWeight: 4,
        // });
        // geodesicPolyline.setMap(map);

        /** Example of rendering non geodesic polyline (straight line) */
        let nonGeodesicPolyline = new maps.Polyline({
          path: markers,
          geodesic: false,
          strokeColor: "#000",
          strokeOpacity: 0.7,
          strokeWeight: 3,
        });
        nonGeodesicPolyline.setMap(map);

        fitBounds(map, maps);
      };

      const fitBounds = (map, maps) => {
        var bounds = new maps.LatLngBounds();
        for (let marker of markers) {
          bounds.extend(new maps.LatLng(marker.lat, marker.lng));
        }
        map.fitBounds(bounds);
      };

      renderPolylines(map, window.google.maps);
    });

    // Clean up
    return () => {
      const mapContainer = document.getElementById("map");
    };
  }, [markers, center, zoom]);

  return (
    <div className="">
      <div id="map" style={{ height: "150vh", width: "100%" }}></div>
      <Modal />
    </div>
  );
};

RouteMap.defaultProps = {
  markers: [
    { text: "DUB", lat: 53.42728, lng: -6.24357 },
    { text: "YYZ", lat: 43.681583, lng: -79.61146 },
  ],
  center: { lat: 47.367347, lng: 8.5500025 },
  zoom: 4,
};

export default RouteMap;
