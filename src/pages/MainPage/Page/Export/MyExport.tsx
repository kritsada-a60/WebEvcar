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

type AddCredit = {
    cb: number;
    cd: string;
    ctm_id: number;
    ctm_name: string;
    mb: string;
    md: string;
    pc_name: string;
    pt_name: string;
    remark: string;
    retire: number;
    s_id: number;
    s_name: string;
    sv_id: number;
    sv_name: string;
    u_fullname: string;
    u_id: string;
    ut_balance: number;
    ut_id: number;
    ut_type: string;
};

type MyDorpDownData = {
    pc_description: any;
    pc_id: number;
    pc_name: string;
};

export interface ISAddCreditPageProps {}

const baseURL = 'https://evcarkmitl.com:5000/user/list';

const baseURLUpdateAdd = 'https://evcarkmitl.com:5000/credit/deposit';

const AddCreditPage: React.FunctionComponent<ISAddCreditPageProps> = (props) => {
    const [post, setpost] = useState<AddCredit[]>([]);

    const [Input1, setInput1] = useState('');
    const [Input2, setInput2] = useState('');

    const [DorpDownData, setDorpDownData] = useState<AddCredit[]>([]);

    const LS = localStorage;

    const CTMID = LS.getItem('USERCTM');
    const UID = LS.getItem('LVUSERID');
    const CID = LS.getItem('IdCarEditHistory');

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setDorpDownData(response.data.data);
            console.log(response.data.data);
            // setcount(response.data.data.length)
        });
    }, []);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios
            .post(baseURLUpdateAdd, {
                ctm_id: CTMID,
                u_id: Input1,
                uid: UID,
                ut_balance: Input2
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
        navigate('/export');
    };

    return (
        <div style={{ backgroundColor: '#E0F0EC' }}>
            <Header />
            <p style={{ margin: '5vh 30vw', justifyContent: 'center', fontSize: '36px' }}>การExport</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <form>
                    <div style={{ margin: '2.5vh 0', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <label>
                            <p style={{ margin: '1vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>Test1</p>
                            <TextField
                                type=""
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
                            <p style={{ margin: '1vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>Test2</p>
                            <TextField
                                type=""
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
                            ตกลง
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

export default AddCreditPage;
