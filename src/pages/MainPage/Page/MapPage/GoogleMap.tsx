import React, { useState } from 'react';
import { GoogleMap, InfoWindow, Marker } from '@react-google-maps/api';
import IconCar from '../../../../img/Icon/IconCar.png';

const markers = [
    {
        id: 1,
        name: 'Chicago, Illinois',
        position: { lat: 41.881832, lng: -87.623177 },
        customIcon: IconCar
    },
    {
        id: 2,
        name: 'Denver, Colorado',
        position: { lat: 39.739235, lng: -104.99025 },
        customIcon: IconCar
    },
    {
        id: 3,
        name: 'Los Angeles, California',
        position: { lat: 34.052235, lng: -118.243683 },
        customIcon: IconCar
    },
    {
        id: 4,
        name: 'New York, New York',
        position: { lat: 40.712776, lng: -74.005974 },
        customIcon: IconCar
    }
];

function Map() {
    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker: any) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    const handleOnLoad = (map: any) => {
        const bounds = new google.maps.LatLngBounds();
        markers.forEach(({ position }) => bounds.extend(position));
        map.fitBounds(bounds);
    };

    return (
        <GoogleMap onLoad={handleOnLoad} onClick={() => setActiveMarker(null)} mapContainerStyle={{ width: '100vw', height: '100vh' }}>
            {markers.map(({ id, name, position, customIcon }) => (
                <Marker key={id} position={position} onClick={() => handleActiveMarker(id)} icon={customIcon}>
                    {activeMarker === id ? (
                        <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                            <div>{name}</div>
                        </InfoWindow>
                    ) : null}
                </Marker>
            ))}
        </GoogleMap>
    );
}

export default Map;
