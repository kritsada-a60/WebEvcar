import React, { useEffect, useState } from 'react';
import Map from '../../../../img/map.png';

import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Typography, TextField } from '@mui/material';
import Header from '../../Header';
import Body from './Body';
import axios, { Axios } from 'axios';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useParams, useNavigate } from 'react-router-dom';

type AddCarReserve = {
    ctm_id: number;
    s_name: string;
    s_mqtt_code: string;
    s_address: string;
    s_tumbon: string;
    s_amphur: string;
    s_province: string;
    s_zipcode: string;
    s_lat: string;
    s_lng: string;
    s_contact: string;
    s_tel: string;
    s_active: string;
    s_id: number;
    u_id: number;
};

export interface ISAddCarReservePageProps {}

const baseURL = 'https://evcarkmitl.com:5000/station/list';

const baseURLUpdateAdd = 'https://evcarkmitl.com:5000/station/add';

const AddCarReservePage: React.FunctionComponent<ISAddCarReservePageProps> = (props) => {
    const [post, setpost] = useState<AddCarReserve[]>([]);

    const [Input1, setInput1] = useState('');
    const [Input2, setInput2] = useState('');

    const LS = localStorage;

    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios
            .post(baseURLUpdateAdd, {
                ctm_id: 5,
                s_name: Input1,
                s_active: '1',
                u_id: 1
            })
            .then((res) => {
                console.log(res.data);
                console.log('ok');
                if (res.data.success == true) {
                    AlertMassage();
                } else {
                    alert('ข้อมูลไม่ถูกต้อง');
                }
                // setBnumber(res.data.success)
            })
            .catch((err) => console.error(err));
    };

    async function AlertMassage() {
        await alert('ข้อมูลถูกต้อง');
        await navigateadddata();
    }

    useEffect(() => {
        console.log(Input1, 'input');
    }, [Input1]);

    const navigate = useNavigate();

    const navigateadddata = () => {
        navigate('/station');
    };

    return (
        <div style={{ backgroundColor: '#E0F0EC' }}>
            <Header />
            <p style={{ margin: '5vh 30vw', justifyContent: 'center', fontSize: '36px' }}>เติมกิโลวัตต์</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <form>
                    <div style={{ margin: '2.5vh 0', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <label>
                            <p style={{ margin: '1vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>ชื่อ</p>
                            <TextField
                                type="ut_name"
                                name="ut_name"
                                style={{ margin: '1vh 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                value={Input1}
                                onChange={(e) => {
                                    setInput1(e.target.value);
                                }}
                            />
                        </label>
                    </div>
                    <div style={{ margin: '2.5vh 0', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <label>
                            <p style={{ margin: '1vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>จำนวนกิโลวัตต์</p>
                            <TextField
                                type="ut_name"
                                name="ut_name"
                                style={{ margin: '1vh 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                value={Input2}
                                onChange={(e) => {
                                    setInput2(e.target.value);
                                }}
                            />
                        </label>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button style={{ color: 'white', backgroundColor: '#6CDCC0', margin: '2.5vh 2.5vw' }} onClick={handleSubmit} type="submit">
                            บันทึก
                        </Button>
                        <Button style={{ color: 'white', backgroundColor: '#FF5A5A', margin: '2.5vh 2.5vw' }} onClick={navigateadddata}>
                            ยกเลิก
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCarReservePage;
