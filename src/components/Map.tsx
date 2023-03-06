import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef } from "react";
const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map | null>(null);

  mapboxgl.accessToken =
    "pk.eyJ1IjoiZGF2aWRhYWMiLCJhIjoiY2xjdHkyb2JxMDNnMDN2czVkdzJkbGpqayJ9.h9kw0S8xqW20zE1z72z-Pw";

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-79.19941948695276, -3.9873904285577377],
      zoom: 14,
    });
  });
  return (
    <>
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
