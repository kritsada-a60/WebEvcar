import React, { Component } from "react";
import Background from "../img/LoginBackground.png";
import Logo from "../img/Circle.png";
import ButtonLogin from "../img/BackgroundButtonLogin.png";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {


    return (
        <div className="App">
            <header className="App-header">
                <img src={Logo} style={{position: 'absolute', zIndex:'2' ,left: '1257px', top: '220px',}}/>
                <img src={Background} style={{position: 'absolute', zIndex:'0',top:'0'}}/>
                <p style={{zIndex:'3' ,left: '1286px', top: '480px',fontSize:'48px'}}>
                เข้าสู่ระบบ
                </p>
                <p style={{color:'black' ,position: 'absolute', zIndex:'3' ,left: '696px', top: '332px',fontSize:'30px',borderRadius:'50px',border:'none',width:'217px',height:'115px'}}>
                เข้าสู่ระบบ
                </p>
                <img src={ButtonLogin} style={{position: 'absolute', zIndex:'0',left: '676px', top: '324px'}}/>
                
                <p style={{color:'white' ,position: 'absolute', zIndex:'3' ,left: '696px', top: '450px',fontSize:'30px'}}>
                ลงทะเบียน
                </p>
                <form>
                <label>
                    <input type="text" name="username" style={{width:'696px',height:'40px',position: 'absolute', zIndex:'3' ,left: '1034px', top: '654px',borderLeftWidth: '0px',borderRight: '0px', borderTopWidth: '0px',paddingLeft:'10px',fontSize:'24px'}} placeholder="ผู้ใช้งาน"/>          
                </label>
                <label>
                    <input type="text" name="password" style={{width:'696px ',height:'40px',position: 'absolute', zIndex:'3' ,left: '1034px', top: '713px',borderLeftWidth: '0px',borderRight: '0px', borderTopWidth: '0px',paddingLeft:'10px',fontSize:'24px'}} placeholder="รหัสผ่าน"/>
                </label>
                </form>
                <p style={{color:'gray' ,position: 'absolute', zIndex:'3' ,left: '1034px', top: '875px',fontSize:'24px'}}>
                ลืมรหัสผ่าน?
                </p>
                <button style={{color:'white' ,position: 'absolute', zIndex:'3' ,left: '1503px', top: '875px',fontSize:'24px',borderRadius:'50px',border:'none',width:'227px',height:'52px'}}>
                เข้าสู่ระบบ
                </button>
            </header>
        </div>
    );
};

export default HomePage;
