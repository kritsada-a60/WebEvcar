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

type MyDataPost = {
    ut_id: string;
    ctm_name: string;
    ut_name: string;
    u_id: number;
};

type MyDataEdit = {
    ut_id: string;
    ctm_name: string;
    ut_name: string;
    u_id: number;
};

type MyData = {
    ctm_name: number;
    ctmt_id: string;
    ctm_cno: number;
    ctm_bank: string;
    ctm_bank_no: string;
    ctm_contact_name: string;
    ctm_address: string;
    ctm_tumbon: string;
    ctm_amphur: string;
    ctm_province: string;
    ctm_zipcode: string;
    ctm_tel: string;
    ctm_mobile: string;
    ctm_mail: string;
    ctm_mqtt_code: string;
    u_id: number;
};

type MyDorpDownData = {
    ctmt_id: any;
    ctmt_name: string;
};

export interface ISAddCustomerPageProps {}

const baseURL = 'https://evcarkmitl.com:5000/usertype/list';

const baseURLEdit = 'https://evcarkmitl.com:5000/usertype/add';

const baseURLUpdateData = 'https://evcarkmitl.com:5000/customer/one';

const baseURLUpdateEdit = 'https://evcarkmitl.com:5000/customer/edit';

const AddCustomerPage: React.FunctionComponent<ISAddCustomerPageProps> = (props) => {
    const [post, setpost] = useState<MyDataPost[]>([]);

    const [MyIdEdit, setMyIdEdit] = useState('');

    const [FirstData, setFirstData] = useState<MyData[]>([]);

    const LS = localStorage;
    const idEdit = LS.getItem('IdCustomerEdit');

    const RemoceIdEdit = () => {
        LS.removeItem('IdCustomerEdit');
        navigateadddata();
    };

    const navigate = useNavigate();

    const navigateadddata = () => {
        navigate('/customer');
    };

    const baseURLUpdateAddDorpDown = 'https://evcarkmitl.com:5000/customertype/list';

    const [Bname, setBname] = useState('');

    const [Bnumber, setBnumber] = useState({
        ut_name: '',
        u_id: '',
        ctm_name: '',
        ctmt_name: ''
    });

    const [age, setAge] = React.useState('');

    const [DorpDownData, setDorpDownData] = useState<MyDorpDownData[]>([]);

    const [Input1, setInput1] = useState('');
    const [Input2, setInput2] = useState('');
    const [Input3, setInput3] = useState('');
    const [Input4, setInput4] = useState('');
    const [Input5, setInput5] = useState('');
    const [Input6, setInput6] = useState('');
    const [Input7, setInput7] = useState('');
    const [Input8, setInput8] = useState('');
    const [Input9, setInput9] = useState('');
    const [Input10, setInput10] = useState('');
    const [Input11, setInput11] = useState('');
    const [Input12, setInput12] = useState('');
    const [Input13, setInput13] = useState('');
    const [Input14, setInput14] = useState('');
    const [Input15, setInput15] = useState('');
    const [Input16, setInput16] = useState('');

    const [testdorpdown, settestdorpdown] = useState([
        { number: '1', text: 'a' },
        { number: '2', text: 'b' },
        { number: '3', text: 'c' },
        { number: '4', text: 'd' }
    ]);

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

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
                ctm_id: Number(idEdit),
                ctm_name: Input1,
                ctmt_id: Input2,
                ctm_cno: Input3,
                ctm_bank: Input4,
                ctm_bank_no: Input5,
                ctm_contact_name: Input6,
                ctm_address: Input7,
                ctm_tumbon: Input8,
                ctm_amphur: Input10,
                ctm_province: Input11,
                ctm_zipcode: Input12,
                ctm_tel: Input13,
                ctm_mobile: Input14,
                ctm_mail: Input15,
                ctm_mqtt_code: Input16,
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
                // navigateadddata();
                // setBnumber(res.data.success)
            })
            .catch((err) => console.error(err));
    };

    async function AlertMassage() {
        await alert('ข้อมูลถูกต้อง');
        await navigateadddata();
    }

    /* axios Editdata */

    useEffect(() => {
        const MydataToPostIdEdit = LS.getItem('IdCustomerEdit');
        // console.log(MydataToPostIdEdit,"postdataedit")
        axios
            .post(baseURLUpdateData, {
                ctm_id: Number(MydataToPostIdEdit)
                // ctm_id: 7
            })
            .then((response) => {
                // console.log(response.data)
                setFirstData(response.data.data[0]);
                // setBname(response.data.data[0].ctm_name)
                setInput1(response.data.data[0].ctm_name);
                setInput2(response.data.data[0].ctmt_id);
                setInput3(response.data.data[0].ctm_cno);
                setInput4(response.data.data[0].ctm_bank);
                setInput5(response.data.data[0].ctm_bank_no);
                setInput6(response.data.data[0].ctm_contact_name);
                setInput7(response.data.data[0].ctm_address);
                setInput8(response.data.data[0].ctm_tumbon);
                // setInput9(response.data.data[0])
                setInput10(response.data.data[0].ctm_amphur);
                setInput11(response.data.data[0].ctm_province);
                setInput12(response.data.data[0].ctm_zipcode);
                setInput13(response.data.data[0].ctm_tel);
                setInput14(response.data.data[0].ctm_mobile);
                setInput15(response.data.data[0].ctm_mail);
                setInput16(response.data.data[0].ctm_mqtt_code);

                // setpost(response.data.data)
                console.log(response.data.data[0]);
            })
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        axios
            .get(baseURLUpdateAddDorpDown)
            .then((response) => {
                setDorpDownData(response.data.data);

                // const result = FirstData.filter((member) => {
                //   return member.ctmt_id = 2
                // })
            })
            .catch((err) => console.error(err));
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
            <p style={{ margin: '5vh 30vw', justifyContent: 'center', fontSize: '36px' }}>แก้ไขมูลลูกค้า</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <form>
                    <div style={{ margin: '2.5vh 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <label>
                            <p style={{ margin: '0vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>ชื่อลูกค้า</p>
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
                        <label>
                            <p style={{ margin: '0vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>ประเภทลูกค้า</p>
                            <Select
                                type="ประเภทลูกค้า"
                                name=""
                                style={{ margin: '1vh 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                value={Input2}
                                onChange={(e) => {
                                    setInput2(e.target.value);
                                }}
                                // label="Age"
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="">
                                    <em></em>
                                </MenuItem>
                                {DorpDownData?.length &&
                                    DorpDownData.map((e: any, i: number) => {
                                        return (
                                            <MenuItem
                                                key={e.ctmt_id}
                                                value={e.ctmt_id}
                                                // onChange={e =>{
                                                //     console.log(e,"E")
                                                //     setNumberDorpDown(e.sv_id)
                                                // }}
                                            >
                                                {e.ctmt_name}
                                            </MenuItem>
                                        );
                                    })}
                            </Select>
                            {/* {NumberDorpDown}          */}
                        </label>
                    </div>
                    <div style={{ margin: '2.5vh 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <label>
                            <p style={{ margin: '0vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>ทะเบียนการค้า</p>
                            <TextField
                                type=""
                                name=""
                                style={{ margin: '1vh 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                // value={Bnumber}
                                value={Input3}
                                onChange={(e) => {
                                    setInput3(e.target.value);
                                }}
                            />
                        </label>
                        <label>
                            <p style={{ margin: '0vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>ชื่อธนาคาร</p>
                            <TextField
                                type=""
                                name=""
                                style={{ margin: '1vh 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                // value={Bnumber}
                                value={Input4}
                                onChange={(e) => {
                                    setInput4(e.target.value);
                                }}
                            />
                        </label>
                    </div>
                    <div style={{ margin: '2.5vh 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <label>
                            <p style={{ margin: '0vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>บัญชีธนาคาร</p>
                            <TextField
                                type=""
                                name=""
                                style={{ margin: '1vh 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                // value={Bnumber}
                                value={Input5}
                                onChange={(e) => {
                                    setInput5(e.target.value);
                                }}
                            />
                        </label>
                        <label>
                            <p style={{ margin: '0vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>ชื่อผู้ติดต่อ</p>
                            <TextField
                                type=""
                                name=""
                                style={{ margin: '1vh 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                // value={Bnumber}
                                value={Input6}
                                onChange={(e) => {
                                    setInput6(e.target.value);
                                }}
                            />
                        </label>
                    </div>
                    <div style={{ margin: '2.5vh 0', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <label>
                            <p style={{ margin: '0vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>ที่อยู่</p>
                            <TextField
                                type=""
                                name=""
                                style={{ margin: '1vh 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                // value={Bnumber}
                                value={Input7}
                                onChange={(e) => {
                                    setInput7(e.target.value);
                                }}
                            />
                        </label>
                        <label>
                            <p style={{ margin: '0vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>ตำบล</p>
                            <TextField
                                type=""
                                name=""
                                style={{ margin: '1vh 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                // value={Bnumber}
                                value={Input8}
                                onChange={(e) => {
                                    setInput8(e.target.value);
                                }}
                            />
                        </label>
                    </div>
                    <div style={{ margin: '2.5vh 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <label>
                            <p style={{ margin: '0vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>อำเภอ</p>
                            <TextField
                                type="ut_name"
                                name="ut_name"
                                style={{ margin: '1vh 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                // value={Bnumber}
                                value={Input10}
                                onChange={(e) => {
                                    setInput10(e.target.value);
                                }}
                            />
                        </label>
                        <label>
                            <p style={{ margin: '0vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>จังหวัด</p>
                            <TextField
                                type="ut_name"
                                name="ut_name"
                                style={{ margin: '1vh 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                // value={Bnumber}
                                value={Input11}
                                onChange={(e) => {
                                    setInput11(e.target.value);
                                }}
                            />
                        </label>
                    </div>
                    <div style={{ margin: '2.5vh 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <label>
                            <p style={{ margin: '0vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>รหัสไปรษณีย์</p>
                            <TextField
                                type="ut_name"
                                name="ut_name"
                                style={{ margin: '1vh 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                // value={Bnumber}
                                value={Input12}
                                onChange={(e) => {
                                    setInput12(e.target.value);
                                }}
                            />
                        </label>
                        <label>
                            <p style={{ margin: '0vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>โทรศัพท์</p>
                            <TextField
                                type="ut_name"
                                name="ut_name"
                                style={{ margin: '1vh 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                // value={Bnumber}
                                value={Input13}
                                onChange={(e) => {
                                    setInput13(e.target.value);
                                }}
                            />
                        </label>
                    </div>
                    <div style={{ margin: '2.5vh 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <label>
                            <p style={{ margin: '0vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>มือถือ</p>
                            <TextField
                                type="ut_name"
                                name="ut_name"
                                style={{ margin: '1vh 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                // value={Bnumber}
                                value={Input14}
                                onChange={(e) => {
                                    setInput14(e.target.value);
                                }}
                            />
                        </label>
                        <label>
                            <p style={{ margin: '0vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>Emial</p>
                            <TextField
                                type="ut_name"
                                name="ut_name"
                                style={{ margin: '1vh 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                // value={Bnumber}
                                value={Input15}
                                onChange={(e) => {
                                    setInput15(e.target.value);
                                }}
                            />
                        </label>
                    </div>
                    <div style={{ margin: '2.5vh 0', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <label>
                            <p style={{ margin: '0vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>รหัส MQTT</p>
                            <TextField
                                type="ut_name"
                                name="ut_name"
                                style={{ margin: '1vh 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                // value={Bnumber}
                                value={Input16}
                                onChange={(e) => {
                                    setInput16(e.target.value);
                                }}
                            />
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

export default AddCustomerPage;
