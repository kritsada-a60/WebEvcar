import React, { Component , useEffect , useState } from "react";
import Map from "../../../../img/map.png";

import IconCar from "../../../../img/Icon/IconCar.png";
import IconStation_Green from "../../../../img/Icon/IconStation0.png";
import IconStation_Red from "../../../../img/Icon/IconStation1.png";
import IconStation_Gray from "../../../../img/Icon/IconStation2.png";

import { styled } from '@mui/system';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Header from "../../Header"
import axios from "axios";

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


export interface IMapPageProps {}

const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
        <GoogleMap defaultZoom={8} defaultCenter={{ lat: 13.747238, lng: 100.550704 }}>
            <Marker position={{ lat: 13.747238, lng: 100.550704 }} 
             icon={{
                  url: IconCar,
                  // anchor: new google.maps.Point(17, 46),
                  // scaledSize: new google.maps.Size(37, 37)
              }}
            />
            {/* <Marker position={{ lat: 13.747238, lng: 100.550704 }} icon={{}} /> */}
        </GoogleMap>
    ))
);


const MapPage: React.FunctionComponent<IMapPageProps> = (props) => {

    return (
        <div>
          <Header/>
             {/* <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCruJOFdRW8L4-FX8rXKeqJJMrgCraCtcU&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `800px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            /> */}
        </div>
    );
};

export default MapPage;
