import mapboxgl from "mapbox-gl";
import { Geolocation } from "@capacitor/geolocation";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";
import { IonLoading } from "@ionic/react";
const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [coords] = useState(async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    return coordinates.coords;
  });
  const [locationPermission, setLocationPermission] = useState<boolean>(false);
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZGF2aWRhYWMiLCJhIjoiY2xjdHkyb2JxMDNnMDN2czVkdzJkbGpqayJ9.h9kw0S8xqW20zE1z72z-Pw";

  useEffect(() => {
    const getLocationPermission = async () => {
      const result = await Geolocation.requestPermissions();
      setLocationPermission(result.location === "granted");
    };

    getLocationPermission();
    if (map.current) return; // initialize map only once
    if (locationPermission) {
      coords
        .then((data) => {
          map.current = new mapboxgl.Map({
            container: mapContainer.current!,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [data.longitude, data.latitude],
            zoom: 14,
          });
        })
        .catch((e) => {
          return e;
        });
    }
  });
  return (
    <>
      <IonLoading isOpen={false} />
      <div className="div-container" style={mapContainerStyle()}>
        <div
          ref={mapContainer}
          className="map-container"
          id="map"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        />
      </div>
    </>
  );
};

export default Map;

const mapContainerStyle = () =>
  ({
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    textAlign: "center",
    margin: "2rem",
    width: "100%",
    height: "100%",
    position: "relative",
    borderRadius: "8px",
  } as const);
