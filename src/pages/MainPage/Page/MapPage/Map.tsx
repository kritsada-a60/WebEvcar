import React, { Component } from 'react';
import Map from '../../../../img/map.png';

// import React, { useState } from 'react';

import IconCar from "../../../../img/Icon/IconCar.png";
import IconStationGreen from "../../../../img/Icon/IconStation0.png";
import IconStationRed from "../../../../img/Icon/IconStation1.png";
import IconStationGray from "../../../../img/Icon/IconStation2.png";

import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Header from '../../Header';

import { useLoadScript } from '@react-google-maps/api';
import MapGoogle from './GoogleMap';

export interface IMapPageProps {}

const MapPage: React.FunctionComponent<IMapPageProps> = (props) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCruJOFdRW8L4-FX8rXKeqJJMrgCraCtcU' // Add your API key
    });
    return (
        <div>
            <Header />
            {/* <img src={Map} style={{zIndex:'2' ,left: '0vw', top: '0vh',height:'92.25vh',width:'99.9vw'}}/> */}
            {isLoaded ? <MapGoogle /> : null}
        </div>
    );
};

export default MapPage;
