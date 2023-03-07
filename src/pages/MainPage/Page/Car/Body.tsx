import MUIDataTable from 'mui-datatables';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Typography, TextField } from '@mui/material';
import axios from 'axios';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import SearchIcon from '@mui/icons-material/Search';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

import { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './styles.css';

// import { UseFormRegisterReturn } from 'react-hook-form';

export interface IBodyPageProps {}

// interface Props {
//   inpSec2: UseFormRegisterReturn[];
// }

type MyDataPost = {
    ctm_id: string;
    ctm_name: string;
    pc_name: string;
    pt_name: string;
    s_active: string;
    s_address: string;
    s_amphur: string;
    s_contact: string;
    s_id: number;
    s_mqtt_code: string;
    s_name: string;
    s_province: string;
    s_tel: string;
    s_tumbon: string;
    s_zipcode: string;
    ss_id: any;
    sv_active: number;
    sv_capacity: any;
    sv_cmosfet: any;
    sv_credit: any;
    sv_current: any;
    sv_id: any;
    sv_mqtt_code: string;
    sv_name: string;
    sv_now: any;
    sv_price: number;
    sv_remark: string;
    sv_serial: string;
    sv_status: number;
    sv_status_txt: string;
    sv_temp: any;
    sv_ts: any;
    sv_unit: string;
};

type MyDeleteData = {
    ctm_name: string;
};

interface MyDorpDown {
    ctm_id: number;
    ctm_name: string;
    pc_name: string;
    pt_name: string;
    s_active: string;
    s_address: string;
    s_amphur: string;
    s_contact: string;
    s_id: number;
    s_mqtt_code: string;
    s_name: string;
    s_province: string;
    s_tel: string;
    s_tumbon: string;
    s_zipcode: string;
    ss_id: any;
    sv_active: number;
    sv_capacity: any;
    sv_cmosfet: any;
    sv_credit: any;
    sv_current: any;
    sv_id: number;
    sv_mqtt_code: string;
    sv_name: string;
    sv_now: any;
    sv_price: number;
    sv_remark: string;
    sv_serial: string;
    sv_status: number;
    sv_status_txt: string;
    sv_temp: any;
    sv_ts: any;
    sv_unit: string;
}

interface MyDorpDown2 {
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
    sv_status_txt: string;
}

type MyDataExprot = {
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
    s_id: string;
    s_name: string;
    sv_id: string;
    sv_name: string;
    u_fullname: string;
    u_fullname_add: string;
    u_id: number;
    ut_balance: number;
    ut_id: number;
    ut_type: string;
};

type MyDorpDownLength = {
    sv_id: number;
};

const baseURL = 'https://evcarkmitl.com:5000/service/list';

const baseURLEdit = 'https://evcarkmitl.com:5000/service/add';

const baseURLUpdateDelete = 'https://evcarkmitl.com:5000/service/del';

const baseURLUpdateDataTable = 'https://evcarkmitl.com:5000/service/one';

const baseURLUpdateDataTable2 = 'https://evcarkmitl.com:5000/station/list';

const baseURLUpdateDorpdown = 'https://evcarkmitl.com:5000/credit/list';

const BodyPage: React.FunctionComponent<IBodyPageProps> = (props) => {
    const [message, setMessage] = useState('');
    const { nametext } = useParams();
    const navigate = useNavigate();

    const [post, setpost] = useState<MyDataPost[]>([]);

    const [post2, setpost2] = useState<MyDataPost>();

    const [post3, setpost3] = useState<MyDataExprot[]>([]);

    const [post4, setpost4] = useState('1');

    const [DorpDownStaion, setDorpDownStaion] = useState<MyDorpDown[]>([]);

    const [DorpDownStaion2, setDorpDownStaion2] = useState<MyDorpDown2[]>([]);

    const [DorpDownId, setDorpDownID] = useState('');

    const [NumberDorpDown, setNumberDorpDown] = useState('');

    const [NameDorpDown, setNameDorpDown] = useState('');

    const [count, setcount] = useState('');

    const [age, setAge] = React.useState('');

    const [Input1, setInput1] = useState('');

    const handleChangeStartDate = (newValue: any | null) => {
        setStartDate(newValue);
    };

    const handleChangeEndDate = (newValue: any | null) => {
        setEndDate(newValue);
    };

    const [StartDate, setStartDate] = React.useState<Dayjs | null | string>('');
    const [EndDate, setEndDate] = React.useState<Dayjs | null | string>('');

    const LS = localStorage;
    // const SetLs_idEdit = () => {
    //     LS.setItem('idEdit', EditCustomerData);
    // }

    const CTMID = LS.getItem('USERCTM');
    const UID = LS.getItem('LVUSERID');
    const CID = LS.getItem('IdCarEditHistory');

    const SearchData = () => {
        axios
            .post(baseURL, {
                ctm_id: CTMID,
                u_id: UID,
                sdate: StartDate,
                edate: EndDate
            })
            .then((response) => {
                setpost(response.data.data);
                console.log(response.data.data);
                setcount(response.data.data.length);
            });
    };

    // const [MyIdEdit, setMyIdEdit] = useState<IDEdit>();

    function SetLs_idEdit() {
        // console.log(EditCustomerData);
        LS.setItem('IdCustomerEdit', EditCustomerData);
        // navigateadddata();
    }

    function SetLs_idEdit2() {
        // console.log(EditCustomerData);
        LS.setItem('IdCustomerEdit', NumberDorpDown);
        // navigateadddata();
    }

    function GetLs_idDelete() {
        // console.log(EditCustomerData);
        LS.setItem('IdCustomerDelete', DeleteData);
        // console.log(Number(DeleteData))

        // navigateadddata();
    }

    const [EditCustomerData, setEditCustomerData] = useState('');
    // const [DeleteData, setDeleteData] = useState<MyDeleteData[]>([]);
    const [DeleteData, setDeleteData] = useState('');
    const [EditData_3, setEditData_3] = useState();

    useEffect(() => {
        const showdate = new Date();
        const todaydate = showdate.getFullYear() + '-' + (showdate.getMonth() + 1) + '-' + showdate.getDate();
        const monthdate = new Date();
        monthdate.setMonth(-1);
        const monthstartdate = monthdate.getFullYear() + '-' + (monthdate.getMonth() + 1) + '-' + monthdate.getDate();
        setStartDate(monthstartdate);
        setEndDate(todaydate);
        //   axios.post(baseURL,{
        //     ctm_id: "5",
        //     s_id: "2",
        //   }).then((response) => {
        //     console.log(response.data)
        //     setpost(response.data.data)
        //     // console.log(post,"post data")

        //     setDorpDownStaion(response.data.data)
        //     // console.log(DorpDownStaion,"post dorpdown")

        //     // console.log(response.data.data,"start data")
        //     // console.log(response.data.data.length)
        //     // setcount(response.data.data.length)
        //   })
        axios
            .post(baseURLUpdateDataTable2, {
                ctm_id: CTMID
            })
            .then((response) => {
                console.log(response.data);
                setpost(response.data.data);
                // console.log(post,"post data")

                setDorpDownStaion2(response.data.data);
                // console.log(DorpDownStaion,"post dorpdown")

                // console.log(response.data.data,"start data")
                // console.log(response.data.data.length)
                // setcount(response.data.data.length)
            });
    }, []);

    const resultDorpDownData = DorpDownStaion.filter((member) => {
        return member.ctm_name == 'Station A';
    });

    useEffect(() => {
        console.log(post, 'this data');
    }, [post]);

    useEffect(() => {
        // console.log("this count",count)
    }, [count]);

    // useEffect(() =>{
    //     console.log("this dorpdowndata",DorpDownStaion)
    // }, [DorpDownStaion]);

    useEffect(() => {
        console.log('this dorpdowndata2', DorpDownStaion2);
    }, [DorpDownStaion2]);

    useEffect(() => {
        // console.log("this numberDorpDown",NumberDorpDown)
        // setpost2(post => [...post])
        // setpost2(post[Number(NumberDorpDown)])
    }, [NumberDorpDown]);

    useEffect(() => {
        // console.log(post2,"this post2")
        // console.log(Newdata,"old data")
        // console.log(post2,"new data")
        // post3.map((post2)=>[
        //     post3.push(post2)
        // ])
        // console.log(post3,"post3")
        if (post2 != null) {
            console.log(NumberDorpDown, 'Happy');
            //     axios
            //     .post(baseURLUpdateDataTable , {
            //         sv_id: NumberDorpDown,
            //          // sv_id: LS.getItem("IdCustomerEdit"),
            //         // sv_id: "6",
            //     })
            //     .then((res) => {
            //         console.log(res.data.data,"this is Happy");
            //         setpost3(res.data.data)
            //         // console.log("ok");
            //     })
            //     .catch((err) => console.error(err));
        }
    }, [post2]);

    useEffect(() => {
        // console.log(post3[0]?.sv_name,"post3")
        // console.log(post3)
    }, [post3]);

    useEffect(() => {
        console.log(Input1);
        LS.setItem('IdServiceDorpDown', Input1);
    }, [Input1]);

    /* Click And Go Next Page */

    useEffect(() => {
        // console.log("EditCustomerData",EditCustomerData)
        SetLs_idEdit();
        if (EditCustomerData != '') {
            navigateeditdata();
        }
    }, [EditCustomerData]);

    useEffect(() => {
        console.log('EditCustomerData', DeleteData);
        GetLs_idDelete();
        if (DeleteData != '') {
            var answer = window.confirm('ต้องการจะลบข้อมูลหรือไม่');
            if (answer) {
                alert('ลบข้อมูลสำเร็จ');
                axios
                    .post(baseURLUpdateDelete, {
                        sv_id: Number(DeleteData),
                        u_id: UID
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

    const navigateadddata = () => {
        navigate('/addservice');
    };

    const navigateeditdata = () => {
        navigate('/editservice');
    };

    const handleSubmit = () => {
        // if (DeleteData != "0"){
        //     console.log(DeleteData,"Now Delete")
        // }
        console.log(DeleteData);
        // axios
        // .post(baseURLUpdateDelete, {
        //     ctm_id: Number(DeleteData),
        //     u_id: "1",
        // })
        // .then((res) => {
        //     console.log(res,"this is delete");
        //     // console.log("ok");
        // })
        // .catch((err) => console.error(err));
    };

    const handleChange = (event: SelectChangeEvent) => {
        //  setAge(event.target.value);
        // setNumberDorpDown(event.target.value); /* จุดเริ่มต้นของนรก */
        // SetLs_idEdit2();
        // setNameDorpDown(event.target.value);

        console.log(event.target.value);
        // console.log(post3[0]?.sv_id)
        axios
            .post(baseURLUpdateDorpdown, {
                u_id: UID,
                ctm_id: CTMID,
                s_id: event.target.value,
                sdate: StartDate,
                edate: EndDate
            })
            .then((res) => {
                console.log(res.data.data);
                // setDorpDownStaion(res.data.data)
                setpost3(res.data.data);
            })
            .catch((err) => console.error(err));
    };

    /* Add Button */

    const Testcolumns = [
        'ชื่อสถานี',
        'ชื่อบริการ',
        'ประเภท',
        'ชื่อ-นามสกุล',
        'จำนวนเครดิต',
        // "ชื่อลูกค้า",
        // "ประเภทลูกค้า",
        // "เลขทะเบียนการค้า",
        // "ชื่อธนาคาร",
        // "บัญขีธนาคาร",
        // "ชื่อผู้ติดต่อ",
        // "ที่อยู่",
        // "ตำบล",
        // "อำเภอ",
        // "จังหวัด",
        // "รหัสไปรษณีย์",
        // "โทรศัพท์",
        // "มือถือ",
        // "E-Mail",
        // "รหัส MQTT",
        {
            name: '',
            options: {
                filter: false,
                sort: false,
                customBodyRenderLite: (dataIndex: any, rowIndex: any) => {
                    return (
                        <EditOutlinedIcon
                            onClick={() => {
                                setEditCustomerData(post3[dataIndex].sv_id);
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
                                setDeleteData(post3[dataIndex].sv_id);
                                GetLs_idDelete();
                            }}
                            style={{ cursor: 'pointer' }}
                        />
                    );
                }
            }
        }
    ];
    const options = {
        caseSensitive: true,
        confirmFilters: false,
        sort: false,
        viewColumns: false,
        searchOpen: false,
        // download: false,
        // print: false,
        selectableRowsHeader: false,
        selectableRowsHideCheckboxes: true,
        selectableRowsOnClick: true
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

    const getMuiTheme2 = () =>
        createTheme({
            components: {
                MuiTableCell: {
                    styleOverrides: {
                        root: {
                            color: 'black'
                        }
                    }
                }
            }
        });

    /* Add Button and Vaule */

    // console.log(Testcolumns,"Columns")
    // console.log(Testcolumns[7],"ColumnsEdit")

    // const data2 = [
    //     {id:1,name:'wahid'},
    //     {id:2,name:'jamil'},
    //     {id:3,name:'marin'},
    // ];

    // const columnss = [
    //     {
    //     name: "id",
    //     label: "Id",
    //     options: {
    //         display: false
    //     }
    //     },
    //     {
    //     name: "name",
    //     label: "Name",
    //     },
    //     {
    //     name: "Actions",
    //     options: {
    //         filter: false,
    //         sort: false,
    //         customBodyRenderLite: (dataIndex:any, rowIndex:any) => {
    //         return (
    //             <Button aria-label="edit" onClick={() => {
    //                 // alert(data2[dataIndex].name)
    //                 alert(post[rowIndex].ut_name)

    //             }}>
    //                 Button
    //             </Button>

    //         );
    //     }
    //     },

    // }
    // ];

    return (
        <div style={{ margin: '5vh 5vw' }}>
            <div style={{ margin: '2.5vh 0', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <div style={{ margin: '2.5vh 0', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <label>
                        <div style={{ margin: '1vh 2vw 1vh 0vw', backgroundColor: 'white', borderColor: 'black', width: '13vw' }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopDatePicker label="StartDate" inputFormat="YYYY/MM/DD" value={StartDate} onChange={handleChangeStartDate} renderInput={(params) => <TextField {...params} />} />
                            </LocalizationProvider>
                        </div>
                    </label>
                    <label>
                        <div style={{ margin: '1vh 2vw 1vh 0vw', backgroundColor: 'white', borderColor: 'black', width: '13vw' }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopDatePicker label="EndDate" inputFormat="YYYY/MM/DD" value={EndDate} onChange={handleChangeEndDate} renderInput={(params) => <TextField {...params} />} />
                            </LocalizationProvider>
                        </div>
                    </label>
                </div>
                <label>
                    <Select
                        type="ประเภทกิจการ"
                        name=""
                        style={{ margin: '1vh 1vw 1vh 0vw', backgroundColor: 'white', borderColor: 'black', width: '13vw' }}
                        placeholder="ประเภทกิจการ"
                        value={Input1}
                        onChange={(e) => {
                            handleChange(e);
                            setInput1(e.target.value);
                        }}
                        // label="Station"
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem key="" value="">
                            เลือกทั้งหมด
                        </MenuItem>
                        {DorpDownStaion2?.length &&
                            DorpDownStaion2.map((e: any, i: number) => {
                                return (
                                    // <MenuItem key="" value="">เลือกทั้งหมด</MenuItem>
                                    <MenuItem
                                        key={e.s_id}
                                        value={e.s_id}
                                        // onChange={e =>{
                                        //     console.log(e,"E")
                                        //     setNumberDorpDown(e.sv_id)
                                        // }}
                                    >
                                        {e.s_name}
                                    </MenuItem>
                                );
                            })}
                    </Select>
                    {/* {NumberDorpDown}          */}
                </label>
                <SearchIcon onClick={SearchData} style={{ cursor: 'pointer' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ width: '100%' }}>
                    <ThemeProvider theme={getMuiTheme()}>
                        <MUIDataTable
                            title={'ข้อมูล Station'}
                            data={post3?.map((item) => {
                                return [item.s_name, item.pc_name, item.pt_name, item.u_fullname, item.ut_balance];
                            })}
                            // data={post3}
                            columns={Testcolumns}
                            options={options}
                        />
                    </ThemeProvider>
                    {/* {post3?.length &&
                        post3.map((e: any, i: number) => {
                        return (
                            <div key={i} 
                            // onChange={e =>{
                            //     console.log(e,"E")
                            //     setNumberDorpDown(e.sv_id)
                            // }}
                            >
                            {e.sv_id}
                            {e.sv_name}
                            {console.log(e,"e")}
                            {console.log(i,"i")}
                            </div>
                        );
                    })} */}
                    {/* <MUIDataTable
                    title={"ข้อมูลสถานี"}
                    data={data2}
                    columns={columnss} 
                /> */}
                </div>
                {/* <div style={{width:'10%',display:'table-row',justifyContent:'center',alignItems:'center'}}>
                    {count.length? && 
                        count.map((e:any, i:number) => {
                            return (
                                <Button onClick={navigateadddata}> Edit</Button>
                            );
                        })}
                    <Button onClick={navigateadddata}> Edit</Button>
                    {post?.length &&
                        post.map((e: any, i: number) => {
                        return (
                            <div key={i} >
                                <Button onClick={navigateadddata} style={{color:'white',backgroundColor:'#6CDCC0'}}> Edit</Button>
                            </div>
                        );
                    })}
                </div> */}
            </div>
        </div>
    );
};

export default BodyPage;
