import React, { Component } from "react";
import Map from "../../../../img/map.png";

import { styled } from '@mui/system';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Typography , TextField, Checkbox} from "@mui/material";
import Header from "../../Header"
import Body from "./Body"

export interface ISAddUserDetailPageProps {}


const AddUserDetailPage: React.FunctionComponent<ISAddUserDetailPageProps> = (props) => {

    return (
        <div style={{backgroundColor:'#E0F0EC'}}>
          <Header/>
          <p style={{margin:'5vh 30vw',justifyContent:'center' ,fontSize:'36px'}}>ข้อมูลผู้ใช้งาน</p>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <form >
              <div style={{margin:'2.5vh 0'}}>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ชื่อกิจการ"
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
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ชื่อผู้ใช้"
                  />          
                </label>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ระดับสิทธิ"
                  />          
                </label>
              </div>
              <div style={{margin:'2.5vh 0'}}>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="รหัสผ่าน"
                  />          
                </label>
                <label>
                  <TextField type="" name="" style={{margin:'0 5vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ยืนยันรหัสผ่าน"
                  />          
                </label>
              </div>
              <div style={{display:'flex',justifyContent:'flex-start  ',alignItems:'center' ,margin:'2.5vh 5vw'}}>
                <p style={{fontSize:'18px',margin:'0vh 1vw'}}>การใช้งาน</p>
                <p style={{fontSize:'18px'}}>Active</p>
                <Checkbox/>
                <p style={{fontSize:'18px'}}>Inactive</p>
                <Checkbox/>
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

export default AddUserDetailPage;
