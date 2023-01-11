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

export interface ICradleInfomationPageProps {}


const CradleInfomationPage: React.FunctionComponent<ICradleInfomationPageProps> = (props) => {
  
    const LS = localStorage;

    const LVID = LS.getItem('LVUSER');
    const LVTYPE = LS.getItem('LVTYPE');
    const LVTYPEID = LS.getItem('LVTYPEUSER');

    // console.log(LVID,"ctm")
    // console.log(LVTYPE,"ut")
    // console.log(LVTYPEID,"ul")
    return (
        <div>
          {LVID != null && LVID == "2" ?(
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

export default CradleInfomationPage;
