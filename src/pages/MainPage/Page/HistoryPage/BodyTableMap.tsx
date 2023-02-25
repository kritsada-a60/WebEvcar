import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button'
import axios from "axios";
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

    const baseURL ="http://43.210.67.101:5000/car/tracking"

    const baseURLUpdateDelete ="http://43.210.67.101:5000/car/del"

    const navigate = useNavigate();

    const [post, setpost] = useState<MyDataPost[]>([]);

    const [count, setcount] = useState('');

    const LS = localStorage;

    const CTMID = LS.getItem('USERCTM');
    const UID = LS.getItem('LVUSERID');
    const CID = LS.getItem('IdCarEditHistory');



    useEffect(() =>{
      axios.post(baseURL,{
        ctm_id: CTMID,
        sdate: "2020-12-30",
        edate: "2024-1-31",
        u_id: UID,
        c_id: 1
      }).then((response) => {
        setpost(response.data.data)
        console.log(response.data.data,"start data")
      })
    }, []);

    useEffect(() =>{
      console.log(post,"this data")
    }, [post]);

    useEffect(() =>{
      console.log("this count",count)
    }, [count]);

    /* Click And Go Next Page */


    const Testcolumns = [
        "ID CAR",
        "เวลาเริ่มเดินทาง",
        "ละติจูด",
        "ลองจิจูด",
        "ความเร็ว"
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
      <div style={{width:'50%',height:'100vh'}}>
          <div style={{width:'50%',margin:'5vh 1vw',fontSize:'2vw'}}>ค้นหารถ</div>
          <div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start'}}>
              <div style={{width:'100%'}}>
                <ThemeProvider theme={getMuiTheme()}>
                  <MUIDataTable
                    title={"ข้อมูลรถ"}
                    data={post.map(item => {
                        return [
                                item.c_id,
                                item.cd,
                                item.c_lat,
                                item.c_lng,
                                item.c_speed,
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