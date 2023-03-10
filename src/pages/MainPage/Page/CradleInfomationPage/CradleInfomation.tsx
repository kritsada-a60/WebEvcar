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

    return (
        <div style={{backgroundColor:'#E0F0EC'}}>
          <Header/>
          <Body/>
        </div>
    );
};

export default CradleInfomationPage;
