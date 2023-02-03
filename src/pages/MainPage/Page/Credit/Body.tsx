import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button'
import axios from "axios";
import { Typography , TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export interface IBodyPageProps {}


type MyDataPost = {
    ut_name: string;

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
    u_fullname_add: string;
    u_id: string;
    ut_balance: number;
    ut_id: number;
    ut_type: string;
};

const baseURL ="http://54.86.117.200:5000/credit/list"

const BodyPage: React.FunctionComponent<IBodyPageProps> = (props) => {

    const [message, setMessage] = useState('');
    const { nametext } = useParams();
    const navigate = useNavigate();

    const [post, setpost] = useState<MyDataPost[]>([]);

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

    function SetLs_idEdit() {
        // console.log(EditData_1);
        LS.setItem('idEdit', EditData_1);
        // navigateadddata();
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

    const CTMID = LS.getItem('USERCTM');
    const UID = LS.getItem('LVUSERID');
    const CID = LS.getItem('IdCarEditHistory');
    

    const fetchapi = () => {
      console.log("This is Ctm_id",CTMID)
      axios.post(baseURL,{
        ctm_id: CTMID,
        u_id: '',
        sdate: String(StartDate),
        edate: String(EndDate)
      }).then((response) => {
        setpost(response.data.data)
        console.log(response.data.data)
        setcount(response.data.data.length)
      })
    }

    useEffect(() =>{
        const showdate =new Date();
        const todaydate=showdate.getFullYear()+'-'+(showdate.getMonth()+ 1) +'-'+showdate.getDate()
        const monthdate = new Date();
        monthdate.setMonth(-1);
        const monthstartdate=monthdate.getFullYear()+'-'+(monthdate.getMonth()+ 1)+'-'+monthdate.getDate()
        setStartDate(monthstartdate)
        setEndDate(todaydate)
        // console.log(todaydate,"today")
        // console.log(monthdate,"after 1 month")
        // console.log(showdate.setMonth(showdate.getMonth()- 1), "dateeeeeeeee")

        // const endOfMonth = new Date();
        // console.log(endOfMonth,"First");
        // endOfMonth.setMonth(-1);
        // console.log(endOfMonth, "Second");
    }, []);

    useEffect(() =>{
        // console.log("this data",post)
    }, [post]);

    useEffect(() =>{
        console.log("this count",count)
    }, [count]);

    useEffect(() =>{
      console.log(StartDate)
      if ((StartDate != undefined)&&(StartDate!="")&&(EndDate != undefined)&&(EndDate!="")){
        fetchapi()
      }
    }, [StartDate, EndDate]);

    /* Click And Go Next Page */

    useEffect(() =>{
        console.log("EditData",EditData_1)   
        SetLs_idEdit();
        if (EditData_1 != ''){
            navigateadddata();
        }
    }, [EditData_1]);

    const navigateadddata = () => {
        navigate('/addcredit');
    };

    /* Add Button */

    const Testcolumns = [
      "วันเวลา",
      "ชื่อ-นามสกุล",
      "ผู้เติมเงิน",
      "จำนวนเงิน",
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

    const DateTime = () => {
        const showdate =new Date();
        const displaytodaydate=showdate.getDate()+'/'+showdate.getMonth()+'/'+showdate.getFullYear()
    }


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
                <SearchIcon onClick={navigateadddata} style={{cursor:'pointer'}}/>

             </div>
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',margin:'2vh 0vw'}}>
                <Button onClick={navigateadddata} style={{color:'black', backgroundColor:'#6CDCC0',borderRadius:'50px',width:'9.740vw'}}>เพิ่ม</Button>
            </div>
            <div style={{display:'flex',justifyContent:'flex-start'}}>
                <div style={{width:'100%'}}>
                <ThemeProvider theme={getMuiTheme()}>
                    <MUIDataTable
                        title={"ประวัติการเติมเงิน"}
                        data={post.map(item => {
                            return [
                                item.cd,
                                item.u_fullname,
                                item.u_fullname_add,
                                item.ut_balance,
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