import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button'
import axios from "axios";

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

    const baseURL ="http://54.86.117.200:5000/car/list"

    const baseURLUpdateDelete ="http://54.86.117.200:5000/car/del"

    const navigate = useNavigate();

    const [post, setpost] = useState<MyData[]>([]);

    const [count, setcount] = useState('');

    const LS = localStorage;

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

    useEffect(() =>{
      axios.post(baseURL,{
        ctm_id: ""
      }).then((response) => {
        setpost(response.data.data)
        // console.log(post,"post data")
        console.log(response.data.data,"start data")
        // console.log(response.data.data.length)
        setcount(response.data.data.length)
        LS.setItem('CountDataCarpage', response.data.data.length)
      })
    }, []);

    useEffect(() =>{
      console.log(post,"this data")
    }, [post]);

    useEffect(() =>{
      console.log("this count",count)
    }, [count]);

    /* Click And Go Next Page */

    useEffect(() =>{
      console.log("EditCarData",EditCarData)   
      SetLs_idEdit();
      if (EditCarData != ''){
          navigateeditdata();
      }
    }, [EditCarData]);

    useEffect(() =>{
      console.log("EditData",DeleteData)
      GetLs_idDelete();
      if ( DeleteData != ''){
        var answer = window.confirm("ต้องการจะลบข้อมูลหรือไม่");
        if (answer) {
                alert("ลบข้อมูลสำเร็จ");
                axios
                .post(baseURLUpdateDelete, {
                    c_id: Number(DeleteData),
                    u_id: 1,
                })
                .then((res) => {
                    console.log(res,"this is delete");
                    window.location.reload();
                    // console.log("ok");
                })
              .catch((err) => console.error(err));
            }else{
                window.location.reload();
            }
        }
        else {
            
            // alert("ลบข้อมูลไม่สำเร็จ");
      }
    }, [DeleteData]);



    const navigateeditdata = () => {
      navigate('/editcardetail');
    };

    const navigateaddcar = () => {
      navigate('/addcardetail');
    };



    const CarDetailPagedata = [
    ["กข 231", "อู่ 1", "ตุ๊กตุ๊ก", "ลิเธียม", "22/ก.ย./64", "40 กม./ชม.", "20", "22/ก.ย./64", "ดี"],
    ];

    const Testcolumns = [
        "ทะเบียนรถ", 
        "หัวชาร์จ", 
        "ประเภทแบตเตอรี่", 
        "ระดับแบตตารี่", 
        "อู่", 
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
  };



    return (
      <div style={{width:'50%',height:'100vh'}}>
          <div style={{width:'50%',margin:'5vh 1vw',fontSize:'2vw'}}>ค้นหารถ</div>
          <div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start'}}>
              <div style={{width:'100%'}}>
                  <MUIDataTable
                    title={"ข้อมูลรถ"}
                    data={post.map(item => {
                        return [
                            item.c_license_plate,
                            item.cgt_pt_name,
                            item.bt_pt_name,
                            <>
                            {item.c_capacity} %
                            </>,
                            item.ctm_name,
                            
                        ]
                    })}
                    columns={Testcolumns}
                    options={options}
                  />
              </div>
          </div>
      </div>
    );
};

export default BodyPage;