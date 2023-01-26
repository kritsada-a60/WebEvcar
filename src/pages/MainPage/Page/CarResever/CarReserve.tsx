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

export interface ISCarReservePageProps {}


const CarReservePage: React.FunctionComponent<ISCarReservePageProps> = (props) => {
  
    const LS = localStorage;

    return (
      <div style={{backgroundColor:'#E0F0EC', padding:'0vh 0vw 1vh 0vw'}}>
        <Header/>
        <Body/>
      </div>
    );
};

export default CarReservePage;
