import React, { useEffect, useState } from 'react';
import Map from "../../../../img/map.png";

import { styled } from '@mui/system';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Typography , TextField} from "@mui/material";
import Header from "../../Header"
import Body from "./Body"
import axios, { Axios } from "axios";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useParams , useNavigate} from 'react-router-dom';

type MyDataPost = {
  ut_id: string;
  ut_name: string;
  u_id: number;
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



export interface ISEditCarPageProps {}

const baseURL ="http://54.86.117.200:5000/car/list"

const baseURLEdit ="http://54.86.117.200:5000/car/add"

const baseURLUpdateData ="http://54.86.117.200:5000/car/one"

const baseURLUpdateEdit ="http://54.86.117.200:5000/car/edit"

const EditCarPage: React.FunctionComponent<ISEditCarPageProps> = (props) => {

    const [post, setpost] = useState<MyDataPost[]>([]);

    const [MyIdEdit, setMyIdEdit] = useState('');

    const [FirstData, setFirstData] = useState<MyData[]>([]);

    const [FirstEditData, setFirstEditData] = useState<MyData[]>([]);

    const LS = localStorage;
    const idEdit = LS.getItem('IdEditCustomerData');

    const RemoceIdEdit = () => {
      LS.removeItem('IdEditCustomerData');
    }

    const navigate = useNavigate();

    const navigateadddata = () => {
        navigate('/cardetail');
    };
    
    const [Bname, setBname] = useState("") 

    const [Input1, setInput1] = useState("") 
    const [Input2, setInput2] = useState("")
    const [Input3, setInput3] = useState("") 
    const [Input4, setInput4] = useState("")
    const [Input5, setInput5] = useState("") 
    const [Input6, setInput6] = useState("") 
    const [Input7, setInput7] = useState("") 
    const [Input8, setInput8] = useState("")
    const [Input9, setInput9] = useState("") 


    const [Bnumber, setBnumber] = useState({
      ut_name:"",
      u_id:"",
    }) 

    const [age, setAge] = React.useState('');

    const [testdorpdown, settestdorpdown] = useState([
      {number:'1',text:'a'},
      {number:'2',text:'b'},
      {number:'3',text:'c'},
      {number:'4',text:'d'},
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

    const handleSubmit = (e:any) => {
    e.preventDefault();
    // console.log(Bnumber)
    axios
      .post(baseURLUpdateEdit, {
        c_license_plate: Input1,
        c_id: FirstData[0]?.c_id,
        ctm_id: 2,
        bt_pt_id: 3,
        cgt_pt_id: 1,
        c_mqtt_code: "TT_3",
        c_active: "1",
        u_id: 1,
      })
      .then((res) => {
        console.log(res.data);
        console.log("ok");
        // navigateadddata();
        // setBnumber(res.data.success)
      })
      .catch((err) => console.error(err));
    };

    /* axios Editdata */

    useEffect(() =>{
      axios.post(baseURLUpdateData,{
        c_id: LS.getItem('IdCarEdit')
      }).then((response) => {
        console.log(response.data.data[0].c_id)
        setFirstData(response.data.data)
        setInput1(response.data.data[0].c_license_plate)
        // setFirstData(response.data.data[0].ctm_name)
        // setFirstData(response.data.data[0].cgt_pt_name)
        // setFirstData(response.data.data[0].bt_pt_name)
        // setFirstData(response.data.data[0].c_capacity)
        // setFirstData(response.data.data[0].c_speed)
        // setFirstData(response.data.data[0].c_lng)
        // setFirstData(response.data.data[0].c_gps_signal)
        // setFirstData(response.data.data[0].c_status)
        // setBname(response.data.data[0].ut_name)
        // setpost(response.data.data)
        // console.log(response.data.data[0])
      })
    }, []);

    /* axios Editdata */


    useEffect(() =>{
        console.log("this data",post)
    }, [post]);

    useEffect(() =>{
      console.log(Bnumber)
    }, [Bnumber])

    useEffect(() =>{
        console.log("this MyIdEdit",MyIdEdit)
        console.log("this Ls.get",idEdit)
    }, [MyIdEdit]);

    useEffect(() =>{
        console.log("this data",post)
    }, []);

    useEffect(() =>{
        console.log("this FirstData",FirstData)
    }, [FirstData]);

    useEffect(() =>{
        console.log("this Bname",Bname)
    }, [Bname]);

    useEffect(() =>{
        console.log("this Bname",Input1)
    }, [Input1]);



    return (
        <div style={{backgroundColor:'#E0F0EC'}}>
          <Header/>
          <p style={{margin:'5vh 30vw',justifyContent:'center' ,fontSize:'36px'}}>แก้ไขข้อมูลรถ</p>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <form >
              <div style={{margin:'2.5vh 0'}}>
               <label>
                  <TextField type="ut_name" name="ut_name" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ชื่อกิจการ"
                  value={Input1}
                  onChange={(e) => {setInput1(e.target.value)}}
                  />          
                </label>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="อู่"
                  // value={Bnumber}
                  value={FirstData[0]?.ctm_name}
                  onChange={(e) => {setInput2(e.target.value)}}
                  />       
                </label>
              </div>
              <div style={{margin:'2.5vh 0'}}>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ประเภทรถ"
                  // value={Bnumber}
                  value={FirstData[0]?.cgt_pt_name}
                  onChange={(e) => {setInput3(e.target.value)}}
                  />       
                </label>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ประเภทแบตเตอรี่"
                  // value={Bnumber}
                  value={FirstData[0]?.bt_pt_name}
                  onChange={(e) => {setInput4(e.target.value)}}
                  />       
                </label>
              </div>
              <div style={{margin:'2.5vh 0'}}>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="อายุแบตเตอรี่"
                  // value={Bnumber}
                  value={FirstData[0]?.c_capacity}
                  onChange={(e) => {setInput5(e.target.value)}}
                  />       
                </label>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ความเร็วรถ"
                  // value={Bnumber}
                  value={FirstData[0]?.c_speed}
                  onChange={(e) => {setInput6(e.target.value)}}
                  />       
                </label>
              </div>
              <div style={{margin:'2.5vh 0'}}>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="เลขไมล์"
                  // value={Bnumber}
                  value={FirstData[0]?.c_lng}
                  onChange={(e) => {setInput7(e.target.value)}}
                  />       
                </label>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="วันที่เริ่มใช้งาน"
                  // value={Bnumber}
                  value={FirstData[0]?.c_gps_signal}
                  onChange={(e) => {setInput8(e.target.value)}}
                  />       
                </label>
              </div>
              <div style={{margin:'2.5vh 0'}}>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="สถานะรถ"
                  // value={Bnumber}
                  value={FirstData[0]?.c_status}
                  onChange={(e) => {setInput9(e.target.value)}}
                  />       
                </label>
              </div>
              
              
              <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Button style={{color:'white', backgroundColor:'#6CDCC0',margin:'2.5vh 2.5vw'}}
                onClick={handleSubmit} type="submit"
                >
                  บันทึก
                </Button>
                <Button style={{color:'white', backgroundColor:'#FF5A5A',margin:'2.5vh 2.5vw'}}
                onClick={RemoceIdEdit}
                >
                  ยกเลิก
                </Button>
              </div>
            </form>
          </div>
        </div>
    );
};

export default EditCarPage;