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

export interface IUserDetailPageProps {}


const UserDetailPage: React.FunctionComponent<IUserDetailPageProps> = (props) => {

    const LS = localStorage;

    const LVID = LS.getItem('LVUSER');
    const LVTYPE = LS.getItem('LVTYPE');
    const LVTYPEID = LS.getItem('LVTYPEUSER');

    // console.log(LVID)
    // console.log(LVTYPE)
    // console.log(LVTYPEID)
    return (
        <div>
          {LVTYPE && LVTYPEID != null && LVTYPE == "2" || LVTYPEID != "1" ?(
            <></>
          ) : (
            <div style={{backgroundColor:'#E0F0EC', padding:'0vh 0vw 1vh 0vw'}}>
              <Header/>
              <Body/>
            </div>
          )}
        </div>
    );
};

export default UserDetailPage;
