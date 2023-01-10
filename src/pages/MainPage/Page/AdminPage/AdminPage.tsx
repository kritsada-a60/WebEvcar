import React, { Component } from "react";
import Map from "../../../../img/map.png";

import { styled } from '@mui/system';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Header from "../../Header"
import Body from "./Body"
import useNavigate from 'react-router-dom';

export interface IAdminPageProps {}


const AdminPage: React.FunctionComponent<IAdminPageProps> = (props) => {

    return (
        <div style={{backgroundColor:'#E0F0EC'}}>
          <Header/>
          <div style={{display:'block',justifyContent:'center',alignItems:'center'}}>
            <div style={{margin:'2.5vh 2.5vw'}}>
              <Button style={{color:'black',width:'90vw', backgroundColor:'white',padding:'1vw'}}>
                ตั้งค่า
              </Button>
            </div>
          </div>

          <div style={{display:'block',justifyContent:'center',alignItems:'center'}}>
            <div style={{margin:'2.5vh 2.5vw'}}>
              <Button style={{color:'black',width:'90vw', backgroundColor:'white',padding:'1vw',margin:'0 0 2.5vh 0'}}>
                ออกจากระบบ
              </Button>
            </div>
          </div>
        </div>
    );
};

export default AdminPage;
