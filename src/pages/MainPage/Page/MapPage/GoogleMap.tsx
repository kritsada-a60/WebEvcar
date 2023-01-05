import React, { useState , useEffect } from 'react';
import { GoogleMap, InfoWindow, Marker } from '@react-google-maps/api';
import IconCar from '../../../../img/Icon/IconCar.png';
import axios from 'axios';
import { type } from 'os';

type MarkersData = {
    bt_pt_id: number;
    bt_pt_name: string;
    c_active: string;
    c_capacity: number;
    c_gps_signal: any;
    c_gps_status: any;
    c_id: number;
    c_lat: any;
    c_license_plate: string;
    c_lng: any;
    c_mileage: any;
    c_mileage_init: any;
    c_mqtt_code: string;
    c_place: any;
    c_speed: any;
    c_status: string;
    cgt_pt_id: number;
    cgt_pt_name: string;
    cs_id: any;
    ctm_id: number;
    ctm_name: string;
};

type MyMarkersData = {
    c_id: number;
    c_lat: any;
    c_license_plate: string;
    c_lng: any;
};

type NewData = {
    id: number;
    name: string;
    position: { lat: number , lng: number },
    customIcon: string;
}

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




const URLMerkersData = "http://54.86.117.200:5000/car/list"

function Map() {

    const [MarkersData, setMarkersData] = useState<MyMarkersData[]>([]);

    const [MarkersId, setMarkersId] = useState<MarkersData[]>([]);
    const [MarkersName, setMarkersName] = useState<MarkersData[]>([]);
    const [MarkersLat, setMarkersLat] = useState<MarkersData[]>([]);
    const [MarkersLng, setMarkersLng] = useState<MarkersData[]>([]);

    const [NewData, setNewData] = useState<NewData[]>([]);

    useEffect(() => {
        axios
        .post(URLMerkersData,{
            ctm_id : "2"
        })
        .then((res) => {
            // console.log(res.data.data);
            setMarkersData(res.data.data)
            // setMarkersId(res.data.data[0].c_id);
            // setdata(res.data.data.c_id);
            // setMarkersName(res.data.data.c_license_plate);
            // setMarkersLat(res.data.data.c_lat);
            // setMarkersLng(res.data.data.c_lng);
            // console.log(MarkersId)
            // Object.entries(res.data.data).forEach(([key,value]) =>{
            //     console.log(`${key} : ${value}`)
            // })
        })
        .catch((err) => console.error(err));

    }, []);

    // useEffect(() => {
    // const interval = setInterval(() => {
    //     console.log('This will run every second!');
    // }, 5000);
    // return () => clearInterval(interval);
    // }, []);

    // setInterval(() => {
    // console.log('Interval triggered');
    // }, 5000);

    //   useEffect(() => {
    //     const interval = setInterval(() => {
    //     setSeconds(seconds => seconds + 1);
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);


    useEffect(() =>{
        console.log(MarkersData,"This MarkersData")

        var data = [];
        for(var i in MarkersData) {
            data.push({
                id: MarkersData[i].c_id,
                name: MarkersData[i].c_license_plate,
                position: { lat: Number(MarkersData[i].c_lat), lng: Number(MarkersData[i].c_lng) },
                customIcon: IconCar   
            })
        }
        setNewData(data)
        
        // console.log(data);
    }, [MarkersData]);

    useEffect(() =>{
        // console.log(NewData,"This NewData")
    }, [NewData]);

    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker: any) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    const handleOnLoad = (map: any) => {
        const bounds = new google.maps.LatLngBounds();
        NewData?.forEach(({ position }) => bounds.extend(position));
        map.fitBounds(bounds);
    };

    return (
        <GoogleMap onLoad={handleOnLoad} onClick={() => setActiveMarker(null)} mapContainerStyle={{ width: '100vw', height: '100vh' }}>
            {NewData?.map(({ id, name, position, customIcon }) => (
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
