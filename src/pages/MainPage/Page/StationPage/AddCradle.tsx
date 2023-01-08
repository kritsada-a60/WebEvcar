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
ctm_name: string;
ctmt_id: number;
ctm_cno: string;
ctm_bank: string;
ctm_bank_no: string;
ctm_contact_name: string;
ctm_address : string;
ctm_tumbon: string;
ctm_amphur : string;
ctm_province : string;
ctm_zipcode: string;
ctm_tel: string;
ctm_mobile: string;
ctm_mail: string;
ctm_mqtt_code: string;
u_id: number;
};

type MyDataAdd = {
ctm_id: string;
ctm_name: string;
s_active: string;
s_address: string;
s_amphur: string;
s_contact: string;
s_id: string;
s_mqtt_code: string;
s_name: string;
s_province: string;
s_tel: string;
s_tumbon: string;
s_zipcode: string;
ss_id: string;
// u_id: number;
};

type AddStation ={
    ctm_id: number;
    s_name: string;
    s_mqtt_code: string;
    s_address: string;
    s_tumbon: string;
    s_amphur: string;
    s_province: string;
    s_zipcode: string;
    s_lat: string;
    s_lng: string;
    s_contact: string;
    s_tel: string;
    s_active: string;
    s_id: number;
    u_id: number;
}



export interface ISAddCradleInfomationPageProps {}

const baseURL ="http://54.86.117.200:5000/station/list"

const baseURLEdit ="http://54.86.117.200:5000/station/add"

const baseURLUpdateData ="http://54.86.117.200:5000/station/one"

const baseURLUpdateEdit ="http://54.86.117.200:5000/station/edit"

const baseURLUpdateAdd ="http://54.86.117.200:5000/station/add"

const AddCradleInfomationPage: React.FunctionComponent<ISAddCradleInfomationPageProps> = (props) => {

    const [post, setpost] = useState<AddStation[]>([]);

    
    const [Input1, setInput1] = useState("") 
    const [Input2, setInput2] = useState("")
    const [Input3, setInput3] = useState("") 
    const [Input4, setInput4] = useState("")
    const [Input5, setInput5] = useState("") 
    const [Input6, setInput6] = useState("")
    const [Input7, setInput7] = useState("") 
    const [Input8, setInput8] = useState("")
    const [Input9, setInput9] = useState("") 
    const [Input10, setInput10] = useState("")
    const [Input11, setInput11] = useState("") 
    const [Input12, setInput12] = useState("")
    const [Input13, setInput13] = useState("") 
    const [Input14, setInput14] = useState("")
    const [Input15, setInput15] = useState("") 
    const [Input16, setInput16] = useState("") 
    const [Input17, setInput17] = useState("")

    const LS = localStorage;


    const handleSubmit = (e:any) => {
    e.preventDefault();
    axios
      .post(baseURLUpdateAdd, {
          ctm_id: 5,
          s_name: Input1,
          s_mqtt_code: Input10,
          s_address: Input2,
          s_tumbon: Input4,
          s_amphur: Input3,
          s_province: Input5,
          s_zipcode: "10260",
          s_lat: Input8,
          s_lng: Input9,
          s_contact: Input6,
          s_tel: Input7,
          s_active: "1",
          u_id: 1,
      })
      .then((res) => {
        console.log(res.data);
        console.log("ok");
        if(res.data.success == true){
          AlertMassage();
        } else {
          alert("ข้อมูลไม่ถูกต้อง");
        }
        // setBnumber(res.data.success)
      })
      .catch((err) => console.error(err));
    };

    async function AlertMassage (){
      await alert("ข้อมูลถูกต้อง");
      await navigateadddata();
    }
    /* axios Adddata */

    // useEffect(() =>{
    //   axios.post(baseURLUpdateData,{
    //     ut_id: LS.getItem('idEdit')
    //   }).then((response) => {
    //     console.log(response.data)
    //     // setFirstData(response.data.data[0].ut_name)
    //     setInput(response.data.data[0].ut_name)
    //     // setpost(response.data.data)
    //     // console.log(response.data.data[0])
    //   })
    // }, []);

    /* axios Adddata */

    useEffect(() =>{
        console.log(Input1,"input")
    }, [Input1]);

    const navigate = useNavigate();

    const navigateadddata = () => {
        navigate('/station');
    };




    return (
        <div style={{backgroundColor:'#E0F0EC'}}>
          <Header/>
          <p style={{margin:'5vh 30vw',justifyContent:'center' ,fontSize:'36px'}}>เพิ่มข้อมูลสถานี</p>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <form >
              <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <label>
                  <p style={{margin:'1vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>ชื่อสถานี</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                  // value={Bnumber}
                  value={Input1}
                  onChange={(e) => {setInput1(e.target.value)}}
                  />       
                </label>
                <label>
                  <p style={{margin:'1vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>ที่อยู่</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                  // value={Bnumber}
                  value={Input2}
                  onChange={(e) => {setInput2(e.target.value)}}
                  />       
                </label>
              </div>
              <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <label>
                  <p style={{margin:'1vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>ตำบล</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}}
                  // value={Bnumber}
                  value={Input4}
                  onChange={(e) => {setInput4(e.target.value)}}
                  />       
                </label>
                <label>
                  <p style={{margin:'1vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>อำเภอ</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                  // value={Bnumber}
                  value={Input3}
                  onChange={(e) => {setInput3(e.target.value)}}
                  />       
                </label>
              </div>
              <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <label>
                  <p style={{margin:'1vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>จังหวัด</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                  // value={Bnumber}
                  value={Input5}
                  onChange={(e) => {setInput5(e.target.value)}}
                  />       
                </label>
                <label>
                  <p style={{margin:'1vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>ชื่อผู้ติดต่อ</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                  // value={Bnumber}
                  value={Input6}
                  onChange={(e) => {setInput6(e.target.value)}}
                  />       
                </label>
              </div>

              <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <label>
                  <p style={{margin:'1vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>เบอร์ติดต่อ</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                  // value={Bnumber}
                  value={Input7}
                  onChange={(e) => {setInput7(e.target.value)}}
                  />       
                </label>
                <label>
                  <p style={{margin:'1vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>รหัส MQTT</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                  // value={Bnumber}
                  value={Input10}
                  onChange={(e) => {setInput10(e.target.value)}}
                  />       
                </label>

              </div>
              <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <label>
                  <p style={{margin:'1vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>ละติจูด</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                  // value={Bnumber}
                  value={Input8}
                  onChange={(e) => {setInput8(e.target.value)}}
                  />       
                </label>
                <label>
                  <p style={{margin:'1vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>ลองจิจูด</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                  // value={Bnumber}
                  value={Input9}
                  onChange={(e) => {setInput9(e.target.value)}}
                  />       
                </label>

              </div>

              {/* <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <label>
                  <p style={{margin:'1vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>โทรศัพท์</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="โทรศัพท์"
                  // value={Bnumber}
                  value={Input11}
                  onChange={(e) => {setInput11(e.target.value)}}
                  />       
                </label>
                <label>
                  <p style={{margin:'1vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>มือถือ</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="มือถือ"
                  // value={Bnumber}
                  value={Input12}
                  onChange={(e) => {setInput12(e.target.value)}}
                  />       
                </label>
              </div>
              <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <label>
                  <p style={{margin:'1vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>E-Mail</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="E-Mail"
                  // value={Bnumber}
                  value={Input13}
                  onChange={(e) => {setInput13(e.target.value)}}
                  />       
                </label>
                <label>
                  <p style={{margin:'1vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>รหัส MQTT</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="รหัส MQTT"
                  // value={Bnumber}
                  value={Input14}
                  onChange={(e) => {setInput14(e.target.value)}}
                  />       
                </label>
              </div> */}
              <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Button style={{color:'white', backgroundColor:'#6CDCC0',margin:'2.5vh 2.5vw'}}
                onClick={handleSubmit} type="submit"
                >
                  บันทึก
                </Button>
                <Button style={{color:'white', backgroundColor:'#FF5A5A',margin:'2.5vh 2.5vw'}}
                onClick={navigateadddata}
                >
                  ยกเลิก
                </Button>
              </div>
            </form>
          </div>
        </div>
    );
};

export default AddCradleInfomationPage;
