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
import { useParams, useNavigate } from 'react-router-dom';

type MyDataPost = {
    ut_id: string;
    ut_name: string;
    u_id: number;
};

export interface ISAddstationPageProps {}

const baseURL = 'http://3.210.67.101:5000/usertype/list';

const baseURLEdit = 'http://3.210.67.101:5000/usertype/add';

const baseURLUpdateData = 'http://3.210.67.101:5000/usertype/one';

const baseURLUpdateEdit = 'http://3.210.67.101:5000/usertype/edit';

const AddstationPage: React.FunctionComponent<ISAddstationPageProps> = (props) => {
    const [post, setpost] = useState<MyDataPost[]>([]);

    const [MyIdEdit, setMyIdEdit] = useState('');

    const [FirstData, setFirstData] = useState<MyDataPost[]>([]);

    const LS = localStorage;
    const idEdit = LS.getItem('idEdit');

    const RemoceIdEdit = () => {
        LS.removeItem('idEdit');
        navigateadddata();
    };

    const navigate = useNavigate();

    const navigateadddata = () => {
        navigate('/stationinformation');
    };

    const [Bname, setBname] = useState('');

    const [Bnumber, setBnumber] = useState({
        ut_name: '',
        u_id: ''
    });

    // useEffect(() =>{
    //   axios.get(baseURL).then((response) => {
    //     setpost(response.data.data)
    //     // console.log(response.data.data[0])
    //   })
    // }, []);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(Bnumber);
        axios
            .post(baseURLUpdateEdit, {
                ut_name: Bnumber.ut_name,
                ut_id: idEdit
            })
            .then((res) => {
                console.log(res.data);
                console.log('ok');
                // setBnumber(res.data.success)
            })
            .catch((err) => console.error(err));
    };

    /* axios Editdata */

    useEffect(() => {
        axios
            .post(baseURLUpdateData, {
                ut_id: LS.getItem('idEdit')
            })
            .then((response) => {
                console.log(response.data);
                setFirstData(response.data.data[0].ut_name);
                // setBname(response.data.data[0].ut_name)
                // setpost(response.data.data)
                // console.log(response.data.data[0])
            });
    }, []);

    /* axios Editdata */

    useEffect(() => {
        console.log('this data', post);
    }, [post]);

    useEffect(() => {
        console.log(Bnumber);
    }, [Bnumber]);

    useEffect(() => {
        console.log('this MyIdEdit', MyIdEdit);
        console.log('this Ls.get', idEdit);
    }, [MyIdEdit]);

    useEffect(() => {
        console.log('this data', post);
    }, []);

    useEffect(() => {
        console.log('this FirstData', FirstData);
    }, [FirstData]);

    useEffect(() => {
        console.log('this Bname', Bname);
    }, [Bname]);

    return (
        <div style={{ backgroundColor: '#E0F0EC' }}>
            <Header />
            <p style={{ margin: '5vh 30vw', justifyContent: 'center', fontSize: '36px' }}>เพิ่มสถานี</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <form>
                    <div style={{ margin: '2.5vh 0' }}>
                        <label>
                            <TextField
                                type="ut_name"
                                name="ut_name"
                                style={{ margin: '0 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                placeholder="เลขที่กิจการ"
                                // value={Bnumber}
                                value={Bnumber}
                                onChange={(e) => setBnumber({ ...Bnumber, ut_name: e.target.value })}
                                defaultValue={FirstData}
                            />
                        </label>
                        <label>
                            <TextField type="" name="" style={{ margin: '0 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }} placeholder="ประเภทกิจการ" />
                        </label>
                    </div>
                    <div style={{ margin: '2.5vh 0' }}>
                        <label>
                            <TextField type="" name="" style={{ margin: '0 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }} placeholder="ชื่อ-นามสกุล" />
                        </label>
                        <label>
                            <TextField type="" name="" style={{ margin: '0 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }} placeholder="เบอร์ติดต่อ" />
                        </label>
                    </div>
                    <div style={{ margin: '2.5vh 0' }}>
                        <label>
                            <TextField type="" name="" style={{ margin: '0 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }} placeholder="อีเมล" />
                        </label>
                    </div>

                    <div style={{ margin: '2.5vh 0' }}>
                        <label>
                            <TextField type="" name="" style={{ margin: '0 5vw', backgroundColor: 'white', borderColor: 'black', width: '40vw' }} placeholder="ที่อยู่" />
                        </label>
                    </div>

                    <div style={{ margin: '2.5vh 0' }}>
                        <label>
                            <TextField type="" name="" style={{ margin: '0 5vw', backgroundColor: 'white', borderColor: 'black', width: '10vw' }} placeholder="รหัสไปรษณีย์" />
                        </label>
                        <label>
                            <TextField type="" name="" style={{ margin: '0 5vw', backgroundColor: 'white', borderColor: 'black', width: '10vw' }} placeholder="จังหวัด" />
                        </label>
                    </div>
                    <div style={{ margin: '2.5vh 0' }}>
                        <label>
                            <TextField type="" name="" style={{ margin: '0 5vw', backgroundColor: 'white', borderColor: 'black', width: '10vw' }} placeholder="ธนาคาร" />
                        </label>
                        <label>
                            <TextField type="" name="" style={{ margin: '0 5vw', backgroundColor: 'white', borderColor: 'black', width: '10vw' }} placeholder="เลขบัญชี" />
                        </label>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button style={{ color: 'white', backgroundColor: '#6CDCC0', margin: '2.5vh 2.5vw' }} onClick={handleSubmit} type="submit">
                            บันทึก
                        </Button>
                        <Button style={{ color: 'white', backgroundColor: '#FF5A5A', margin: '2.5vh 2.5vw' }} onClick={RemoceIdEdit}>
                            ยกเลิก
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddstationPage;
