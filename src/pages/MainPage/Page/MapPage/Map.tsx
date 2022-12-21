import React, { Component } from "react";
import Map from "../../../../img/map.png";

import { styled } from '@mui/system';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Header from "../../Header"


export interface IMapPageProps {}


const MapPage: React.FunctionComponent<IMapPageProps> = (props) => {

    return (
        <div>
          <Header/>
          <img src={Map} style={{zIndex:'2' ,left: '0vw', top: '0vh',height:'92.25vh',width:'99.9vw'}}/>
        </div>
    );
};

export default MapPage;
