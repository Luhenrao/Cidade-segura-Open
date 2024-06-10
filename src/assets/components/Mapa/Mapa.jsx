import React, { useEffect, useRef, useState } from 'react';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-control-geocoder';
import 'leaflet-routing-machine';
import './Mapa.css'

const Mapa = () => {
  const [currentPos, setCurrentPos] = useState(null);
  const [destination, setDestination] = useState('');
  const [geocodeResults, setGeocodeResults] = useState([]);
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  var endereco;

  useEffect(() => {
    if (!mapRef.current) {
      navigator.geolocation.watchPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setCurrentPos({ latitude, longitude });

          if (!mapRef.current) {
           
            const map = L.map(mapContainerRef.current).setView([latitude, longitude], 13);
            map.on("click",(event)=>{var geocoder = L.Control.Geocoder.nominatim();
              geocoder.reverse(event.latlng,map.options.crs.scale(map.getZoom()), (results) => {
                console.log(results);
                if(endereco!=undefined){
                  map.removeLayer(endereco);
                }
               endereco = L.marker(event.latlng).addTo(map);
               sessionStorage.setItem("endereco",results[0].name)
              
               
              });})

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(map);
         

            mapRef.current = map;
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, [currentPos]);

  const markerRef = useRef(null);
  const routingControlRef = useRef(null);

  const handleMyLocationClick = () => {
    if (currentPos && mapRef.current) {
      if (markerRef.current) {
        mapRef.current.removeLayer(markerRef.current);
      }
      const marker = L.marker([currentPos.latitude, currentPos.longitude], { icon: customIcon }).addTo(mapRef.current);
      mapRef.current.setView([currentPos.latitude, currentPos.longitude], 13);
      marker.bindPopup('Sua localização atual').openPopup();
      markerRef.current = marker;
    } else {
      console.log("Localização atual não disponível.");
    }
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleGeocode = () => {
    const geocoder = L.Control.Geocoder.nominatim();
    geocoder.geocode(destination, (results) => {
      setGeocodeResults(results);
    });
  };

  const handleSelectAddress = (result) => {
    const latlng = result.center;
    if (currentPos && mapRef.current) {
      if (markerRef.current) {
        mapRef.current.removeLayer(markerRef.current);
      }
      const marker = L.marker(latlng, { icon: customIcon }).addTo(mapRef.current);
      marker.bindPopup(result.name).openPopup();
      markerRef.current = marker;

      if (routingControlRef.current) {
        mapRef.current.removeControl(routingControlRef.current);
      }
      const routingControl = L.Routing.control({
        waypoints: [
          L.latLng(currentPos.latitude, currentPos.longitude),
          latlng
        ],
        routeWhileDragging: true
      }).addTo(mapRef.current);
      routingControlRef.current = routingControl;
      setGeocodeResults([]);
    }
  };

  const customIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png', // URL do ícone padrão da Leaflet
    iconSize: [25, 41], // Tamanho do ícone
    iconAnchor: [12, 41], // Ponto de ancoragem do ícone (centro inferior)
    popupAnchor: [0, -41], // Ponto de ancoragem do popup em relação ao ícone
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png', // URL da sombra do ícone
    shadowSize: [41, 41], // Tamanho da sombra
    shadowAnchor: [12, 41] // Ponto de ancoragem da sombra
  });




  
  return (
    <div>
  
      <div style={{ marginBottom: '20px' }}>
        <button className="my-location-button" onClick={handleMyLocationClick}>Minha localização atual</button>
       


      </div>
      <div id="map" ref={mapContainerRef} style={{ height: '700px', width: '100%'}}>


        
      </div>
      <ul>
        {geocodeResults.map((result, index) => (
          <li key={index} onClick={() => handleSelectAddress(result)}>
            {result.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mapa;
