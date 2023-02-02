import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button'
import axios from "axios";
import { Typography , TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import DeleteIcon from '@mui/icons-material/Delete';


export interface IBodyPageProps {}


type MyDataPost = {
    // ut_id: string;
    // ut_name: string;
    // s_id: string;
    c_id: any;
    c_license_plate:  string;
    c_mileage: string;
    c_mileage_init: string;
    c_mqtt_code: any;
    cd: string;
    cr_active: string;
    cr_cancel: string;
    cr_edatetime: string;
    cr_id: any;
    cr_reserve: string;
    cr_sdatetime: string;
    ctm_id: number;
    ctm_name: string;
    ctmt_id: number;
    ctmt_name: string;
    u_fullname: string;
    u_mobile: string;
};

 


const baseURL ="http://54.86.117.200:5000/car/reservelist"

const baseURLCancel ="http://54.86.117.200:5000/car/cancel"

const baseTestURL ="http://54.86.117.200:5000/user/typelist"



const BodyPage: React.FunctionComponent<IBodyPageProps> = (props) => {

    const navigate = useNavigate();

    const [post, setpost] = useState<MyDataPost[]>([]);

    const [MySetCancelCID, SetCancelCID] = useState('');
    const [MySetCancelCMQTT, SetCancelCMQTT] = useState('');
    const [MySetCancelUID, SetCancelUID] = useState('');
    const [MySetCancelCRID, SetCancelCRID] = useState('');

    const [valuedata, setValuedate] = React.useState<Dayjs | null>(null);

    const [count, setcount] = useState('');

    const handleChangeStartDate = (newValue: any | null) => {
      setStartDate(newValue);
    };

    const handleChangeEndDate = (newValue: any | null) => {
      setEndDate(newValue);
    };

    // const [MyIdEdit, setMyIdEdit] = useState<IDEdit>();

    const LS = localStorage;
    // const SetLs_idEdit = () => {
    //     LS.setItem('idEdit', EditData_1);
    // }

    function SetCancer() {
        // console.log(EditData_1);
        LS.setItem('idEdit', EditData_1);
        // navigateadddata();
        // Cancelapi();
    }

    function GetLs_idDelete() {
        // console.log(EditCustomerData);
        LS.setItem('idEdit', DeleteData);
        // console.log(Number(DeleteData))

        // navigateadddata();
    }

    const [DeleteData, setDeleteData] = useState('');

    const [EditData_1, setEditData_1] = useState('');
    const [EditData_2, setEditData_2] = useState('');
    const [EditData_3, setEditData_3] = useState('');
    
    const [StartDate, setStartDate] = React.useState<Dayjs | null | string>('');
    const [EndDate, setEndDate] = React.useState<Dayjs | null | string>('');

    const CTMID = LS.getItem('LVUSER');
    const UID = LS.getItem('LVUSERID');
    const CID = LS.getItem('IdCarEditHistory');


    const fetchapi = () => {
      axios.post(baseURL,{
        ctm_id: CTMID,
        u_id: UID,
        sdate: StartDate,
        edate: EndDate
      }).then((response) => {
        setpost(response.data.data)
        console.log(response.data.data)
        setcount(response.data.data.length)
      })
    }

    const Cancelapi = () => {
      axios.post(baseURLCancel,{
        c_id: MySetCancelCID,
        c_mqtt_code: MySetCancelCMQTT,
        u_id: UID,
        cr_id: MySetCancelCRID
      }).then((response) => {
        // setpost(response.data.data)
        console.log(response.data.data)
        // setcount(response.data.data.length)
      })
    }



    const Settime =  () =>{
      const showdate =new Date();
      const todaydate=showdate.getFullYear()+'-'+(showdate.getMonth()+ 1) +'-'+showdate.getDate()
      const monthdate = new Date();
      monthdate.setMonth(-1);
      const monthstartdate=monthdate.getFullYear()+'-'+(monthdate.getMonth()+ 1)+'-'+monthdate.getDate()
      setStartDate(monthstartdate)
      setEndDate(todaydate)
    }

    const foo = async () => {
      await Settime();
      // await fecthapi();
    }



    useEffect(() =>{
      const showdate =new Date();
      const todaydate=showdate.getFullYear()+'-'+(showdate.getMonth()+ 1) +'-'+showdate.getDate()
      const monthdate = new Date();
      monthdate.setMonth(-1);
      const monthstartdate=monthdate.getFullYear()+'-'+(monthdate.getMonth()+ 1)+'-'+monthdate.getDate()
      setStartDate(monthstartdate)
      setEndDate(todaydate)
      
    }, []);



    useEffect(() =>{
        // console.log("this data",post)
        console.log("this data",post[1]?.cr_edatetime)
    }, [post]);

    useEffect(() =>{
      // if (StartDate && EndDate != ""){
      //   axios.post(baseURL,{
      //     ctm_id: '2',
      //     u_id: '3',
      //     sdate: StartDate,
      //     edate: EndDate
      //   }).then((response) => {
      //     setpost(response.data.data)
      //     console.log(response.data.data)
      //     setcount(response.data.data.length)
      //   })
      // }
      console.log(StartDate)
      if ((StartDate != undefined)&&(StartDate!="")&&(EndDate != undefined)&&(EndDate!="")){
        fetchapi()
      }
    }, [StartDate, EndDate]);

    

    /* Click And Go Next Page */

    useEffect(() =>{
      console.log("MySetCancelCID",MySetCancelCID) 
      console.log("MySetCancelCMQTT",MySetCancelCMQTT) 
      console.log("MySetCancelCRID",MySetCancelCRID) 
    }, [MySetCancelCID, MySetCancelCMQTT, MySetCancelCRID]);

    // useEffect(() =>{

    // }, [EditData_1]);

    const SearchData = () => {
      axios.post(baseURL,{
        ctm_id: '2',
        u_id: '3',
        sdate: "2022-12-30",
        edate: "2023-1-31"
      }).then((response) => {
        setpost(response.data.data)
        console.log(response.data.data)
        setcount(response.data.data.length)
      })
    };

    /* Add Button */

    const Testcolumns = [
      "วันเวลา",
      "ทะเบียน",
      "คนขับ",
      "วันเวลาเริ่ม",
      "วันเวลาสิ้นสุด",
      "วันเวลายกเลิก",
      "สถานะ",
      {
        name: "",
        options: {
            filter: false,
            sort: false,
            customBodyRenderLite: (dataIndex:any, rowIndex:any) => {
            return (
              post[dataIndex].cr_active === "1" && post[dataIndex].cr_edatetime === null ? (
                <CancelOutlinedIcon onClick={() => {
                    SetCancelCID(post[dataIndex].c_id);
                    SetCancelCMQTT(post[dataIndex].c_mqtt_code);
                    SetCancelCRID(post[dataIndex].cr_id);
                    Cancelapi();   
                }} style={{cursor:'pointer'}}/>
              ) : (
                <></>
              )
            );
          }
        }
      },
    ];

    const options = {
        // caseSensitive: true,
        confirmFilters: false,
        sort: false,
        viewColumns: false,
        searchOpen: true,
        download: false,
        print: false,
        selectableRowsHeader: false,
        selectableRowsHideCheckboxes: true,
    };


    const getMuiTheme = () =>
      createTheme({
        components: {
          MuiTableCell: {
            styleOverrides:{ root: {
              padding: '16px 1.5vw',
            }}
          },

        }
      });

    return (
        <div style={{margin:'5vh 5vw'}}>
            <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
                <label>
                  <div style={{margin:'1vh 2vw 1vh 0vw',backgroundColor:'white',borderColor:'black', width:'13vw'}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                          label="StartDate"
                          inputFormat="YYYY/MM/DD"
                          value={StartDate}
                          onChange={handleChangeStartDate}
                          renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                  </div>    
                </label>
                <label>
                  <div style={{margin:'1vh 1vw 1vh 0vw',backgroundColor:'white',borderColor:'black', width:'13vw'}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                          label="EndDate"
                          inputFormat="YYYY/MM/DD"
                          value={EndDate}
                          onChange={handleChangeEndDate}
                          renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                  </div>    
                </label>
                <SearchIcon onClick={SearchData} style={{cursor:'pointer'}}/>
             </div>
            <div style={{display:'flex',justifyContent:'flex-start'}}>
                <div style={{width:'100%'}}>
                <ThemeProvider theme={getMuiTheme()}>
                  <MUIDataTable
                      title={"ประวัติการเติมเงิน"}
                      data={post.map(item => {
                          return [
                              item.cr_reserve,
                              item.c_license_plate,
                              item.u_fullname,
                              item.cr_sdatetime,
                              item.cr_edatetime,
                              item.cr_cancel,
                              item.cr_active === "1" ? (
                              <div style={{color:"green"}}>ปกติ</div>
                              ) : (
                              <div style={{color:"red"}}>ยกเลิก</div>
                              )
                          ]
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