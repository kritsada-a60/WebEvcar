import React, { Component } from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Background from "../../img/LoginBackground.png";
import Logo from "../../img/Circle.png";
import ButtonLogin from "../../img/BackgroundButtonLogin.png";
import { styled } from '@mui/system';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

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



export interface IRegisterPageProps {}


const RegisterPage: React.FunctionComponent<IRegisterPageProps> = (props) => {

const navigate = useNavigate();

    const navigateLogin = () => {
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

    return (
      <div>
        {/* <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" , width: "78.906vw"}} /> */}
        {/* <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" , width: "78.906vw"}} /> */}
        <img src={Logo} style={{position: 'absolute', zIndex:'2' ,left: '65.469vw', top: '11.019vh',}}/>
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
            top: '38.093vh',
            fontSize:'48px',
            zIndex:'2'
          }}
        >
          ลงทะเบียน
        </Typography>
        <img src={Background} style={{ height: "99.6vh" , width: "78.906vw"}}/>
        <form>
          <label>
            <input type="text" name="username" style={{width:'36.250vw',height:'3.704vh',position: 'absolute', zIndex:'3' ,left: '53.854vw', top: '46vh',borderLeftWidth: '0px',borderRight: '0px', borderTopWidth: '0px',paddingLeft:'10px',fontSize:'24px'}} placeholder="ชื่อผู้ใช้"/>          
          </label>
          <label>
            <input type="text" name="password" style={{width:'36.250vw ',height:'3.704vh',position: 'absolute', zIndex:'3' ,left: '53.854vw', top: '56vh',borderLeftWidth: '0px',borderRight: '0px', borderTopWidth: '0px',paddingLeft:'10px',fontSize:'24px'}} placeholder="อีเมล"/>
          </label>
          <label>
            <input type="text" name="username" style={{width:'36.250vw',height:'3.704vh',position: 'absolute', zIndex:'3' ,left: '53.854vw', top: '66vh',borderLeftWidth: '0px',borderRight: '0px', borderTopWidth: '0px',paddingLeft:'10px',fontSize:'24px'}} placeholder="รหัสผ่าน"/>          
          </label>
          <label>
            <input type="text" name="password" style={{width:'36.250vw ',height:'3.704vh',position: 'absolute', zIndex:'3' ,left: '53.854vw', top: '76vh',borderLeftWidth: '0px',borderRight: '0px', borderTopWidth: '0px',paddingLeft:'10px',fontSize:'24px'}} placeholder="ยืนยันรหัสผ่าน"/>
          </label>
        </form>
        <Button variant="text" style={{color:'gray' ,position: 'absolute', zIndex:'3' ,left: '53.854vw', top: '87.019vh',fontSize:'24px'}}
        onClick={navigateForgotPassword}>
          ลืมรหัสผ่าน?
        </Button>
        <ThemeProvider theme={theme}>
          <Button color="neutral" variant="contained" style={{color:'white' ,position: 'absolute', zIndex:'3' ,left: '78.281vw', top: '87.019vh',fontSize:'24px',borderRadius:'50px',border:'none',width:'227px',height:'52px'}}
          onClick={navigateLogin}>
            เข้าสู่ระบบ
          </Button>
        </ThemeProvider>

        <Button variant="text" style={{color:'white' ,position: 'absolute', zIndex:'3' ,left: '35.250vw', top: '30.741vh',fontSize:'1.563vw'}}
        onClick={navigateLogin}>
          เข้าสู่ระบบ
        </Button>
        <img src={ButtonLogin} style={{position: 'absolute', zIndex:'0',left: '33.250vw', top: '38.667vh'}}/>
        
        
        <Button variant="text" style={{color:'black' ,position: 'absolute', zIndex:'3' ,left: '35.250vw', top: '41.667vh',fontSize:'1.563vw'}}
        onClick={navigateRegister}>
          ลงทะเบียน
        </Button>
      </div>

    );
};

export default RegisterPage;
