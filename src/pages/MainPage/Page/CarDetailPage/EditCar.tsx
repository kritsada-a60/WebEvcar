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



export interface ISEditCarPageProps {}

const baseURL ="http://54.86.117.200:5000/car/list"

const baseURLEdit ="http://54.86.117.200:5000/car/add"

const baseURLUpdateData ="http://54.86.117.200:5000/car/one"

const baseURLUpdateEdit ="http://54.86.117.200:5000/car/edit"

const baseURLDorpDown ="http://54.86.117.200:5000/customer/list"

const baseURLDorpDown2 ="http://54.86.117.200:5000/powertype/list"



const EditCarPage: React.FunctionComponent<ISEditCarPageProps> = (props) => {

    const [post, setpost] = useState<MyDataPost[]>([]);

    const [MyIdEdit, setMyIdEdit] = useState('');

    const [FirstData, setFirstData] = useState<MyData[]>([]);

    const [DorpDownData, setDorpDownData] = useState<MyDorpDownData[]>([]);

    const [DorpDownData2, setDorpDownData2] = useState<MyDorpDownData2[]>([]);

    const [DorpDownData3, setDorpDownData3] = useState<MyDorpDownData2[]>([]);

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
        ctm_id: Input2,
        bt_pt_id: Number(Input3),
        cgt_pt_id: Number(Input4),
        c_mqtt_code: "TT_3",
        c_active: "1",
        u_id: 1,
        c_start_data: Input8,
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
      axios.get(baseURLDorpDown).then((response) => {
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

    }, []);

    /* axios Editdata */

    useEffect(() =>{
        console.log("this DorpDownData",DorpDownData)

        console.log("this is result DorpDownData",resultDorpDownData)
    }, [DorpDownData]);

    const resultDorpDownData = DorpDownData.filter((member) => {
      return member.ctmt_id == 2
    })


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
        // const result = FirstData.filter((member) => {
        //   return member.ctmt_id = 2
        // })
    }, [FirstData]);

    useEffect(() =>{
        console.log("this Bname",Bname)
    }, [Bname]);

    useEffect(() =>{
        console.log("Input3",Input2)
    }, [Input2]);

    useEffect(() =>{
        console.log("Input3",Input3)
    }, [Input3]);

    useEffect(() =>{
        console.log("Input4",Input4)
    }, [Input4]);



    return (
        <div style={{backgroundColor:'#E0F0EC'}}>
          <Header/>
          <p style={{margin:'5vh 30vw',justifyContent:'center' ,fontSize:'36px'}}>แก้ไขข้อมูลรถ</p>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <form >
              <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
               <label>
                  <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>ทะเบียนรถ</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ชื่อกิจการ"
                  value={Input1}
                  onChange={(e) => {setInput1(e.target.value)}}
                  />          
                </label>
                {/* <label>
                  <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>อู่</p>
                  <TextField type="" name="" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="อู่"
                  // value={Bnumber}
                  value={FirstData[0]?.ctm_name}
                  onChange={(e) => {setInput2(e.target.value)}}
                  />       
                </label> */}

                <label>
                    <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>อู่</p>
                    <Select type="ประเภทกิจการ" name="" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ประเภทกิจการ"
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
                            <MenuItem key={i} value={e.ctm_id}
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
                    <Select type="หัวชาร์จ" name="" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="หัวชาร์จ"
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
                            <MenuItem key={i} value={e.pt_id}
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
                    <Select type="แบตเตอร์รี่" name="" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="แบตเตอร์รี่"
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
                            <MenuItem key={i} value={e.pt_id}
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
                  <TextField type="" name="" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ไมล์เริ่มต้น"
                  // value={Bnumber}
                  value={FirstData[0]?.c_capacity}
                  onChange={(e) => {setInput5(e.target.value)}}
                  />       
                </label>
                <label>
                  <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>ความเร็วรถ</p>
                  <TextField type="" name="" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ความเร็วรถ"
                  // value={Bnumber}
                  value={FirstData[0]?.c_speed}
                  onChange={(e) => {setInput6(e.target.value)}}
                  />       
                </label>
              </div>
              <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <label>
                  <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>เลขไมล์</p>
                  <TextField type="" name="" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="เลขไมล์"
                  // value={Bnumber}
                  value={FirstData[0]?.c_mileage}
                  onChange={(e) => {setInput7(e.target.value)}}
                  />       
                </label>
                <label>
                  <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>วันที่เริ่มใช้งาน</p>
                  <TextField type="" name="" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="วันที่เริ่มใช้งาน"
                  // value={Bnumber}
                  value={FirstData[0]?.c_gps_signal}
                  onChange={(e) => {setInput8(e.target.value)}}
                  />       
                </label>
              </div>
              <div style={{margin:'2.5vh 0'}}>
                <label>
                  <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>สถานะรถ</p>
                  <TextField type="" name="" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="สถานะรถ"
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