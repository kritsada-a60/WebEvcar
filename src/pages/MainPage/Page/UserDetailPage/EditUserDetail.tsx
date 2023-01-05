import React, { useEffect, useState } from 'react';
import Map from "../../../../img/map.png";

import { styled } from '@mui/system';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Typography , TextField ,Checkbox} from "@mui/material";
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
};

type MyDataPost2 = {
  u_email: string;
  u_fullname: string;
  u_id: any;
  u_mobile: string;
  u_name: string;
  ua_name: string;
  ul_name: string;
  ut_name: string;
};

type MyDorpDownData = {
    ctmt_id: any,
    ctmt_name: string,
};

type MyDorpDownData2 = {
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

type MyDorpDownData3 = {
    ul_id: any,
    ul_name: string,
};

type MyDorpDownData4 = {
    ut_id: any,
    ut_name: string,
};

type MyEditData = {
  u_id: string;
  ctm_id: number;
  u_email: string;
  u_fullname: string;
  u_mobile: string;
  u_name: string;
  ua_id: number;
  ul_id: number;
  ut_id: number;
  uid: number;
};



export interface ISEditUserDetailPageProps {}

const baseURL ="http://54.86.117.200:5000/usertype/list"

const baseURLEdit ="http://54.86.117.200:5000/usertype/add"

const baseURLUpdateData ="http://54.86.117.200:5000/user/info"

const baseURLUpdateEdit ="http://54.86.117.200:5000/usertype/edit"

const baseURLUpdateMyEdit ="http://54.86.117.200:5000/usertype/edit"

const baseURLUpdateAddDorpDown = "http://54.86.117.200:5000/customertype/list"

const baseURLUpdateAddDorpDown2 = "http://54.86.117.200:5000/customer/list"

const baseURLUpdateAddDorpDown3 = "http://54.86.117.200:5000/userlevel/list"

const baseURLUpdateAddDorpDown4 = "http://54.86.117.200:5000/usertype/list"



const EditUserDetailPage: React.FunctionComponent<ISEditUserDetailPageProps> = (props) => {

  const [post, setpost] = useState<MyDataPost[]>([]);

    const [MyIdEdit, setMyIdEdit] = useState('');

    const [FirstData, setFirstData] = useState<MyDataPost[]>([]);

    const [DorpDownData, setDorpDownData] = useState<MyDorpDownData[]>([]);

    const [DorpDownData2, setDorpDownData2] = useState<MyDorpDownData2[]>([]);

    const [DorpDownData3, setDorpDownData3] = useState<MyDorpDownData3[]>([]);

    const [DorpDownData4, setDorpDownData4] = useState<MyDorpDownData4[]>([]);

    const LS = localStorage;
    const idEdit = LS.getItem('idEdit');

    const RemoceIdEdit = () => {
      LS.removeItem('idEdit');
      navigateadddata();
    }

    const navigate = useNavigate();

    const navigateadddata = () => {
        navigate('/userdetail');
    };
    
    const [Bname, setBname] = useState("")
    const [Bemail, setBemail] = useState("")
    const [Bfullname, setBfullname] = useState("")
    const [Bid, setBid] = useState("")
    const [Bmoblie, setBmoblie] = useState("")
    const [Ba_name, setBa_name] = useState("")
    const [Bl_name, setBl_name] = useState("")
    const [Bt_name, setBt_name] = useState("") 

    const [Bname2, setBname2] = useState([]) 


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

    // const myObj = JSON.parse(Bname2);

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
    console.log(Bnumber)
    axios
      .post(baseURLUpdateMyEdit, {
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
      axios.post(baseURLUpdateData,{
        u_id: LS.getItem('idEdit')
      }).then((response) => {
        console.log(response.data,"use data")
        // setFirstData(response.data.data[0].ut_name)
        // setBname(response.data.data[0].u_name)
        // setBemail(response.data.data[0].u_email)
        // setBfullname(response.data.data[0].u_fullname)
        // setBid(response.data.data[0].u_id)
        // setBmoblie(response.data.data[0].u_mobile)
        // setBa_name(response.data.data[0].ua_name)
        // setBl_name(response.data.data[0].ul_name)
        // setBt_name(response.data.data[0].ut_name)

        // setInput1(response.data.data[0])
        // setInput2(response.data.data[0])
        setInput3(response.data.data[0].u_name)
        setInput4(response.data.data[0].u_fullname)
        setInput5(response.data.data[0].ctm_name)
        setInput6(response.data.data[0].ul_name)
        setInput7(response.data.data[0].u_mobile)
        setInput8(response.data.data[0].u_email)
        // setInput9(response.data.data[0])
        // setInput10(response.data.data[0])

        // setBname2(response.data.data)
        // setpost(response.data.data)
        // console.log(response.data.data[0])
      })

      axios.get(baseURLUpdateAddDorpDown).then((response) => {
        console.log(response.data.data)
        setDorpDownData(response.data.data)
      })
      .catch((err) => console.error(err));

      axios.get(baseURLUpdateAddDorpDown2).then((response) => {
        console.log(response.data.data)
        setDorpDownData2(response.data.data)
      })
      .catch((err) => console.error(err));

      axios.get(baseURLUpdateAddDorpDown3).then((response) => {
        console.log(response.data.data)
        setDorpDownData3(response.data.data)
      })
      .catch((err) => console.error(err));

      axios.get(baseURLUpdateAddDorpDown4).then((response) => {
        console.log(response.data.data)
        setDorpDownData4(response.data.data)
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
        console.log("this Bname2",Bname2)
    }, [Bname2]);

    return (
        <div style={{backgroundColor:'#E0F0EC'}}>
          <Header/>
          <p style={{margin:'5vh 30vw',justifyContent:'center' ,fontSize:'36px'}}>แก้ไขข้อมูลผู้ใช้งาน</p>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <form >
              <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <label>
                  <p style={{margin:'1vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>ประเภทกิจการ</p>
                  <Select type="ประเภทกิจการ" name="" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                    value={Input1}
                    onChange={(e) => {setInput1(e.target.value)}}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                    {DorpDownData?.length &&
                        DorpDownData.map((e: any, i: number) => {
                        return (
                            <MenuItem key={e.ctmt_id} value={e.ctmt_id}>
                            {e.ctmt_name}
                            </MenuItem>
                        );
                    })}
                    </Select>          
                </label>
                <label>
                  <p style={{margin:'1vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>ชื่อกิจการ</p>      
                  <Select type="ชื่อกิจการ" name="" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                    value={Input2}
                    onChange={(e) => {setInput2(e.target.value)}}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                    {DorpDownData2?.length &&
                        DorpDownData2.map((e: any, i: number) => {
                        return (
                            <MenuItem key={e.ctm_id} value={e.ctm_id}>
                            {e.ctm_contact_name}
                            </MenuItem>
                        );
                    })}
                    </Select>      
                </label>
              </div>
              <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <label>
                  <p style={{margin:'1vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>ชื่อผู้ใช้</p>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                  value={Input3}
                  onChange={(e) => {setInput3(e.target.value)}}
                  />           
                </label>
                <label>
                  <p style={{margin:'1vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>ชื่อ-นามสกุล</p>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                  value={Input4}
                  onChange={(e) => {setInput4(e.target.value)}}
                  />           
                </label>
              </div>
              <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <label>
                  <p style={{margin:'1vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>รหัสผ่าน</p>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                  value={Input5}
                  onChange={(e) => {setInput5(e.target.value)}}
                  />            
                </label>
                <label>
                  <p style={{margin:'1vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>ยืนยันรหัสผ่าน</p>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                  value={Input6}
                  onChange={(e) => {setInput6(e.target.value)}}
                  />            
                </label>
              </div>

              <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <label>
                  <p style={{margin:'1vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>เบอร์ติดต่อ</p>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                  value={Input7}
                  onChange={(e) => {setInput7(e.target.value)}}
                  />            
                </label>
                <label>
                  <p style={{margin:'1vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>อีเมล</p>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                  value={Input8}
                  onChange={(e) => {setInput8(e.target.value)}}
                  />           
                </label>
              </div>
              <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <label>
                  <p style={{margin:'1vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>UserType</p>
                    <Select type="ระดับสิทธิ" name="" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                    value={Input9}
                    onChange={(e) => {setInput9(e.target.value)}}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                    {DorpDownData4?.length &&
                        DorpDownData4.map((e: any, i: number) => {
                        return (
                            <MenuItem key={e.ut_id} value={e.ut_id}>
                            {e.ut_name}
                            </MenuItem>
                        );
                    })}
                    </Select>          
                </label>
                <label>
                  <p style={{margin:'1vh 5vw',borderColor:'black', width:'15vw',fontSize:'18px',fontWeight:'bold'}}>ระดับสิทธิ</p>
                    <Select type="ระดับสิทธิ" name="" style={{margin:'1vh 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} 
                    value={Input10}
                    onChange={(e) => {setInput10(e.target.value)}}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                    {DorpDownData3?.length &&
                        DorpDownData3.map((e: any, i: number) => {
                        return (
                            <MenuItem key={e.ul_id} value={e.ul_id}>
                            {e.ul_name}
                            </MenuItem>
                        );
                    })}
                    </Select>            
                </label>
              </div>
              <div style={{display:'flex',justifyContent:'flex-start  ',alignItems:'center' ,margin:'2.5vh 5vw'}}>
                <p style={{fontSize:'18px',margin:'0vh 1vw'}}>การใช้งาน</p>
                <p style={{fontSize:'18px'}}>Active</p>
                <Checkbox/>
                <p style={{fontSize:'18px'}}>Inactive</p>
                <Checkbox/>
              </div>
              <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Button style={{color:'white', backgroundColor:'#6CDCC0',margin:'2.5vh 2.5vw'}}>
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

export default EditUserDetailPage;
