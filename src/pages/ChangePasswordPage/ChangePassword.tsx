import React, { Component } from "react";
import Background from "../../img/LoginBackground.png";
import Logo from "../../img/Circle.png";
import ButtonLogin from "../../img/BackgroundButtonLogin.png";
import { styled } from '@mui/system';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";



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



export interface IChangePasswordPageProps {}


const ChangePasswordPage: React.FunctionComponent<IChangePasswordPageProps> = (props) => {

const [show, setShow] = useState('0');

useEffect(() => {
  // console.log(province);
}, [show]);

    return (
      <div>
        {/* <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" , width: "78.906vw"}} /> */}
        {/* <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" , width: "78.906vw"}} /> */}
        <img src={Logo} style={{position: 'absolute', zIndex:'2' ,left: '65.469vw', top: '17.370vh',}}/>
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
            left: '64.979vw',
            top: '44.444vh',
            fontSize:'48px',
            zIndex:'2'
          }}
        >
          เปลี่ยนรหัสผ่าน
        </Typography>
        <img src={Background} style={{ height: "99.6vh" , width: "78.906vw"}}/>
        {/* <p style={{position: 'absolute', zIndex:'3' ,left: '53.854vw', top: '52.5vh',fontSize:'24px',color:'#7D7D7D'}}>
          เปลี่ยนรหัสผ่านใหม่
        </p> */}
        <>
          {show === '0' ? (
            <>
              <p style={{position: 'absolute', zIndex:'3' ,left: '53.854vw', top: '52.5vh',fontSize:'24px',color:'#7D7D7D'}}>
                เปลี่ยนรหัสผ่านใหม่
              </p>
              <form>
                <label>
                  <input type="text" name="username" style={{width:'36.250vw',height:'3.704vh',position: 'absolute', zIndex:'3' ,left: '53.854vw', top: '60vh',borderLeftWidth: '0px',borderRight: '0px', borderTopWidth: '0px',paddingLeft:'10px',fontSize:'24px'}} placeholder="รหัสผ่าน"/>          
                </label>
                <label>
                  <input type="text" name="password" style={{width:'36.250vw ',height:'3.704vh',position: 'absolute', zIndex:'3' ,left: '53.854vw', top: '70vh',borderLeftWidth: '0px',borderRight: '0px', borderTopWidth: '0px',paddingLeft:'10px',fontSize:'24px'}} placeholder="ยืนยันรหัสผ่าน"/>
                </label>
              </form>
              <ThemeProvider theme={theme}>
                <Button color="neutral" variant="contained" style={{color:'white' ,position: 'absolute', zIndex:'3' ,left: '78.281vw', top: '81.019vh',fontSize:'24px',borderRadius:'50px',border:'none',width:'227px',height:'52px'}}
                onClick={() => {setShow('1')}}
                >
                  ต่อไป
                </Button>
              </ThemeProvider>
            </>
          ) : (
            <p style={{position: 'absolute', zIndex:'3' ,left: '53.854vw', top: '52.5vh',fontSize:'24px'}}>
              คุณได้เปลี่ยนรหัสผ่านสำเร็จ เราจะนำท่านกลับสู่หน้าเข้าสู่ระบบโดยอัตโนมัติ
            </p>
          )}
        </>
        {/* <p style={{position: 'absolute', zIndex:'3' ,left: '53.854vw', top: '52.5vh',fontSize:'24px'}}>
          คุณได้เปลี่ยนรหัสผ่านสำเร็จ เราจะนำท่านกลับสู่หน้าเข้าสู่ระบบโดยอัตโนมัติ 
        </p> */}




      </div>

    );
};

export default ChangePasswordPage;
