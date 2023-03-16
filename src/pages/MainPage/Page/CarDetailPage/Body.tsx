import MUIDataTable from 'mui-datatables';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export interface IBodyPageProps {}

type MyDataPost = {
    c_id: string;
    ctm_name: string;
    c_license_plate: string;
};

type MyDeleteData = {
    ctm_name: string;
};

type MyData = {
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

const BodyPage: React.FunctionComponent<IBodyPageProps> = (props) => {
    const baseURL = 'https://evcarkmitl.com:5000/car/list';

    const baseURLUpdateDelete = 'https://evcarkmitl.com:5000/car/del';

    const navigate = useNavigate();

    const [post, setpost] = useState<MyData[]>([]);

    const [count, setcount] = useState('');

    const LS = localStorage;

    const CTMID = LS.getItem('USERCTM');
    const UID = LS.getItem('LVUSERID');
    const CID = LS.getItem('IdCarEditHistory');

    const [EditCarData, setEditCarData] = useState('');
    const [DeleteData, setDeleteData] = useState('');

    function SetLs_idEdit() {
        // console.log(EditCarData);
        LS.setItem('IdCarEdit', EditCarData);
        // navigateadddata();
    }

    function GetLs_idDelete() {
        // console.log(EditCarData);
        LS.setItem('IdCarDelete', DeleteData);
        // console.log(Number(DeleteData))
        // navigateadddata();
    }

    useEffect(() => {
        if (CTMID != '1') {
            axios
                .post(baseURL, {
                    ctm_id: CTMID
                })
                .then((response) => {
                    setpost(response.data.data);
                    // console.log(post,"post data")
                    console.log(response.data.data, 'start data');
                    // console.log(response.data.data.length)
                    setcount(response.data.data.length);
                    LS.setItem('CountDataCarpage', response.data.data.length);
                });
        } else {
            axios
                .post(baseURL, {
                    ctm_id: ''
                })
                .then((response) => {
                    setpost(response.data.data);
                    // console.log(post,"post data")
                    console.log(response.data.data, 'start data');
                    // console.log(response.data.data.length)
                    setcount(response.data.data.length);
                    LS.setItem('CountDataCarpage', response.data.data.length);
                });
        }
    }, []);

    useEffect(() => {
        console.log(post, 'this data');
    }, [post]);

    useEffect(() => {
        console.log('this count', count);
    }, [count]);

    /* Click And Go Next Page */

    useEffect(() => {
        console.log('EditCarData', EditCarData);
        SetLs_idEdit();
        if (EditCarData != '') {
            navigateeditdata();
        }
    }, [EditCarData]);

    useEffect(() => {
        console.log('EditData', DeleteData);
        GetLs_idDelete();
        if (DeleteData != '') {
            var answer = window.confirm('ต้องการจะลบข้อมูลหรือไม่');
            if (answer) {
                alert('ลบข้อมูลสำเร็จ');
                axios
                    .post(baseURLUpdateDelete, {
                        c_id: Number(DeleteData),
                        u_id: Number(UID)
                    })
                    .then((res) => {
                        console.log(res, 'this is delete');
                        window.location.reload();
                        // console.log("ok");
                    })
                    .catch((err) => console.error(err));
            } else {
                window.location.reload();
            }
        } else {
            // alert("ลบข้อมูลไม่สำเร็จ");
        }
    }, [DeleteData]);

    const navigateeditdata = () => {
        navigate('/editcardetail');
    };

    const navigateaddcar = () => {
        navigate('/addcardetail');
    };

    const CarDetailPagedata = [['กข 231', 'อู่ 1', 'ตุ๊กตุ๊ก', 'ลิเธียม', '22/ก.ย./64', '40 กม./ชม.', '20', '22/ก.ย./64', 'ดี']];

    const Testcolumns = [
        'ทะเบียนรถ',
        'อู่',
        'หัวชาร์จ',
        'ประเภทแบตเตอรี่',
        'ระดับแบตเตอรี่',
        'ความเร็วรถ',
        'เลขไมล์',
        'วันที่เริ่มใช้งาน',
        'MQTT CODE',
        {
            name: 'สถานะรถ',
            options: {
                sort: false,
                filter: false,
            }, 
        },
        {
            name: 'สถานะรถ',
            options: {
                filter: true,
                sort: false,
                display: false,
                customBodyRenderLite: (dataIndex: any, rowIndex: any) => {
                    return (
                        <div></div>
                    )
                }
            }
        },
        {
            name: '',
            options: {
                filter: false,
                sort: false,
                customBodyRenderLite: (dataIndex: any, rowIndex: any) => {
                    return (
                        <EditOutlinedIcon
                            onClick={() => {
                                setEditCarData(post[dataIndex].c_id);
                                SetLs_idEdit();
                            }}
                            style={{ cursor: 'pointer' }}
                        />
                    );
                }
            }
        },
        {
            name: '',
            options: {
                filter: false,
                sort: false,
                customBodyRenderLite: (dataIndex: any, rowIndex: any) => {
                    return (
                        <DeleteIcon
                            onClick={() => {
                                setDeleteData(post[dataIndex].c_id);
                                GetLs_idDelete();
                                // handleSubmit();
                            }}
                            style={{ cursor: 'pointer' }}
                        />
                    );
                }
            }
        }
    ];

    const options = {
        // caseSensitive: true,
        confirmFilters: false,
        sort: false,
        viewColumns: false,
        searchOpen: false,
        download: false,
        print: false,
        selectableRowsHeader: false,
        selectableRowsHideCheckboxes: true
    };

    const getMuiTheme = () =>
        createTheme({
            components: {
                MuiTableCell: {
                    styleOverrides: {
                        root: {
                            padding: '16px 1.5vw'
                        }
                    }
                }
            }
        });

    return (
        <div style={{ margin: '5vh 5vw' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '2vh 0vw' }}>
                <Button onClick={navigateaddcar} style={{ color: 'black', backgroundColor: '#6CDCC0', borderRadius: '50px', width: '9.740vw' }}>
                    เพิ่ม
                </Button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ width: '100%' }}>
                    <ThemeProvider theme={getMuiTheme()}>
                        <MUIDataTable
                            title={'ข้อมูลรถ'}
                            data={post.map((item) => {
                                return [
                                    item.c_license_plate,
                                    item.ctm_name,
                                    item.cgt_pt_name,
                                    item.bt_pt_name,
                                    <p>{item.c_capacity}%</p>,
                                    item.c_speed,
                                    item.c_mileage,
                                    item.c_gps_signal, // c_start_data
                                    item.c_mqtt_code,
                                    () => {
                                        if (item.c_status == 'OFF-LINE') {
                                            return <p style={{ color: 'red', fontWeight: 'bold' }}>{item.c_status}</p>;
                                        } else {
                                            return <p style={{ color: 'darkgreen', fontWeight: 'bold' }}>{item.c_status}</p>;
                                        }
                                    },
                                    item.c_status
                                ];
                            })}
                            columns={Testcolumns}
                            options={options}
                        />
                    </ThemeProvider>
                </div>
            </div>
        </div>
    );
};

export default BodyPage;
