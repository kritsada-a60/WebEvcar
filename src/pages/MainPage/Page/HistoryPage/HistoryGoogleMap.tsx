import React, { useState, useEffect } from 'react';
import { GoogleMap, InfoWindow, Marker } from '@react-google-maps/api';
import IconCar from '../../../../img/Icon/IconCar.png';
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
import Body from "./Body"
import BodyMap from "./BodyTableMap"

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


const URLMerkersData = 'http://54.86.117.200:5000/car/list';
const URLMerkersDataStation = 'http://54.86.117.200:5000/station/list';
const baseURLTracking ="http://54.86.117.200:5000/car/tracking"

function Map() {
    const [MarkersData, setMarkersData] = useState<MyMarkersData[]>([]);

    const [MarkersDataStation, setMarkersDataStation] = useState<DataStation[]>([]);

    const [DataCar, setDataCar] = useState<NewCarData[]>([]);

    const [DataStation, setDataStation] = useState<NewData[]>([]);

    const LS = localStorage;

    const CTMID = LS.getItem('LVUSER');
    const UID = LS.getItem('LVUSERID');
    const CID = LS.getItem('IdCarEditHistory');

    useEffect(() => {
        axios
            .post(baseURLTracking, {
                ctm_id: CTMID,
                sdate: "2020-12-30",
                edate: "2024-1-31",
                u_id: UID,
                c_id: 1
            })
            .then((res) => {
                setMarkersData(res.data.data);
            })
            .catch((err) => console.error(err));


    }, []);


    useEffect(() => {
        console.log(MarkersData, 'This MarkersData');
        
        var dataCar = [];
        for (var i in MarkersData) {
            dataCar.push({
                id: 'c_' + MarkersData[i].c_id.toString(),
                name: MarkersData[i].c_license_plate,
                position: { lat: Number(MarkersData[i].c_lat), lng: Number(MarkersData[i].c_lng) },
                customIcon: IconCarSVG,
                positionlat:MarkersData[i].c_lat,
                positionlng:MarkersData[i].c_lng,
                battery:MarkersData[i].bt_pt_name,
                carspeed: MarkersData[i].c_speed,
                miledistance: MarkersData[i].c_mileage_init,
                ptname: MarkersData[i].cgt_pt_name,
                carstatus: MarkersData[i].c_status,
                ctmname: MarkersData[i].ctm_name,
                carcapacity: MarkersData[i].c_capacity,
            });
        }
        setDataCar(dataCar);


        // console.log(data);
    }, [MarkersData]);

    useEffect(() => {
        console.log(DataCar,"This DataCar")
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

        // if (tmp[0] == 'c') {
        //     axios
        //         .post('http://54.86.117.200:5000/car/one', { c_id: tmp[1].toString() })
        //         .then((res) => {
        //             console.log(res.data.data,"Customer");
        //         })
        //         .catch((err) => console.error(err));
        // }

        axios
            .post(url, JSON.parse(JSON.stringify(param)))
            .then((res) => {
                console.log(res.data.data);
            })
            .catch((err) => console.error(err));
    };

    const handleOnLoad = (map: any) => {
        const bounds = new google.maps.LatLngBounds();
        DataCar?.forEach(({ position }) => bounds.extend(position));
        map.fitBounds(bounds);
    };


    const OPTIONS = {
        minZoom: 2,
        maxZoom: 18,
    }


    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <GoogleMap onLoad={handleOnLoad} options={OPTIONS} center={{ lat: 13.619392, lng: 100.720057 }} onClick={() => setActiveMarker(null)} mapContainerStyle={{ width: '50vw', height: '100vh' }}>
                {DataCar?.map(({ id, name, position, customIcon, positionlat, positionlng, battery, carspeed, miledistance, ptname, carstatus, ctmname, carcapacity}) => (
                    <Marker key={id} position={position} onClick={() => handleActiveMarker(id)} icon={{url:customIcon, scaledSize: new google.maps.Size(30, 30)}}>
                        {activeMarker === id ? (
                            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                                <div style={{width:'20vw',height:'40vh'}}>
                                    <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <p style={{margin:'1vh 0.5vw',width:'10vw',fontWeight:'bold' , fontSize:'3vh'}}>{name}</p>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        {carstatus === "OFF-LINE" ? (
                                        <img src={IconCarOff} style={{width:'1vw'}}/>
                                        ) : 
                                        <img src={IconCarOn} style={{width:'1vw'}}/>
                                        }
                                        <p style={{margin:'1vh 0.5vw',width:'5vw',fontWeight:'bold'}}>{carstatus}</p>
                                        <p style={{width:'12vw',display: 'flex', justifyContent: 'flex-end'}}>{ctmname}</p>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <img src={Icon1} style={{width:'1vw'}}/>
                                        <p style={{margin:'1vh 0.5vw',width:'5vw',fontWeight:'bold'}}>ระยะทางสะสม</p>
                                        <p style={{width:'12vw',display: 'flex', justifyContent: 'flex-end'}}>{miledistance}</p>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <img src={Icon2} style={{width:'1vw'}}/>
                                        <p style={{margin:'1vh 0.5vw',width:'5vw',fontWeight:'bold'}}>ความเร็ว (หน่วย)</p>
                                        <p style={{width:'12vw',display: 'flex', justifyContent: 'flex-end'}}>{carspeed}</p>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <img src={Icon3} style={{width:'1vw'}}/>
                                        <p style={{margin:'1vh 0.5vw',width:'5vw',fontWeight:'bold'}}>ชื่อคนขับ</p>
                                        <p style={{width:'12vw',display: 'flex', justifyContent: 'flex-end'}}>ไม่ระบุผู้ขับขี่</p>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <img src={Icon4} style={{width:'1vw'}}/>
                                        <p style={{margin:'1vh 0.5vw',width:'5vw',fontWeight:'bold'}}>ใบขับขี่</p>
                                        <p style={{width:'12vw',display: 'flex', justifyContent: 'flex-end'}}>ไม่ระบุใบขับขี่</p>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <img src={Icon7} style={{width:'1vw'}}/>
                                        <p style={{margin:'1vh 0.5vw',width:'5vw',fontWeight:'bold'}}>ตำแหน่ง</p>
                                        <p style={{width:'12vw',display: 'flex', justifyContent: 'flex-end'}}>ละติจูด : {positionlat}</p>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <p style={{margin:'1vh 0.5vw',width:'5vw',fontWeight:'bold'}}></p>
                                        <p style={{width:'13vw',display: 'flex', justifyContent: 'flex-end'}}>ลองจิจูด : {positionlng}</p>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        {carcapacity <= 25 ? (
                                        <img src={IconBetteryRed} style={{width:'1vw'}}/>
                                        ) : 
                                        <img src={IconBetteryGreen} style={{width:'1vw'}}/>
                                        }
                                        <p style={{margin:'1vh 0.5vw',width:'5vw',fontWeight:'bold'}}>ระดับแบตเตอรี่</p>
                                        <p style={{width:'12vw',display: 'flex', justifyContent: 'flex-end'}}>{carcapacity} %</p>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <img src={IconBetteryType} style={{width:'1vw'}}/>
                                        <p style={{margin:'1vh 0.5vw',width:'5vw',fontWeight:'bold'}}>ประเภทหัวชาร์จ</p>
                                        <p style={{width:'12vw',display: 'flex', justifyContent: 'flex-end'}}>{ptname}</p>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <img src={IconBettery} style={{width:'1vw'}}/>
                                        <p style={{margin:'1vh 0.5vw',width:'5vw',fontWeight:'bold'}}>ประเภทแบตเตอรี่</p>
                                        <p style={{width:'12vw',display: 'flex', justifyContent: 'flex-end'}}>{battery}</p>
                                    </div>
                                </div>
                            </InfoWindow>
                        ) : null}
                    </Marker>
                ))}

            </GoogleMap>
            <BodyMap/>
        </div>
    );
}

export default Map;


