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

export interface ISAddUserDetailPageProps {}

const baseURL ="http://54.86.117.200:5000/usertype/list"

const baseURLEdit ="http://54.86.117.200:5000/usertype/add"

const baseURLUpdateData ="http://54.86.117.200:5000/user/info"

const baseURLUpdateEdit ="http://54.86.117.200:5000/usertype/edit"

const AddUserDetailPage: React.FunctionComponent<ISAddUserDetailPageProps> = (props) => {

  const [post, setpost] = useState<MyDataPost[]>([]);

    const [MyIdEdit, setMyIdEdit] = useState('');

    const [FirstData, setFirstData] = useState<MyDataPost[]>([]);

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
      axios.post(baseURLUpdateData,{
        u_id: LS.getItem('idEdit')
      }).then((response) => {
        console.log(response.data)
        // setFirstData(response.data.data[0].ut_name)
        setBname(response.data.data[0].u_name)
        setBemail(response.data.data[0].u_email)
        setBfullname(response.data.data[0].u_fullname)
        setBid(response.data.data[0].u_id)
        setBmoblie(response.data.data[0].u_mobile)
        setBa_name(response.data.data[0].ua_name)
        setBl_name(response.data.data[0].ul_name)
        setBt_name(response.data.data[0].ut_name)

        // setBname2(response.data.data)
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
        console.log("this Bname2",Bname2)
    }, [Bname2]);

    return (
        <div style={{backgroundColor:'#E0F0EC'}}>
          <Header/>
          <p style={{margin:'5vh 30vw',justifyContent:'center' ,fontSize:'36px'}}>ข้อมูลผู้ใช้งาน</p>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <form >
              <div style={{margin:'2.5vh 0'}}>
                <label>
                  <TextField type="ut_name" name="ut_name" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ชื่อกิจการ"
                  value={Bname}
                  onChange={(e) => {setBname(e.target.value)}}
                  />          
                </label>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ประเภทกิจการ"
                  value={Ba_name}
                  onChange={(e) => {setBa_name(e.target.value)}}
                  />            
                </label>
              </div>
              <div style={{margin:'2.5vh 0'}}>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ชื่อ-นามสกุล"
                  value={Bfullname}
                  onChange={(e) => {setBfullname(e.target.value)}}
                  />           
                </label>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="เบอร์ติดต่อ"
                  value={Bmoblie}
                  onChange={(e) => {setBmoblie(e.target.value)}}
                  />           
                </label>
              </div>
              <div style={{margin:'2.5vh 0'}}>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="อีเมล"
                  value={Bemail}
                  onChange={(e) => {setBemail(e.target.value)}}
                  />            
                </label>
              </div>

              <div style={{margin:'2.5vh 0'}}>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ชื่อผู้ใช้"
                  value={Bid}
                  onChange={(e) => {setBid(e.target.value)}}
                  />            
                </label>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ระดับสิทธิ"
                  value={Bt_name}
                  onChange={(e) => {setBt_name(e.target.value)}}
                  />           
                </label>
              </div>
              <div style={{margin:'2.5vh 0'}}>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="รหัสผ่าน"
                  // value={Bname2}
                  // onChange={(e) => {(e.target.value)}}
                  />           
                </label>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ยืนยันรหัสผ่าน"
                  // value={Bname2}
                  // onChange={(e) => {(e.target.value)}}
                  />            
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

export default AddUserDetailPage;
