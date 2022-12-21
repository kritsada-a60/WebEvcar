import React, { Component } from "react";
import Map from "../../../../img/map.png";

import { styled } from '@mui/system';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Typography , TextField} from "@mui/material";
import Header from "../../Header"
import Body from "./Body"

export interface ISAddstationPageProps {}


const AddstationPage: React.FunctionComponent<ISAddstationPageProps> = (props) => {

    return (
        <div style={{backgroundColor:'#E0F0EC'}}>
          <Header/>
          <p style={{margin:'5vh 30vw',justifyContent:'center' ,fontSize:'36px'}}>เพิ่มสถานี</p>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <form >
              <div style={{margin:'2.5vh 0'}}>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="เลขที่กิจการ"
                  />          
                </label>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ประเภทกิจการ"
                  />          
                </label>
              </div>
              <div style={{margin:'2.5vh 0'}}>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ชื่อ-นามสกุล"
                  />          
                </label>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="เบอร์ติดต่อ"
                  />          
                </label>
              </div>
              <div style={{margin:'2.5vh 0'}}>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="อีเมล"
                  />          
                </label>
              </div>

              <div style={{margin:'2.5vh 0'}}>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'40vw'}} placeholder="ที่อยู่"
                  />          
                </label>
              </div>

              <div style={{margin:'2.5vh 0'}}>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'10vw'}} placeholder="รหัสไปรษณีย์"
                  />          
                </label>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'10vw'}} placeholder="จังหวัด"
                  />          
                </label>
              </div>
              <div style={{margin:'2.5vh 0'}}>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'10vw'}} placeholder="ธนาคาร"
                  />          
                </label>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'10vw'}} placeholder="เลขบัญชี"
                  />          
                </label>
              </div>
              <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Button style={{color:'white', backgroundColor:'#6CDCC0',margin:'2.5vh 2.5vw'}}>
                  บันทึก
                </Button>
                <Button style={{color:'white', backgroundColor:'#FF5A5A',margin:'2.5vh 2.5vw'}}>
                  ยกเลิก
                </Button>
              </div>
            </form>
          </div>
        </div>
    );
};

export default AddstationPage;
