import MUIDataTable from 'mui-datatables';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export interface IBodyPageProps {}

type MyDataPost = {
    u_id: any;
    u_name: string;
    ul_id: any;
    ut_id: any;
    ut_name: string;
};

// type MyData = {
//     u_email: any;
//     u_fullname: string;
//     u_id: number;
//     u_mobile: any;
//     u_name: string;
//     ua_name: string;
//     ul_name: string;
//     ut_name: string;
// };

type MyDataPost2 = {
    ctm_name: string;
    u_email: any;
    u_fullname: string;
    u_id: number;
    u_mobile: string;
    u_name: string;
    ua_name: string;
    ul_name: string;
    ut_name: string;
    ctmt_name: string;
};

const baseURL = 'https://evcarkmitl.com:5000/user/login';

const baseURLList = 'https://evcarkmitl.com:5000/usertype/list';

const baseURLList2 = 'https://evcarkmitl.com:5000/user/list';

const BodyPage: React.FunctionComponent<IBodyPageProps> = (props) => {
    const [post, setpost] = useState<MyDataPost[]>([]);

    const [post2, setpost2] = useState<MyDataPost2[]>([]);

    const [count, setcount] = useState('');

    const [EditData_1, setEditData_1] = useState('');

    const LS = localStorage;

    const CTMID = LS.getItem('USERCTM');
    const UID = LS.getItem('LVUSERID');
    const CID = LS.getItem('IdCarEditHistory');
    

    function SetLs_idEdit() {
        LS.setItem('idEdit', EditData_1);
        // navigateeditdata();
    }

    const navigate = useNavigate();

    const navigateadddata = () => {
        navigate('/adduserdetail');
    };

    const navigateeditdata = () => {
        navigate('/edituserdetail');
    };

    useEffect(() =>{
    //   axios
    //     .get(baseURLList)
    //     .then((res) => {
    //         setpost(res.data.data)
    //         console.log(res.data.data)
    //         // setcount(res.data)
    //     })
    //     .catch((err) => console.error(err));
        if(CTMID != "1"){
        axios
        .post(baseURLList2,{
            ctm_id: CTMID
        })
        .then((res) => {
            setpost2(res.data.data)
            setpost(res.data.data)
            console.log(res.data.data)
            // setcount(res.data)
        })
        .catch((err) => console.error(err));
        }else{
        axios
        .post(baseURLList2,{
            ctm_id: ""
        })
        .then((res) => {
            setpost2(res.data.data)
            setpost(res.data.data)
            console.log(res.data.data)
            // setcount(res.data)
        })
        .catch((err) => console.error(err));
        }

    }, []);

    // function postdata() {
    //     axios
    //         .post(baseURL, {
    //             uname: "admin",
    //             upass: "1234"
    //         })
    //         .then((res) => {
    //             setpost([res.data.data])
    //             console.log(res.data.data)
    //         })
    //         .catch((err) => console.error(err));
    // }

    useEffect(() => {
        // console.log("this data",post)
    }, [post]);

    useEffect(() => {
        // console.log("this count",post.length)
    }, [count]);

    useEffect(() => {
        console.log('EditData', EditData_1);
        SetLs_idEdit();
        if (EditData_1 != '') {
            navigateeditdata();
        }
    }, [EditData_1]);

    // if (!post) return null;

    const columns = ['เลขที่กิจการ', 'รูปแบบกิจการ', 'สถานะเปิด/ปิด', 'ที่อยู่', 'ชื่อเจ้าของอู่', 'เบอร์ติดต่อ'];

    const UserDetailcolumns = [
        'ชื่อผู้ใช้งาน',
        'ชื่อ-นามสกุล',
        'ชื่อลูกค้า',
        'ประเภทลูกค้า',
        'ประเภทสิทธิ',
        'ระดับสิทธิ',
        'เบอร์ติดต่อ',
        'e-mail',
        'การใช้งาน',
        {
            name: 'Edit',
            options: {
                filter: false,
                sort: false,
                customBodyRenderLite: (dataIndex: any, rowIndex: any) => {
                    return (
                        <EditOutlinedIcon
                            onClick={() => {
                                setEditData_1(post[dataIndex].u_id);
                                SetLs_idEdit();
                            }}
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

    const data = [
        ['Joe James', 'Test Corp', 'Yonkers', 'NY'],
        ['John Walsh', 'Test Corp', 'Hartford', 'CT'],
        ['Bob Herm', 'Test Corp', 'Tampa', 'FL'],
        ['James Houston', 'Test Corp', 'Dallas', 'TX']
    ];

    const UserDetaildata = [['11/10711', 'สถานีประจุไฟ', 'เปิด', '12/1 อ.เมือง จ.ลพบุรี', 'คล่องแคล่ว    ว่องไว', 'xxx-xxx-xxxx']];

    const myJSON = JSON.stringify(post);

    return (
        <div style={{ margin: '5vh 5vw' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '2vh 0vw' }}>
                <Button onClick={navigateadddata} style={{ color: 'black', backgroundColor: '#6CDCC0', borderRadius: '50px', width: '9.740vw' }}>
                    เพิ่ม
                </Button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ width: '100%' }}>
                    <ThemeProvider theme={getMuiTheme()}>
                        <MUIDataTable
                            title={'ข้อมูลผู้ใช้งาน'}
                            // data = {data}
                            data={post2.map((item) => {
                                return [item.u_name, item.u_fullname, item.ctm_name, item.ctmt_name,item.ut_name, item.ul_name, item.u_mobile, item.u_email, item.ua_name];
                            })}
                            columns={UserDetailcolumns}
                            options={options}
                        />
                    </ThemeProvider>
                </div>
            </div>
        </div>
    );
};

export default BodyPage;
