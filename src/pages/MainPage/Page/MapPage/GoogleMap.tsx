import React, { useState, useEffect } from 'react';
import { GoogleMap, InfoWindow, Marker } from '@react-google-maps/api';
import IconCar from '../../../../img/Icon/IconCar.png';
import IconCarOffline from '../../../../img/Icon/CarOffline.svg';

import IconCarSVG from '../../../../img/Icon/Car.svg';

import Icon1 from '../../../../img/Icon/MapDetail/1.png';
import Icon2 from '../../../../img/Icon/MapDetail/2.png';
import Icon3 from '../../../../img/Icon/MapDetail/3.png';
import Icon4 from '../../../../img/Icon/MapDetail/4.png';
import Icon5 from '../../../../img/Icon/MapDetail/5.png';
import Icon6 from '../../../../img/Icon/MapDetail/6.png';
import Icon7 from '../../../../img/Icon/MapDetail/7.png';

import IconCarOff from '../../../../img/Icon/MapDetail/Off.png';
import IconCarOn from '../../../../img/Icon/MapDetail/On.png';

import IconBettery from '../../../../img/Icon/MapDetail/Battery.png';
import IconBetteryRed from '../../../../img/Icon/MapDetail/BatteryRed.png';
import IconBetteryGreen from '../../../../img/Icon/MapDetail/BatteryGreen.png';
import IconBetteryType from '../../../../img/Icon/MapDetail/Type.png';

import IconStation from '../../../../img/Icon/IconStation_red.png';

import IconStationGreen from '../../../../img/Icon/IconStation0.png';
import IconStationRed from '../../../../img/Icon/IconStation1.png';
import IconStationGray from '../../../../img/Icon/IconStation2.png';
import axios from 'axios';
import { type } from 'os';
import { url } from 'inspector';
import Body from './Body';

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

type NewCarData = {
    id: string;
    name: string;
    position: { lat: number; lng: number };
    customIcon: string;
    positionlat: string;
    positionlng: string;
    battery: string;
    carspeed: string;
    miledistance: string;
    ptname: string;
    carstatus: string;
    ctmname: string;
    carcapacity: number;
};

type NewStationData = {
    id: string;
    name: string;
    position: { lat: number; lng: number };
    customIcon: string;
    positionlat: string;
    positionlng: string;
    sactive: any;
    ssname: string;
    scontact: string;
    ctmname: string;
    stel: string;
    ssid: any;
};

type NewData = {
    id: string;
    name: string;
    position: { lat: number; lng: number };
    customIcon: string;
};

type DataStation = {
    s_id: number;
    s_lat: any;
    s_license_plate: string;
    s_lng: any;
    s_mqtt_code: string;
};

type MyDataStation = {
    ctm_id: number;
    ctm_name: string;
    s_active: string;
    s_address: string;
    s_amphur: string;
    s_contact: string;
    s_id: number;
    s_lat: string;
    s_lng: string;
    s_mqtt_code: string;
    s_name: string;
    s_province: string;
    s_tel: string;
    s_tumbon: string;
    s_zipcode: string;
    ss_id: any;
    ss_name: string;
};

type MyDataCar = {
    bt_pt_id: any;
    bt_pt_name: string;
    c_active: any;
    c_capacity: any;
    c_gps_signal: any;
    c_gps_status: any;
    c_id: any;
    c_lat: any;
    c_license_plate: string;
    c_lng: any;
    c_mileage: any;
    c_mileage_init: any;
    c_mqtt_code: string;
    c_place: any;
    c_speed: any;
    c_status: string;
    cgt_pt_id: any;
    cgt_pt_name: string;
    cs_id: any;
    ctm_id: any;
    ctm_name: string;
};

type MyDataStaion = {
    ctm_id: string;
    ctm_name: string;
    s_active: string;
    s_address: string;
    s_amphur: string;
    s_contact: string;
    s_id: string;
    s_mqtt_code: string;
    s_name: string;
    s_province: string;
    s_tel: string;
    s_tumbon: string;
    s_zipcode: string;
    ss_id: string;
    s_lat: string;
    s_lng: string;
    ss_name: string;
};

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

const URLMerkersData = 'https://evcarkmitl.com:5000/car/list';
const URLMerkersDataStation = 'https://evcarkmitl.com:5000/station/list';

function Map() {
    const [MarkersData, setMarkersData] = useState<MyMarkersData[]>([]);

    const [MarkersDataStation, setMarkersDataStation] = useState<MyDataStation[]>([]);

    const [MarkersId, setMarkersId] = useState<MarkersData[]>([]);
    const [MarkersName, setMarkersName] = useState<MarkersData[]>([]);
    const [MarkersLat, setMarkersLat] = useState<MarkersData[]>([]);
    const [MarkersLng, setMarkersLng] = useState<MarkersData[]>([]);

    const [DataCar, setDataCar] = useState<NewCarData[]>([]);

    const [DataStation, setDataStation] = useState<NewStationData[]>([]);

    const LS = localStorage;
    const CTMID = LS.getItem('USERCTM');
    const UID = LS.getItem('LVUSERID');
    const CID = LS.getItem('IdCarEditHistory');

    useEffect(() => {
        if (CTMID == '1') {
            axios
                .post(URLMerkersData, {
                    ctm_id: ''
                })
                .then((res) => {
                    setMarkersData(res.data.data);
                })
                .catch((err) => console.error(err));

            axios
                .post(URLMerkersDataStation, {
                    ctm_id: ''
                })
                .then((res) => {
                    console.log(res.data.data, 'DataStation');
                    setMarkersDataStation(res.data.data);
                })
                .catch((err) => console.error(err));
        } else {
            axios
                .post(URLMerkersData, {
                    ctm_id: CTMID
                })
                .then((res) => {
                    setMarkersData(res.data.data);
                })
                .catch((err) => console.error(err));

            axios
                .post(URLMerkersDataStation, {
                    ctm_id: CTMID
                })
                .then((res) => {
                    console.log(res.data.data, 'DataStation');
                    setMarkersDataStation(res.data.data);
                })
                .catch((err) => console.error(err));
        }
    }, []);

    const ReMarkerData = () => {
        if (CTMID == '1') {
            axios
                .post(URLMerkersData, {
                    ctm_id: ''
                })
                .then((res) => {
                    setMarkersData(res.data.data);
                })
                .catch((err) => console.error(err));

            axios
                .post(URLMerkersDataStation, {
                    ctm_id: ''
                })
                .then((res) => {
                    console.log(res.data.data, 'DataStation');
                    setMarkersDataStation(res.data.data);
                })
                .catch((err) => console.error(err));
        } else {
            axios
                .post(URLMerkersData, {
                    ctm_id: CTMID
                })
                .then((res) => {
                    setMarkersData(res.data.data);
                })
                .catch((err) => console.error(err));

            axios
                .post(URLMerkersDataStation, {
                    ctm_id: CTMID
                })
                .then((res) => {
                    console.log(res.data.data, 'DataStation');
                    setMarkersDataStation(res.data.data);
                })
                .catch((err) => console.error(err));
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            ReMarkerData();
            // console.log("1234")
        }, 20000);
        return () => clearInterval(interval);

    }, []);

    // window.setTimeout( function() {
        
    //     ReMarkerData();
    // }, 5000);

    // const nodeInterval: NodeJS.Timeout = setInterval(() => {
    //     console.log("1234")
    // }, 3000);

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

    useEffect(() => {
        console.log(MarkersData, 'This MarkersData');
        console.log(MarkersDataStation, 'This MarkersDataStation');
        var dataCar = [];
        for (var i in MarkersData) {
            dataCar.push({
                id: 'c_' + MarkersData[i].c_id.toString(),
                name: MarkersData[i].c_license_plate,
                position: { lat: Number(MarkersData[i].c_lat), lng: Number(MarkersData[i].c_lng) },
                // customIcon: IconCarSVG,
                customIcon: MarkersData[i].c_status == "OFF-LINE" ? IconCarOffline : IconCarSVG,
                positionlat: MarkersData[i].c_lat,
                positionlng: MarkersData[i].c_lng,
                battery: MarkersData[i].bt_pt_name,
                carspeed: MarkersData[i].c_speed,
                miledistance: MarkersData[i].c_mileage_init,
                ptname: MarkersData[i].cgt_pt_name,
                carstatus: MarkersData[i].c_status,
                ctmname: MarkersData[i].ctm_name,
                carcapacity: MarkersData[i].c_capacity
            });
        }
        setDataCar(dataCar);
        var dataStation = [];
        for (var i in MarkersDataStation) {
            dataStation.push({
                id: 's_' + MarkersDataStation[i].s_id.toString(),
                name: MarkersDataStation[i].s_mqtt_code,
                position: { lat: Number(MarkersDataStation[i].s_lat), lng: Number(MarkersDataStation[i].s_lng) },
                customIcon: MarkersDataStation[i].ss_id == "0" ? IconStationRed : IconStationGreen,
                positionlat: MarkersDataStation[i].s_lat,
                positionlng: MarkersDataStation[i].s_lng,
                sactive: MarkersDataStation[i].s_active,
                ssname: MarkersDataStation[i].ss_name,
                scontact: MarkersDataStation[i].s_contact,
                ctmname: MarkersDataStation[i].s_name,
                stel: MarkersDataStation[i].s_tel,
                ssid: MarkersDataStation[i].ss_id
            });
        }

        setDataStation(dataStation);

        // console.log(data);
    }, [MarkersData]);

    useEffect(() => {
        // console.log(NewData,"This NewData")
    }, [DataCar]);

    useEffect(() => {
        console.log(DataStation, 'This DataStation');
    }, [DataStation]);

    const [url, setUrl] = useState('');
    const [param, setParam] = useState('');

    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker: any) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
        console.log(marker);
        const tmp = marker.split('_');
        console.log(tmp[0]);

        if (tmp[0] == 'c') {
            axios
                .post('https://evcarkmitl.com:5000/car/one', { c_id: tmp[1].toString() })
                .then((res) => {
                    console.log(res.data.data, 'Customer');
                })
                .catch((err) => console.error(err));
        } else {
            axios
                .post('https://evcarkmitl.com:5000/station/one', { s_id: tmp[1].toString() })
                .then((res) => {
                    console.log(res.data.data, 'Station');
                })
                .catch((err) => console.error(err));
        }

        axios
            .post(url, JSON.parse(JSON.stringify(param)))
            .then((res) => {
                console.log(res.data.data);
            })
            .catch((err) => console.error(err));
    };

    const handleOnLoad = (map: any) => {
        const bounds = new google.maps.LatLngBounds();
        // DataCar?.forEach(({ position }) => bounds.extend(position));
        // DataStation?.forEach(({ position }) => bounds.extend(position));
        map.fitBounds(bounds);
    };

    const OPTIONS = {
        minZoom: 2,
        maxZoom: 18
    };

    const center = {
        lat: 13.619392,
        lng: 100.720057
    };

    const [map, setMap] = React.useState(null)

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <GoogleMap
                onLoad={handleOnLoad}
                options={OPTIONS}
                center={{ lat: 13.619392, lng: 100.720057 }}
                onClick={() => setActiveMarker(null)}
                mapContainerStyle={{ width: '50vw', height: '100vh' }}
                // onUnmount={onUnmount}
                // clickableIcons={true}
            >
                {DataCar?.map(({ id, name, position, customIcon, positionlat, positionlng, battery, carspeed, miledistance, ptname, carstatus, ctmname, carcapacity }) => (
                    <Marker key={id} position={position} onClick={() => handleActiveMarker(id)} icon={{ url: customIcon, scaledSize: new google.maps.Size(30, 30) }}>
                        {activeMarker === id ? (
                            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                                <div style={{ width: '20vw', height: '40vh' }}>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <p style={{ margin: '1vh 0.5vw', width: '10vw', fontWeight: 'bold', fontSize: '3vh' }}>{name}</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        {carstatus === 'OFF-LINE' ? <img src={IconCarOff} style={{ width: '1vw' }} /> : <img src={IconCarOn} style={{ width: '1vw' }} />}
                                        <p style={{ margin: '1vh 0.5vw', width: '5vw', fontWeight: 'bold' }}>{carstatus}</p>
                                        <p style={{ width: '12vw', display: 'flex', justifyContent: 'flex-end' }}>{ctmname}</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <img src={Icon1} style={{ width: '1vw' }} />
                                        <p style={{ margin: '1vh 0.5vw', width: '5vw', fontWeight: 'bold' }}>ระยะทางสะสม</p>
                                        <p style={{ width: '12vw', display: 'flex', justifyContent: 'flex-end' }}>{miledistance}</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <img src={Icon2} style={{ width: '1vw' }} />
                                        <p style={{ margin: '1vh 0.5vw', width: '5vw', fontWeight: 'bold' }}>ความเร็ว (หน่วย)</p>
                                        <p style={{ width: '12vw', display: 'flex', justifyContent: 'flex-end' }}>{carspeed}</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <img src={Icon3} style={{ width: '1vw' }} />
                                        <p style={{ margin: '1vh 0.5vw', width: '5vw', fontWeight: 'bold' }}>ชื่อคนขับ</p>
                                        <p style={{ width: '12vw', display: 'flex', justifyContent: 'flex-end' }}>ไม่ระบุผู้ขับขี่</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <img src={Icon4} style={{ width: '1vw' }} />
                                        <p style={{ margin: '1vh 0.5vw', width: '5vw', fontWeight: 'bold' }}>ใบขับขี่</p>
                                        <p style={{ width: '12vw', display: 'flex', justifyContent: 'flex-end' }}>ไม่ระบุใบขับขี่</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <img src={Icon7} style={{ width: '1vw' }} />
                                        <p style={{ margin: '1vh 0.5vw', width: '5vw', fontWeight: 'bold' }}>ตำแหน่ง</p>
                                        <p style={{ width: '12vw', display: 'flex', justifyContent: 'flex-end' }}>ละติจูด : {positionlat}</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <p style={{ margin: '1vh 0.5vw', width: '5vw', fontWeight: 'bold' }}></p>
                                        <p style={{ width: '13vw', display: 'flex', justifyContent: 'flex-end' }}>ลองจิจูด : {positionlng}</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        {carcapacity <= 25 ? <img src={IconBetteryRed} style={{ width: '1vw' }} /> : <img src={IconBetteryGreen} style={{ width: '1vw' }} />}
                                        <p style={{ margin: '1vh 0.5vw', width: '5vw', fontWeight: 'bold' }}>ระดับแบตเตอรี่</p>
                                        <p style={{ width: '12vw', display: 'flex', justifyContent: 'flex-end' }}>{carcapacity} %</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <img src={IconBetteryType} style={{ width: '1vw' }} />
                                        <p style={{ margin: '1vh 0.5vw', width: '5vw', fontWeight: 'bold' }}>ประเภทหัวชาร์จ</p>
                                        <p style={{ width: '12vw', display: 'flex', justifyContent: 'flex-end' }}>{ptname}</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <img src={IconBettery} style={{ width: '1vw' }} />
                                        <p style={{ margin: '1vh 0.5vw', width: '5vw', fontWeight: 'bold' }}>ประเภทแบตเตอรี่</p>
                                        <p style={{ width: '12vw', display: 'flex', justifyContent: 'flex-end' }}>{battery}</p>
                                    </div>
                                </div>
                            </InfoWindow>
                        ) : null}
                    </Marker>
                ))}
                {DataStation?.map(({ id, name, position, customIcon, positionlat, positionlng, sactive, ssname, scontact, stel, ctmname, ssid }) => (
                    <Marker key={id} position={position} onClick={() => handleActiveMarker(id)} icon={customIcon}>
                        {activeMarker === id ? (
                            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                                <div style={{ width: '20vw', height: '40vh' }}>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <p style={{ margin: '1vh 0.5vw', width: '10vw', fontWeight: 'bold', fontSize: '3vh' }}>{name}</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        {ssname === 'OFF-LINE' ? <img src={IconCarOff} style={{ width: '1vw' }} /> : <img src={IconCarOn} style={{ width: '1vw' }} />}
                                        <p style={{ margin: '1vh 0.5vw', width: '5vw', fontWeight: 'bold' }}>{ssname}</p>
                                        {/* <p style={{width:'12vw',display: 'flex', justifyContent: 'flex-end'}}>{sactive}</p> */}
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <img src={Icon3} style={{ width: '1vw' }} />
                                        <p style={{ margin: '1vh 0.5vw', width: '5vw', fontWeight: 'bold' }}>ชื่อสถานี</p>
                                        <p style={{ width: '12vw', display: 'flex', justifyContent: 'flex-end' }}>{ctmname}</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <img src={IconBetteryType} style={{ width: '1vw' }} />
                                        <p style={{ margin: '1vh 0.5vw', width: '5vw', fontWeight: 'bold' }}>ชื่อเจ้าของ</p>
                                        <p style={{ width: '12vw', display: 'flex', justifyContent: 'flex-end' }}>{scontact}</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <img src={IconBetteryType} style={{ width: '1vw' }} />
                                        <p style={{ margin: '1vh 0.5vw', width: '5vw', fontWeight: 'bold' }}>เบอร์ติดต่อ</p>
                                        <p style={{ width: '12vw', display: 'flex', justifyContent: 'flex-end' }}>{stel}</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <img src={Icon7} style={{ width: '1vw' }} />
                                        <p style={{ margin: '1vh 0.5vw', width: '5vw', fontWeight: 'bold' }}>ตำแหน่ง</p>
                                        <p style={{ width: '12vw', display: 'flex', justifyContent: 'flex-end' }}>ละติจูด : {positionlat}</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <p style={{ margin: '1vh 0.5vw', width: '5vw', fontWeight: 'bold' }}></p>
                                        <p style={{ width: '13vw', display: 'flex', justifyContent: 'flex-end' }}>ลองจิจูด : {positionlng}</p>
                                    </div>
                                </div>
                            </InfoWindow>
                        ) : null}
                    </Marker>
                ))}
            </GoogleMap>
            <Body />
        </div>
    );
}

export default Map;
