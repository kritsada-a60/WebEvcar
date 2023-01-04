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

type MyDorpDownData = {
    pc_description: any,
    pc_id: number,
    pc_name: string;
};

type MyDorpDownData2 = {
    pt_description: any,
    pt_id: number,
    pt_name: string;
};

type MyEditData = {
    sv_id: number;
    s_id: number;
    pt_id: number;
    sv_name: string;
    sv_serial: string;
    sv_mqtt_code: string;
    sv_price: number;
    sv_unit: string;
    sv_remark: string;
    sv_active: string;
    u_id: string;
};




export interface ISAddServicePageProps {}

const baseURL ="http://54.86.117.200:5000/service/list"

const baseURLEdit ="http://54.86.117.200:5000/service/add"

const baseURLUpdateData ="http://54.86.117.200:5000/service/one"

const baseURLUpdateEdit ="http://54.86.117.200:5000/service/edit"

const baseURLDorpDown ="http://54.86.117.200:5000/powercatalog/list"

const baseURLDorpDown2 ="http://54.86.117.200:5000/powertype/list"

const AddServicePage: React.FunctionComponent<ISAddServicePageProps> = (props) => {

    const [post, setpost] = useState<MyEditData[]>([]);

    const [MyIdEdit, setMyIdEdit] = useState('');

    const [FirstData, setFirstData] = useState<MyDataEdit[]>([]);

    const [Input1, setInput1] = useState("") 
    const [Input2, setInput2] = useState("")
    const [Input2_1, setInput2_1] = useState("")

    const [Input3, setInput3] = useState("") 
    const [Input4, setInput4] = useState("")
    const [Input5, setInput5] = useState("") 
    const [Input6, setInput6] = useState("")
    const [Input7, setInput7] = useState("") 
    const [Input8, setInput8] = useState("")

    
    const [DorpDownData, setDorpDownData] = useState<MyDorpDownData[]>([]);

    const [DorpDownData2, setDorpDownData2] = useState<MyDorpDownData2[]>([]);

    const LS = localStorage;
    const idEdit = LS.getItem('IdEditServiceData');

    const RemoceIdEdit = () => {
      LS.removeItem('IdEditServiceData');
      navigateadddata();
    }
    

    const navigate = useNavigate();

    const navigateadddata = () => {
        navigate('/service');
    };

    const navigateservice = () => {
        navigate('/service ');
    };
    
    const [Bname, setBname] = useState("") 

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
        ut_name: Bname,
        ut_id: idEdit,

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
        sv_id: Number(MydataToPostIdEdit)
        // ctm_id: 7
      }).then((response) => {
        console.log(response.data.data[0].pt_id,"updateeeee")
        setFirstData(response.data.data[0])
        setBname(response.data.data[0].ctm_name)
        // setpost(response.data.data)
        setInput1(response.data.data[0].pc_id)
        // setInput2(response.data.data[0].pc_id)
        setInput3(response.data.data[0].pc_name)
        setInput4(response.data.data[0].sv_serial)
        setInput5(response.data.data[0].sv_price)
        setInput6(response.data.data[0].sv_serial)
        setInput7(response.data.data[0].sv_unit)
        setInput8(response.data.data[0].sv_mqtt_code)
        console.log(response.data.data[0])
        // axios.post(baseURLDorpDown2,{
        //   pc_id: response.data.data[0].pc_id
        // }).then((res)=>{
        //   setInput2(res.data.data)
        // })
        const MyDD2 = response.data.data[0].pc_id
        axios.post(baseURLDorpDown2,{
          pc_id: Number(MyDD2)
        }).then((response) => {
          setDorpDownData2(response.data.data)
          
          // setInput2(response.data.data)
          console.log(response.data.data)
          // setInput2(response.data.data[0].pt_name)

        })
        .catch((err) => console.error(err));
      })
      axios.get(baseURLDorpDown).then((response) => {
        setDorpDownData(response.data.data)
        // console.log(response.data.data)
        // setInput1(response.data.data[0].pc_name)
      })
      .catch((err) => console.error(err));


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
        console.log(DorpDownData,"DD1")
    }, [DorpDownData]);

      useEffect(() =>{
        console.log(DorpDownData2,"DD2")
    }, [DorpDownData2]);



    return (
        <div style={{backgroundColor:'#E0F0EC'}}>
          <Header/>
          <p style={{margin:'5vh 30vw',justifyContent:'center' ,fontSize:'36px'}}>แก้ไข Service</p>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <form >
              <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <label>
                  <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>ประเภทบริการ</p>
                  <Select type="ประเภทบริการ" name="" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                  value={Input1}
                  onChange={(e) => {setInput1(e.target.value)}}
                  // label="Age"
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  >
                    
                  {DorpDownData?.length &&
                      DorpDownData.map((e: any, i: number) => {
                      return (
                        <MenuItem key={e.pc_id} value={e.pc_id}
                        // onChange={e =>{
                        //     console.log(e,"E")
                        //     setNumberDorpDown(e.sv_id)
                        // }}
                        >
                        {e.pc_name}
                        </MenuItem>
                      );
                  })}
                  </Select>
                  {/* {NumberDorpDown} */}
                </label>
                <label>
                  <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>ชนิด</p>
                  <Select type="ชนิด" name="" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                  value={Input2}
                  onChange={(e) => {setInput2(e.target.value)}}
                  // label="Age"
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  >
                    
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
                  {/* {NumberDorpDown} */}
                </label>
              </div>
              <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <label>
                  <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>ชื่อบริการ</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                  // value={Bnumber}
                  value={Input3}
                  onChange={(e) => {setInput3(e.target.value)}}
                  />       
                </label>
                <label>
                  <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>serial</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                  // value={Bnumber}
                  value={Input4}
                  onChange={(e) => {setInput4(e.target.value)}}
                  />       
                </label>
              </div>
              <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <label>
                  <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>ราคา</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                  // value={Bnumber}
                  value={Input5}
                  onChange={(e) => {setInput5(e.target.value)}}
                  />       
                </label>
                <label>
                  <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>หน่วย</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                  // value={Bnumber}
                  value={Input6}
                  onChange={(e) => {setInput6(e.target.value)}}
                  />       
                </label>
              </div>

              <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <label>
                  <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>MQTT_OCDE</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                  // value={Bnumber}
                  value={Input7}
                  onChange={(e) => {setInput7(e.target.value)}}
                  />       
                </label>
                <label>
                  <p style={{margin:'0vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>หมายเหตุ</p>
                  <TextField type="ut_name" name="ut_name" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
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
                onClick={navigateservice}
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
