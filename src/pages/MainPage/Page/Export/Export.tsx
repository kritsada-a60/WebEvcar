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
import Body2 from "./MyExport"


export interface ISExportPageProps {}


const ExportPage: React.FunctionComponent<ISExportPageProps> = (props) => {
  
    const LS = localStorage;

    return (
      <div style={{backgroundColor:'#E0F0EC', padding:'0vh 0vw 1vh 0vw'}}>
        {/* <Header/> */}
        <Body2/>
      </div>
    );
};

export default ExportPage;
