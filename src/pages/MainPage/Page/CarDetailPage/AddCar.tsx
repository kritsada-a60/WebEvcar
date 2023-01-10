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

type MyDorpDownData = {
    ctm_address: string;
    ctm_amphur: string;
    ctm_bank: string;
    ctm_bank_no: string;
    ctm_cno: string;
    ctm_contact_name: string;
    ctm_id: string;
    ctm_mail: string;
    ctm_mobile: string;
    ctm_mqtt_code: any;
    ctm_name: string;
    ctm_province: string;
    ctm_tel: string;
    ctm_tumbon: string;
    ctm_zipcode: string;
    ctmt_id: number;
    ctmt_name: string;
};

type MyDorpDownData2 = {
    pt_description: any,
    pt_id: number,
    pt_name: string;
};



export interface ISAddCarPageProps {}

const baseURL ="http://54.86.117.200:5000/car/list"

const baseURLEdit ="http://54.86.117.200:5000/car/add"

const baseURLUpdateData ="http://54.86.117.200:5000/car/one"

const baseURLUpdateEdit ="http://54.86.117.200:5000/car/edit"

const baseURLUpdateAdd ="http://54.86.117.200:5000/car/add"

const baseURLDorpDown ="http://54.86.117.200:5000/customer/list"

const baseURLDorpDown2 ="http://54.86.117.200:5000/powertype/list"

const AddCarPage: React.FunctionComponent<ISAddCarPageProps> = (props) => {

    const [post, setpost] = useState<MyDataPost[]>([]);

    const [DorpDownData, setDorpDownData] = useState<MyDorpDownData[]>([]);

    const [DorpDownData2, setDorpDownData2] = useState<MyDorpDownData2[]>([]);

    const [DorpDownData3, setDorpDownData3] = useState<MyDorpDownData2[]>([]);


    const LS = localStorage;
    
    const [Input1, setInput1] = useState("") 
    const [Input2, setInput2] = useState("")
    const [Input3, setInput3] = useState("") 
    const [Input4, setInput4] = useState("")
    const [Input5, setInput5] = useState("") 
    const [Input6, setInput6] = useState("")
    const [Input7, setInput7] = useState("") 
    const [Input8, setInput8] = useState("")
    const [Input9, setInput9] = useState("")

    const navigate = useNavigate();

    const navigatecar = () => {
      navigate('/cardetail');
    };

    useEffect(()=>{
      axios.post(baseURLDorpDown,{
        ctmt_id: 2
      }).then((response) => {
        setDorpDownData(response.data.data)
        
        // const result = FirstData.filter((member) => {
        //   return member.ctmt_id = 2
        // })
      })
      axios.post(baseURLDorpDown2,{
        pc_id: 1
      }).then((response) => {
        setDorpDownData2(response.data.data)
        console.log(response.data)
      })
      axios.post(baseURLDorpDown2,{
        pc_id: 2
      }).then((response) => {
        setDorpDownData3(response.data.data)
        console.log(response.data)
      })
    },[])

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
        // c_id: 1,
        ctm_id: Number(Input2),
        bt_pt_id: Number(Input3),
        cgt_pt_id: Number(Input4),
        c_license_plate: Input1,
        c_mqtt_code: Input9,
        c_active: "1",
        u_id: "1ฟหกฟหก",
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
      await alert("ข้อมูลสำเร็จ");
      await navigatecar();
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

    const resultDorpDownData = DorpDownData.filter((member) => {
      return member.ctmt_id == 2
    })




    return (
        <div style={{backgroundColor:'#E0F0EC'}}>
          <Header/>
          <p style={{margin:'5vh 30vw',justifyContent:'center' ,fontSize:'36px'}}>เพิ่มข้อมูลรถ</p>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <form >
              <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <label>
                  <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>ทะเบียนรถ</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                  // value={Bnumber}
                  value={Input1}
                  onChange={(e) => {setInput1(e.target.value)}}
                  />       
                </label>
                <label>
                    <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>อู่</p>
                    <Select type="ประเภทกิจการ" name="" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                    value={Input2}
                    onChange={(e) => {setInput2(e.target.value)}}
                    // label="Age"
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                      
                    <MenuItem value="">
                        <em></em>
                    </MenuItem>
                    {resultDorpDownData?.length &&
                        resultDorpDownData.map((e: any, i: number) => {
                        return (
                            <MenuItem key={e.ctm_id} value={e.ctm_id}
                            // onChange={e =>{
                            //     console.log(e,"E")
                            //     setNumberDorpDown(e.sv_id)
                            // }}
                            >
                            {e.ctm_name}
                            </MenuItem>
                        );
                    })}
                    </Select>
                    {/* {NumberDorpDown}          */}
                </label>
              </div>
              <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <label>
                    <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>หัวชาร์จ</p>
                    <Select type="หัวชาร์จ" name="" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                    value={Input3}
                    onChange={(e) => {setInput3(e.target.value)}}
                    // label="Age"
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                      
                    <MenuItem value="">
                        <em></em>
                    </MenuItem>
                    {DorpDownData2?.length &&
                        DorpDownData2.map((e: any, i: number) => {
                        return (
                            <MenuItem key={e.pt_id} value={e.pt_id}
                            // onChange={e =>{
                            //     console.log(e,"E")
                            //     setNumberDorpDown(e.sv_id)
                            // }}
                            >
                            {e.pt_name}
                            </MenuItem>
                        );
                    })}
                    </Select>
                    {/* {NumberDorpDown}          */}
                </label>
                <label>
                    <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>แบตเตอร์รี่</p>
                    <Select type="แบตเตอร์รี่" name="" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                    value={Input4}
                    onChange={(e) => {setInput4(e.target.value)}}
                    // label="Age"
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                      
                    <MenuItem value="">
                        <em></em>
                    </MenuItem>
                    {DorpDownData3?.length &&
                        DorpDownData3.map((e: any, i: number) => {
                        return (
                            <MenuItem key={e.pt_id} value={e.pt_id}
                            // onChange={e =>{
                            //     console.log(e,"E")
                            //     setNumberDorpDown(e.sv_id)
                            // }}
                            >
                            {e.pt_name}
                            </MenuItem>
                        );
                    })}
                    </Select>
                    {/* {NumberDorpDown}          */}
                </label>
              </div>
              <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <label>
                  <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>ไมล์เริ่มต้น</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                  // value={Bnumber}
                  value={Input5}
                  onChange={(e) => {setInput5(e.target.value)}}
                  />       
                </label>
                <label>
                  <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>วันที่เริ่มใช้งาน</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                  // value={Bnumber}
                  value={Input8}
                  onChange={(e) => {setInput6(e.target.value)}}
                  />       
                </label>

              </div>
              <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
                <label>
                  <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>MQTT_CODE</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                  // value={Bnumber}
                  value={Input9}
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
                onClick={navigatecar}
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
