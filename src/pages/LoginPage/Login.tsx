import React, { useState , useEffect } from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Background from "../../img/LoginBackground.png";
import Logo from "../../img/Circle.png";
import ButtonLogin from "../../img/BackgroundButtonLogin.png";
import { styled } from '@mui/system';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Typography , TextField , Alert} from "@mui/material";
import axios from "axios";


const theme = createTheme({
  palette: {
    neutral: {
      main: '#65D7BA',
      contrastText: '#fff',
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}



export interface ILoginPageProps {}




const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {

  const navigate = useNavigate();

  const LS = localStorage;

  const navigateLoginPage = () => {
    navigate('/login');
  };

    const navigateMain = () => {
    navigate('/map');
  };

    const navigateRegister = () => {
    navigate('/register');
  };

    const navigateForgotPassword = () => {
    navigate('/forgetpassword');
  };

    const navigateChangePassword = () => {
    navigate('/changepassword');
  };

  const [values, setValues] = useState({
    uname: "",
    upass: "",
    // showPass: false,
  });

  const [checklogin, setchechlogin] = useState(null);
  
  const [alertlogin, setalertlogin] = useState("0");


  useEffect(() => {
      console.log("id",values.uname);
      console.log("pass",values.upass);
      // console.log(values)
    }, [values]);

  useEffect(() => {
    console.log(alertlogin,"alert")
  }, [alertlogin]);

  useEffect(() => {
    if (checklogin == true){
      // console.log("gologin")
      navigateMain();
    } else {
    if (alertlogin == "1") {
      // <Alert severity="error">ผู้ใช้งาน หรือ พาสเวิร์คผิด กรุณากรอกใหม่</Alert>
      alert("ผู้ใช้งาน หรือ พาสเวิร์คผิด กรุณากรอกใหม่")
      // setalertlogin("0")
      // setchechlogin(null)
    }
    if (checklogin == true && alertlogin == "1"){
      setchechlogin(null)
    }
    }
    console.log(checklogin,"hi")
  }, [checklogin])

  function CheckLogin() {
    if (checklogin == true){
      // console.log("gologin")
      navigateMain();
    } else {
    if (alertlogin == "1") {
      // <Alert severity="error">ผู้ใช้งาน หรือ พาสเวิร์คผิด กรุณากรอกใหม่</Alert>
      // alert("ผู้ใช้งาน หรือ พาสเวิร์คผิด กรุณากรอกใหม่")
      setalertlogin("0")
      // setchechlogin(null)
    }
    if (checklogin == true && alertlogin == "1"){
      setchechlogin(null)
      // setalertlogin("0")
    }
    }
    console.log(checklogin,"hi")


  }

  // useEffect(() => {
  //   axios
  //     .post("http://54.86.117.200:5000/car/one", {
  //       c_id: "2"
  //     })
  //     .then((res) => {
  //       console.log(res.data.data[0]);
  //       // console.log("ok");
  //     })
  //     .catch((err) => console.error(err));
  // }, [])


  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(values)
    setalertlogin("1")
    axios
      .post("http://54.86.117.200:5000/user/login", {
        uname: values.uname,
        upass: values.upass,
      })
      .then((res) => {
        LS.setItem('LVUSER', res.data.data.ctmt_id);
        LS.setItem('LVTYPE', res.data.data.ut_id);
        LS.setItem('LVTYPEUSER', res.data.data.ul_id);
        console.log(res.data);
        console.log(res.data.success);
        setchechlogin(res.data.success)
        if(res.data.success == "false"){
          alert("ผู้ใช้งาน หรือ พาสเวิร์คผิด กรุณากรอกใหม่")
        }
        
      })
      .catch((err) => console.error(err));
  };

    return (
      <div>
        {/* <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" , width: "78.906vw"}} /> */}
        {/* <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" , width: "78.906vw"}} /> */}
        <img src={Logo} style={{position: 'absolute', zIndex:'2' ,left: '65.469vw', top: '20.370vh',}}/>
        {/* <p  style={{position: 'absolute',zIndex:'3' ,left: '66.979vw', top: '44.444vh',fontSize:'48px'}}>
          เข้าสู่ระบบ
        </p> */}
        <Typography
          variant="h1"
          align="left"
          color="grey.700"
          sx={{
            backgroundcolor: "primary",
            backgroundImage: `linear-gradient(45deg, #33B192, #6CDCC0)`,
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            position: 'absolute',
            left: '66.979vw',
            top: '47.444vh',
            fontSize:'48px',
            zIndex:'2'
          }}
          
        >
          เข้าสู่ระบบ
        </Typography>
        <img src={Background} style={{ height: "99.95vh" , width: "78.906vw"}}/>
        <form onSubmit={handleSubmit}>
          <label>
            <TextField type="uname" name="username" style={{width:'36.250vw',height:'3.704vh',position: 'absolute', zIndex:'3' ,left: '53.854vw', top: '60vh',borderLeftWidth: '0px',borderRight: '0px', borderTopWidth: '0px',paddingLeft:'10px',fontSize:'24px' ,color :'black'}} placeholder="ผู้ใช้งาน"
            onChange={(e) => setValues({ ...values, uname: e.target.value })}/>          
          </label>
          <label>
            <TextField type="password" name="password" style={{width:'36.250vw ',height:'3.704vh',position: 'absolute', zIndex:'3' ,left: '53.854vw', top: '70vh',borderLeftWidth: '0px',borderRight: '0px', borderTopWidth: '0px',paddingLeft:'10px',fontSize:'24px',color :'black'}} placeholder="รหัสผ่าน" 
            onChange={(e) => setValues({ ...values, upass: e.target.value })}/>
          </label>
          <ThemeProvider theme={theme}>
            <Button color="neutral" variant="contained" style={{color:'white' ,position: 'absolute', zIndex:'3' ,left: '78.281vw', top: '81.019vh',fontSize:'24px',borderRadius:'50px',border:'none',width:'227px',height:'52px'}}
            type="submit"
            >
              เข้าสู่ระบบ
            </Button>
          </ThemeProvider>

        </form>
        <Button variant="text" style={{color:'black' ,position: 'absolute', zIndex:'3' ,left: '35.250vw', top: '30.741vh',fontSize:'1.563vw'}}
        onClick={navigateLoginPage}
        >
          เข้าสู่ระบบ
        </Button>
        <Button variant="text" style={{color:'gray' ,position: 'absolute', zIndex:'3' ,left: '53.854vw', top: '81.019vh',fontSize:'24px'}}
        onClick={navigateForgotPassword}>
          ลืมรหัสผ่าน?
        </Button>



        <img src={ButtonLogin} style={{position: 'absolute', zIndex:'0',left: '33.250vw', top: '27.741vh'}}/>
        
        
        <Button variant="text" style={{color:'white' ,position: 'absolute', zIndex:'3' ,left: '35.250vw', top: '41.667vh',fontSize:'1.563vw'}}
        onClick={navigateRegister}
        >
          ลงทะเบียน
        </Button>
      </div>

    );
};

export default LoginPage;
