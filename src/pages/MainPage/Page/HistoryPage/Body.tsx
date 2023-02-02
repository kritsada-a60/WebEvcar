import axios, { Axios } from "axios";
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Ls } from "dayjs";
import TimeToLeaveOutlinedIcon from '@mui/icons-material/TimeToLeaveOutlined';

export interface IBodyPageProps {}

type MyDataPost = {
  ut_id: string;
  ut_name: string;

  c_battery: any;
  c_gps_signal: any;
  c_gps_status: any;
  c_id: any;
  c_lat: string;
  c_lng: string;
  c_mileage: any;
  c_place: any;
  c_speed: any;
  cb: string;
  cd: any;
  ct_id: any;
  mb: any;
  md: any;
  retire: any;
};

const baseURL ="http://54.86.117.200:5000/usertype/list"

const baseURLTracking ="http://54.86.117.200:5000/car/tracking"


const BodyPage: React.FunctionComponent<IBodyPageProps> = (props) => {

    const [message, setMessage] = useState('');
    const { nametext } = useParams();

    const [post, setpost] = useState<MyDataPost[]>([]);
    const [EditData_1, setEditData_1] = useState('');

    const navigate = useNavigate();
    
    const LS = localStorage;

    const CTMID = LS.getItem('USERCTM');
    const UID = LS.getItem('LVUSERID');
    // const CID = LS.getItem('LVUSER');

    useEffect(() =>{
      axios.post(baseURLTracking,{
      ctm_id: CTMID,
      sdate: "2020-12-30",
      edate: "2024-1-31",
      u_id: UID,
      c_id: 1
      }).then((response) => {
        setpost(response.data.data)
        // console.log(response.data.data[0])
      })
    }, []);

    useEffect(() =>{
        console.log("this data",post)
    }, [post]);

    


    function SetLs_idEdit() {

        LS.setItem('idEdit', EditData_1);

    }

    const navigatemap = () => {
      navigate('/map');
    };

    const columns = ["ทะเบียนรถ", "อู่", "Switch on", "Switch off", "ระยะทาง", "ปริมาณไฟฟ้าที่ใช้"];

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


    const Testcolumns = [
        "ทะเบียนรถ",
        "ระยะทาง",
        "ปริมาณไฟฟ้าที่ใช้",
    ];

    return (
        <div style={{margin:'5vh 5vw'}}>
            <div style={{display:'flex',justifyContent:'flex-start'}}>
                <div style={{width:'100%'}}>
                  <ThemeProvider theme={getMuiTheme()}>
                    <MUIDataTable
                        title={"ประวัติการเดินทาง"}
                        // data={HistoryPagedata}
                        data={post.map(item => {
                            return [
                                item.ut_id,
                                item.c_mileage,
                                item.retire,
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