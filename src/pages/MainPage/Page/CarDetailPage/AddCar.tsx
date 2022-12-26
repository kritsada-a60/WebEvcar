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

type MyData = {
  ctm_id: number;
  bt_pt_id: number;
  cgt_pt_id: number;
  c_license_plate: string;
  c_mqtt_code: string;
  u_id: number;
}

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



export interface ISAddCarPageProps {}

const baseURL ="http://54.86.117.200:5000/car/list"

const baseURLEdit ="http://54.86.117.200:5000/car/add"

const baseURLUpdateData ="http://54.86.117.200:5000/car/one"

const baseURLUpdateEdit ="http://54.86.117.200:5000/car/edit"

const baseURLUpdateAdd ="http://54.86.117.200:5000/car/add"

const AddCarPage: React.FunctionComponent<ISAddCarPageProps> = (props) => {

    const [post, setpost] = useState<MyDataPost[]>([]);

    
    const [Input1, setInput1] = useState("") 
    const [Input2, setInput2] = useState("")
    const [Input3, setInput3] = useState("") 
    const [Input4, setInput4] = useState("")
    const [Input5, setInput5] = useState("") 
    const [Input6, setInput6] = useState("") 

    const handleSubmit = (e:any) => {
    e.preventDefault();
    axios
      .post(baseURLUpdateAdd, {
        // ctmt_id: 3,
        // u_id: 1,
        // ctm_name: Input1,
        // ctm_cno: Input2,
        // ctm_bank: Input3,
        // ctm_bank_no: Input4,
        // ctm_contact_name: Input5,
        // ctm_address : Input6,
        ctm_id: Number(Input1),
        bt_pt_id: Number(Input2),
        cgt_pt_id: Number(Input3),
        c_license_plate: Input4,
        c_mqtt_code: Input5,
        u_id: Number(Input6),
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
          <p style={{margin:'5vh 30vw',justifyContent:'center' ,fontSize:'36px'}}>เพิ่มข้อมูลรถ</p>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <form >
              <div style={{margin:'2.5vh 0'}}>
                <label>
                  <TextField type="ut_name" name="ut_name" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ชื่อลูกค้า"
                  // value={Bnumber}
                  value={Input1}
                  onChange={(e) => {setInput1(e.target.value)}}
                  />       
                </label>
                <label>
                  <TextField type="ut_name" name="ut_name" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="เลขทะเบียนการค้า"
                  // value={Bnumber}
                  value={Input2}
                  onChange={(e) => {setInput2(e.target.value)}}
                  />       
                </label>
              </div>
              <div style={{margin:'2.5vh 0'}}>
                <label>
                  <TextField type="ut_name" name="ut_name" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ชื่อธนาคาร"
                  // value={Bnumber}
                  value={Input3}
                  onChange={(e) => {setInput3(e.target.value)}}
                  />       
                </label>
                <label>
                  <TextField type="ut_name" name="ut_name" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="บัญขีธนาคาร"
                  // value={Bnumber}
                  value={Input4}
                  onChange={(e) => {setInput4(e.target.value)}}
                  />       
                </label>
              </div>
              <div style={{margin:'2.5vh 0'}}>
                <label>
                  <TextField type="ut_name" name="ut_name" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ชื่อผู้ติดต่อ"
                  // value={Bnumber}
                  value={Input5}
                  onChange={(e) => {setInput5(e.target.value)}}
                  />       
                </label>
                <label>
                  <TextField type="ut_name" name="ut_name" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ที่อยู่"
                  // value={Bnumber}
                  value={Input6}
                  onChange={(e) => {setInput6(e.target.value)}}
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

export default AddCarPage;
