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
  ctm_name: string;
  ut_name: string;
  u_id: number;
};

type MyDataEdit = {
  ut_id: string;
  ctm_name: string;
  ut_name: string;
  u_id: number;
};


export interface ISAddCradleInfomationPageProps {}

const baseURL ="http://54.86.117.200:5000/station/list"

const baseURLEdit ="http://54.86.117.200:5000/station/add"

const baseURLUpdateData ="http://54.86.117.200:5000/station/one"

const baseURLUpdateEdit ="http://54.86.117.200:5000/station/edit"

const AddCradleInfomationPage: React.FunctionComponent<ISAddCradleInfomationPageProps> = (props) => {

    const [post, setpost] = useState<MyDataPost[]>([]);

    const [MyIdEdit, setMyIdEdit] = useState('');

    const [FirstData, setFirstData] = useState<MyDataEdit[]>([]);

    const LS = localStorage;
    const idEdit = LS.getItem('IdEditStationData');

    const RemoceIdEdit = () => {
      LS.removeItem('IdEditStationData');
    }

    const navigate = useNavigate();

    const navigateadddata = () => {
        navigate('/station');
    };
    
    const [Bname, setBname] = useState("") 

    const [Input1, setInput1] = useState("") 
    const [Input2, setInput2] = useState("")
    const [Input3, setInput3] = useState("") 
    const [Input4, setInput4] = useState("")
    const [Input5, setInput5] = useState("") 
    const [Input6, setInput6] = useState("") 

    const [Bnumber, setBnumber] = useState({
      ut_name:"",
      u_id:"",
      ctm_name:"",
      ctmt_name:"",
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
    console.log(Bnumber)
    axios
      .post(baseURLUpdateEdit, {
        ctm_id: 2,
        s_name: Input1,
        s_mqtt_code: "STATION_01",
        s_address: Input2,
        s_tumbon: "บางนา",
        s_amphur: "บางนา",
        s_province: "กรุงเทพ",
        s_zipcode: "10260",
        s_lat: "7.156416543",
        s_lng: "100.454545",  
        s_contact: Input3,
        s_tel: Input4,
        s_active: Input6,
        s_id: 1,
        u_id: 1,
      })
      .then((res) => {
        console.log(res.data);
        console.log("ok");
        navigateadddata();

        // setBnumber(res.data.success)
      })
      .catch((err) => console.error(err));
    };

    /* axios Editdata */

    useEffect(() =>{
      const MydataToPostIdEdit = LS.getItem('IdCustomerEdit')
      // console.log(MydataToPostIdEdit,"postdataedit")
      axios.post(baseURLUpdateData,{
        // s_id: Number(MydataToPostIdEdit) 
        s_id : 2
      }).then((response) => {
        console.log(response.data)
        // setFirstData(response.data.data[0])
        setBname(response.data.data[0].ctm_name)
        setInput1(response.data.data[0].s_name)
        setInput2(response.data.data[0].s_address)
        setInput3(response.data.data[0].s_contact)
        setInput4(response.data.data[0].s_tel)
        setInput5(response.data.data[0].ss_id)
        setInput6(response.data.data[0].s_active)
        // setpost(response.data.data)
        console.log(response.data.data[0])
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



    return (
        <div style={{backgroundColor:'#E0F0EC'}}>
          <Header/>
          <p style={{margin:'5vh 30vw',justifyContent:'center' ,fontSize:'36px'}}>แก้ไขสถานี</p>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <form >
              <div style={{margin:'2.5vh 0'}}>
               <label>
                  <TextField type="ut_name" name="ut_name" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ชื่อสถานี"
                  value={Input1}
                  onChange={(e) => {setInput1(e.target.value)}}
                  />          
                </label>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ที่อยู่"
                  // value={Bnumber}
                  value={Input2}
                  onChange={(e) => {setInput2(e.target.value)}}
                  />       
                </label>
              </div>
              <div style={{margin:'2.5vh 0'}}>
               <label>
                  <TextField type="ut_name" name="ut_name" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ชื่อเจ้าของอู่"
                  value={Input3}
                  onChange={(e) => {setInput3(e.target.value)}}
                  />          
                </label>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="เบอร์ติดต่อ"
                  // value={Bnumber}
                  value={Input4}
                  onChange={(e) => {setInput4(e.target.value)}}
                  />       
                </label>
              </div>
              <div style={{margin:'2.5vh 0'}}>
               <label>
                  <TextField type="ut_name" name="ut_name" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="เวลาทำการ"
                  value={Input5}
                  onChange={(e) => {setInput5(e.target.value)}}
                  />          
                </label>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="จำนวนรถ"
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

export default AddCradleInfomationPage;
