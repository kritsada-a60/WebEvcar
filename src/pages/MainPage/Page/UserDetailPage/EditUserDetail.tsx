import React, { useEffect, useState } from 'react';
import Map from '../../../../img/map.png';

import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Typography, TextField, Checkbox } from '@mui/material';
import Header from '../../Header';
import Body from './Body';
import axios, { Axios } from 'axios';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useParams, useNavigate } from 'react-router-dom';
import { userInfo } from 'os';

type MyDataPost = {
    ut_id: string;
    ut_name: string;
    u_id: number;
};

type MyDataPost2 = {
    u_email: string;
    u_fullname: string;
    u_id: any;
    u_mobile: string;
    u_name: string;
    ua_name: string;
    ul_name: string;
    ut_name: string;
};

type MyDorpDownData = {
    ctmt_id: any;
    ctmt_name: string;
};

type MyDorpDownData2 = {
    ctm_address: string;
    ctm_amphur: string;
    ctm_bank: string;
    ctm_bank_no: string;
    ctm_cno: string;
    ctm_contact_name: string;
    ctm_id: string;
    ctm_mail: string;
    ctm_mobile: string;
    ctm_mqtt_code: any;
    ctm_name: string;
    ctm_province: string;
    ctm_tel: string;
    ctm_tumbon: string;
    ctm_zipcode: string;
    ctmt_id: number;
    ctmt_name: string;
};

type MyDorpDownData3 = {
    ul_id: any;
    ul_name: string;
};

type MyDorpDownData4 = {
    ut_id: any;
    ut_name: string;
};

type MyEditData = {
    u_id: string;
    ctm_id: number;
    ctmt_id: number;
    u_email: string;
    u_fullname: string;
    u_mobile: string;
    u_name: string;
    ua_id: number;
    ul_id: number;
    ut_id: number;
    uid: number;
};

export interface ISEditUserDetailPageProps {}

const baseURL = 'https://evcarkmitl.com:5000/usertype/list';

const baseURLEdit = 'https://evcarkmitl.com:5000/usertype/add';

const baseURLUpdateData = 'https://evcarkmitl.com:5000/user/info';

const baseURLUpdateEdit = 'https://evcarkmitl.com:5000/usertype/edit';

const baseURLUpdateMyEdit = 'https://evcarkmitl.com:5000/user/edit';

const baseURLUpdateAddDorpDown = 'https://evcarkmitl.com:5000/customertype/list';

const baseURLUpdateAddDorpDown2 = 'https://evcarkmitl.com:5000/customer/list';

const baseURLUpdateAddDorpDown3 = 'https://evcarkmitl.com:5000/userlevel/list';

const baseURLUpdateAddDorpDown4 = 'https://evcarkmitl.com:5000/usertype/list';

const EditUserDetailPage: React.FunctionComponent<ISEditUserDetailPageProps> = (props) => {
    const [post, setpost] = useState<MyDataPost[]>([]);

    const [MyIdEdit, setMyIdEdit] = useState('');

    const [FirstData, setFirstData] = useState<MyDataPost[]>([]);

    const [DorpDownData, setDorpDownData] = useState<MyDorpDownData[]>([]);
    const [DorpDownDatafillter, setDorpDownDatafillter] = useState<MyDorpDownData[]>([]);

    const [DorpDownData2, setDorpDownData2] = useState<MyDorpDownData2[]>([]);

    const [DorpDownData3, setDorpDownData3] = useState<MyDorpDownData3[]>([]);
    const [DropDownLvUserfillter, setDropDownLvUserfillter] = useState<MyDorpDownData3[]>([]);

    const [DorpDownData4, setDorpDownData4] = useState<MyDorpDownData4[]>([]);

    const [UserInfo, setUserInfo] = useState<MyEditData>();

    const LS = localStorage;
    const idEdit = LS.getItem('idEdit');

    const CTMID = LS.getItem('USERCTM');
    const UID = LS.getItem('LVUSERID');
    const CID = LS.getItem('IdCarEditHistory');
    const CTMT = LS.getItem('LVUSER');
    
    const RemoceIdEdit = () => {
        LS.removeItem('idEdit');
        navigateadddata();
    };

    const navigate = useNavigate();

    const navigateadddata = () => {
        navigate('/userdetail');
    };

    const [Bname, setBname] = useState('');
    const [Bemail, setBemail] = useState('');
    const [Bfullname, setBfullname] = useState('');
    const [Bid, setBid] = useState('');
    const [Bmoblie, setBmoblie] = useState('');
    const [Ba_name, setBa_name] = useState('');
    const [Bl_name, setBl_name] = useState('');
    const [Bt_name, setBt_name] = useState('');

    const [Bname2, setBname2] = useState([]);

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

    // const myObj = JSON.parse(Bname2);

    const [Bnumber, setBnumber] = useState({
        ut_name: '',
        u_id: ''
    });

    const [age, setAge] = React.useState('');

    const [testdorpdown, settestdorpdown] = useState([
        { number: '1', text: 'a' },
        { number: '2', text: 'b' },
        { number: '3', text: 'c' },
        { number: '4', text: 'd' }
    ]);

    const [Activedorpdown, setActivedorpdown] = useState([
        { number: '1', text: 'Active' },
        { number: '0', text: 'InActive' }
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
        const UserU_ID = LS.getItem('LVUSER');
        const UserTable_ID = LS.getItem('idEdit');
        axios
            .post(baseURLUpdateMyEdit, {
                // ctmt_id: Input1,
                u_id: Number(UserU_ID),
                ctm_id: Input2,
                u_email: Input8,
                u_fullname: Input4,
                u_mobile: Input7,
                u_name: Input3,
                u_pass: Input5,
                ua_id: Number(Input11), // 0 false 1 ture
                ul_id: Input10,
                ut_id: Input9,
                uid: UserTable_ID
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

    /* axios Editdata */

    useEffect(() => {
        const UserU_ID = LS.getItem('LVUSER');

        axios
            .post(baseURLUpdateData, {
                u_id: LS.getItem('idEdit')
            })
            .then((response) => {
                console.log(response.data, 'use data');
                // setFirstData(response.data.data[0].ut_name)
                // setBname(response.data.data[0].u_name)
                // setBemail(response.data.data[0].u_email)
                // setBfullname(response.data.data[0].u_fullname)
                // setBid(response.data.data[0].u_id)
                // setBmoblie(response.data.data[0].u_mobile)
                // setBa_name(response.data.data[0].ua_name)
                // setBl_name(response.data.data[0].ul_name)
                // setBt_name(response.data.data[0].ut_name)

                // setInput1(response.data.data[0]?.ctmt_id)
                // setInput2(response.data.data[0].ctm_id)
                setInput3(response.data.data[0].u_name);
                setInput4(response.data.data[0].u_fullname);
                setInput5(response.data.data[0].u_pass);
                // setInput6(response.data.data[0].ul_name)
                setInput7(response.data.data[0].u_mobile);
                setInput8(response.data.data[0].u_email);
                setInput9(response.data.data[0].ut_id);
                setInput10(response.data.data[0].ul_id);
                setInput11(response.data.data[0].ua_id);

                console.log(response.data.data[0].ul_name);

                console.log(response.data.data[0]);
                setUserInfo(response.data.data[0]);
                // setBname2(response.data.data)
                // setpost(response.data.data)
                // console.log(response.data.data[0])
            });

        axios
            .get(baseURLUpdateAddDorpDown)
            .then((response) => {
                console.log(response.data.data);
                setDorpDownData(response.data.data);
            })
            .catch((err) => console.error(err));

        // axios.post(baseURLUpdateAddDorpDown2,{
        //   ctmt_id : Input1,
        // }).then((response) => {
        //   console.log(response.data.data)
        //   setDorpDownData2(response.data.data)
        // })
        // .catch((err) => console.error(err));

        axios
            .get(baseURLUpdateAddDorpDown3)
            .then((response) => {
                console.log(response.data.data);
                setDorpDownData3(response.data.data);
            })
            .catch((err) => console.error(err));

        axios
            .get(baseURLUpdateAddDorpDown4)
            .then((response) => {
                if(CTMID !="1"){
                const result = response.data.data.filter((member:any) => {
                    return member.ut_id >= "3"
                })
                console.log(result,"result")
                setDorpDownData4(result);
                }else{
                setDorpDownData4(response.data.data);
                }
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
        console.log('this Input1', Input1);
        if (Input1 > '1' && CTMID != "1") {
            axios
                .post(baseURLUpdateAddDorpDown2, {
                    ctmt_id: Input1
                })
                .then((response) => {
                    console.log(response.data.data);
                    // const resultDorpDownData = response.data.data?.filter((name: any) => {
                    //     return name.ctm_id == CTMID;
                    // });
                    // console.log(resultDorpDownData);
                    // setDorpDownData2(resultDorpDownData);
                    setDorpDownData2(response.data.data);
                    if (UserInfo != undefined) setInput2(UserInfo.ctm_id.toString());
                })
                .catch((err) => console.error(err));
        } else {
            axios
                .post(baseURLUpdateAddDorpDown2, {
                    ctmt_id: Input1
                })
                .then((response) => {
                    console.log(response.data.data)
                    setDorpDownData2(response.data.data)
                    // const FillDropDown = response.data.data
                    // const resultDorpDownData = response.data.data?.filter((name: any) => {
                    //     return name.ctm_name == 'System';
                    // });
                    // setDorpDownData2(resultDorpDownData);
                    // if (UserInfo != undefined) setInput2(UserInfo.ctm_id.toString());
                    // console.log(resultDorpDownData);
                })
                .catch((err) => console.error(err));
        }
    }, [Input1]);

    useEffect(() => {
        console.log('this Input9', Input9);
        const result = DorpDownData.filter((DorpDownDataS: any) => {
            if (CTMT == "2") {
                return DorpDownDataS.ctmt_id == 2;
            } else if (CTMT == "3") {
                return DorpDownDataS.ctmt_id == 3;
            } else {
                return DorpDownDataS.ctmt_id > 1;
            }
        });
        const result2 = DorpDownData3.filter((DorpDownDataS: any) => {
            if (Input9 == '1') {
                return DorpDownDataS.ul_id == 1;
            } else if (Input9 == '2') {
                return DorpDownDataS.ul_id == 2;
            } else {
                return DorpDownDataS;
            }
        });
        console.log('this result', result);
        setDorpDownDatafillter(result);
        setDropDownLvUserfillter(result2);
        console.log('Effect Input9');
        console.log(UserInfo);
        if (UserInfo != undefined) setInput1(UserInfo.ctmt_id.toString());
        if (UserInfo != undefined) setInput10(UserInfo.ul_id.toString());
    }, [Input9]);

    useEffect(() => {
        console.log('Set UserInfo');
        console.log(UserInfo);
        console.log(UserInfo?.ctmt_id);
        if (UserInfo != undefined) setInput9(UserInfo.ut_id.toString());
    }, [UserInfo]);

    return (
        <div style={{ backgroundColor: '#E0F0EC' }}>
            <Header />
            <p style={{ margin: '5vh 30vw', justifyContent: 'center', fontSize: '36px' }}>แก้ไขข้อมูลผู้ใช้งาน</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <form>
                    <div style={{ margin: '2.5vh 0', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <label>
                            <p style={{ margin: '1vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>ประเภทผู้ใช้</p>
                            <Select
                                type="ระดับสิทธิ"
                                name=""
                                style={{ margin: '1vh 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                value={Input9}
                                onChange={(e) => {
                                    setInput9(e.target.value);
                                }}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {DorpDownData4?.length &&
                                    DorpDownData4.map((e: any, i: number) => {
                                        return (
                                            <MenuItem key={e.ut_id} value={e.ut_id}>
                                                {e.ut_name}
                                            </MenuItem>
                                        );
                                    })}
                            </Select>
                        </label>
                    </div>
                    <div style={{ margin: '2.5vh 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <label>
                            <p style={{ margin: '1vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>ประเภทกิจการ</p>
                            <Select
                                type="ประเภทกิจการ"
                                name=""
                                style={{ margin: '1vh 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                value={Input1}
                                onChange={(e) => {
                                    setInput1(e.target.value);
                                }}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {DorpDownDatafillter?.length &&
                                    DorpDownDatafillter.map((e: any, i: number) => {
                                        return (
                                            <MenuItem key={e.ctmt_id} value={e.ctmt_id}>
                                                {e.ctmt_name}
                                            </MenuItem>
                                        );
                                    })}
                            </Select>
                        </label>
                        <label>
                            <p style={{ margin: '1vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>ชื่อกิจการ</p>
                            <Select
                                type="ชื่อกิจการ"
                                name=""
                                style={{ margin: '1vh 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                value={Input2}
                                onChange={(e) => {
                                    setInput2(e.target.value);
                                }}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {DorpDownData2?.length &&
                                    DorpDownData2.map((e: any, i: number) => {
                                        return (
                                            <MenuItem key={e.ctm_id} value={e.ctm_id}>
                                                {e.ctm_name}
                                            </MenuItem>
                                        );
                                    })}
                            </Select>
                        </label>
                    </div>
                    <div style={{ margin: '2.5vh 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <label>
                            <p style={{ margin: '1vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>ชื่อผู้ใช้</p>
                            <TextField
                                type=""
                                name=""
                                style={{ margin: '0 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                value={Input3}
                                onChange={(e) => {
                                    setInput3(e.target.value);
                                }}
                            />
                        </label>
                        <label>
                            <p style={{ margin: '1vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>ชื่อ-นามสกุล</p>
                            <TextField
                                type=""
                                name=""
                                style={{ margin: '0 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                value={Input4}
                                onChange={(e) => {
                                    setInput4(e.target.value);
                                }}
                            />
                        </label>
                    </div>
                    <div style={{ margin: '2.5vh 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <label>
                            <p style={{ margin: '1vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>รหัสผ่าน</p>
                            <TextField
                                type=""
                                name=""
                                style={{ margin: '0 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                value={Input5}
                                onChange={(e) => {
                                    setInput5(e.target.value);
                                }}
                            />
                        </label>
                        <label>
                            <p style={{ margin: '1vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>ยืนยันรหัสผ่าน</p>
                            <TextField
                                type=""
                                name=""
                                style={{ margin: '0 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                value={Input6}
                                onChange={(e) => {
                                    setInput6(e.target.value);
                                }}
                            />
                        </label>
                    </div>

                    <div style={{ margin: '2.5vh 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <label>
                            <p style={{ margin: '1vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>เบอร์ติดต่อ</p>
                            <TextField
                                type=""
                                name=""
                                style={{ margin: '0 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                value={Input7}
                                onChange={(e) => {
                                    setInput7(e.target.value);
                                }}
                            />
                        </label>
                        <label>
                            <p style={{ margin: '1vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>อีเมล</p>
                            <TextField
                                type=""
                                name=""
                                style={{ margin: '0 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                value={Input8}
                                onChange={(e) => {
                                    setInput8(e.target.value);
                                }}
                            />
                        </label>
                    </div>
                    <div style={{ margin: '2.5vh 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <label>
                            <p style={{ margin: '1vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>ระดับสิทธิ</p>
                            <Select
                                type="ระดับสิทธิ"
                                name=""
                                style={{ margin: '1vh 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                value={Input10}
                                onChange={(e) => {
                                    setInput10(e.target.value);
                                }}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {DropDownLvUserfillter?.length &&
                                    DropDownLvUserfillter.map((e: any, i: number) => {
                                        return (
                                            <MenuItem key={e.ul_id} value={e.ul_id}>
                                                {e.ul_name}
                                            </MenuItem>
                                        );
                                    })}
                            </Select>
                        </label>
                        <label>
                            <p style={{ margin: '1vh 5vw', borderColor: 'black', width: '15vw', fontSize: '18px', fontWeight: 'bold' }}>การใช้งาน</p>
                            <Select
                                type="การใช้งาน"
                                name=""
                                style={{ margin: '1vh 5vw', backgroundColor: 'white', borderColor: 'black', width: '15vw' }}
                                value={Input11}
                                onChange={(e) => {
                                    setInput11(e.target.value);
                                }}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {Activedorpdown?.length &&
                                    Activedorpdown.map((e: any, i: number) => {
                                        return (
                                            <MenuItem key={e.number} value={e.number}>
                                                {e.text}
                                            </MenuItem>
                                        );
                                    })}
                            </Select>
                        </label>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button style={{ color: 'white', backgroundColor: '#6CDCC0', margin: '2.5vh 2.5vw' }} onClick={handleSubmit}>
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

export default EditUserDetailPage;
