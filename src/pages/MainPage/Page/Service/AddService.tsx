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
ctm_name: string;
// ctmt_id: number;
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
// u_id: number;
};



export interface ISAddServicePageProps {}

const baseURL ="http://54.86.117.200:5000/service/list"

const baseURLEdit ="http://54.86.117.200:5000/service/add"

const baseURLUpdateData ="http://54.86.117.200:5000/service/one"

const baseURLUpdateEdit ="http://54.86.117.200:5000/service/edit"

const baseURLUpdateAdd ="http://54.86.117.200:5000/service/add"

const AddServicePage: React.FunctionComponent<ISAddServicePageProps> = (props) => {

    const [post, setpost] = useState<MyDataPost[]>([]);

    
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

    const handleSubmit = (e:any) => {
    e.preventDefault();
    axios
      .post(baseURLUpdateAdd, {
        s_id: 1,
        pt_id: 3,
        sv_name: Input1,
        sv_serial: Input2,
        sv_mqtt_code: Input5,
        sv_price: Number(Input3),
        sv_unit: Input4,
        sv_remark: Input6,
        u_id: 1
      })
      .then((res) => {
        console.log(res.data);
        console.log("ok");
        // setBnumber(res.data.success)
      })
      .catch((err) => console.error(err));
    };

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




    return (
        <div style={{backgroundColor:'#E0F0EC'}}>
          <Header/>
          <p style={{margin:'5vh 30vw',justifyContent:'center' ,fontSize:'36px'}}>เพิ่มStation</p>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <form >
              <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <label>
                  <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>ประเภทบริการ</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ประเภทบริการ"
                  // value={Bnumber}
                  value={Input1}
                  onChange={(e) => {setInput1(e.target.value)}}
                  />       
                </label>
                <label>
                  <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>ชนิด</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ชนิด"
                  // value={Bnumber}
                  value={Input2}
                  onChange={(e) => {setInput2(e.target.value)}}
                  />       
                </label>
              </div>
              <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <label>
                  <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>ชื่อบริการ</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ชื่อบริการ"
                  // value={Bnumber}
                  value={Input3}
                  onChange={(e) => {setInput3(e.target.value)}}
                  />       
                </label>
                <label>
                  <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>serial</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="serial"
                  // value={Bnumber}
                  value={Input4}
                  onChange={(e) => {setInput4(e.target.value)}}
                  />       
                </label>
              </div>
              <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <label>
                  <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>ราคา</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ราคา"
                  // value={Bnumber}
                  value={Input5}
                  onChange={(e) => {setInput5(e.target.value)}}
                  />       
                </label>
                <label>
                  <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>หน่วย</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="หน่วย"
                  // value={Bnumber}
                  value={Input6}
                  onChange={(e) => {setInput6(e.target.value)}}
                  />       
                </label>
              </div>

              <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <label>
                  <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>MQTT_OCDE</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="MQTT_OCDE"
                  // value={Bnumber}
                  value={Input7}
                  onChange={(e) => {setInput7(e.target.value)}}
                  />       
                </label>
                <label>
                  <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>หมายเหตุ</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="หมายเหตุ"
                  // value={Bnumber}
                  value={Input8}
                  onChange={(e) => {setInput8(e.target.value)}}
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

                >
                  ยกเลิก
                </Button>
              </div>
            </form>
          </div>
        </div>
    );
};

export default AddServicePage;
