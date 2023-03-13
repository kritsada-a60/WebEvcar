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

const baseURL = 'http://3.210.67.101:5000/user/list';

const baseURLUpdateAdd = 'http://3.210.67.101:5000/credit/deposit';

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
        if (CTMID != '1'){
        axios.post(baseURL, {
            ctm_id : ""
        }).then((response) => {
            setDorpDownData(response.data.data);
            console.log(response.data.data);
            // setcount(response.data.data.length)
        });
        }else{
        axios.post(baseURL, {
            ctm_id : ""
        }).then((response) => {
            setDorpDownData(response.data.data);
            console.log(response.data.data);
            // setcount(response.data.data.length)
        });
        }

    }, []);

    const handleSubmit = (e: any) => {
        console.log(CTMID, 'CTM');
        console.log(UID, 'UID');
        console.log(Input1, 'Input1');
        console.log(Input2, 'Input2');
        e.preventDefault();
        axios
            .post(baseURLUpdateAdd, {
                ctm_id: Number(CTMID),
                u_id: Number(Input1),
                uid: Number(UID),
                ut_balance: Number(Input2)
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
        navigate('/credit');
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
                            {/* <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                  value={Input1}
                  onChange={(e) => {setInput1(e.target.value)}}
                  /> */}
                            <Select
                                type="ชื่อ"
                                name=""
                                style={{ margin: '1vh 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                value={Input1}
                                onChange={(e) => {
                                    setInput1(e.target.value);
                                }}
                                // label="Age"
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {DorpDownData?.length &&
                                    DorpDownData.map((e: any, i: number) => {
                                        return (
                                            <MenuItem
                                                key={i}
                                                value={e.u_id}
                                                // onChange={e =>{
                                                //     console.log(e,"E")
                                                //     setNumberDorpDown(e.sv_id)
                                                // }}
                                            >
                                                {e.u_fullname}
                                            </MenuItem>
                                        );
                                    })}
                            </Select>
                        </label>
                    </div>
                    <div style={{ margin: '2.5vh 0', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <label>
                            <p style={{ margin: '1vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>จำนวนกิโลวัตต์</p>
                            <TextField
                                type="number"
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
