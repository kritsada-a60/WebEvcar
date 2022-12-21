import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutComponent from './components/Layout';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import TestPage from './pages/Test';
import LoginPage from '../src/pages/LoginPage/Login';
import RegisterPage from '../src/pages/RegisterPage/Register';
import ForgotPasswordPage from '../src/pages/ForgotPasswordPage/ForgotPassword';
import ChangePasswordPage from '../src/pages/ChangePasswordPage/ChangePassword';


import MapPage from './pages/MainPage/Page/MapPage/Map';
import HistoryPage from './pages/MainPage/Page/HistoryPage/History';
import CarDetailPage from './pages/MainPage/Page/CarDetailPage/CarDetail';
import CradleInfomationPage from './pages/MainPage/Page/CradleInfomationPage/CradleInfomation';
import StationInformationPage from './pages/MainPage/Page/StationInformationPage/StationInformation';
import AddStationInformationPage from './pages/MainPage/Page/StationInformationPage/Addstation';
import UserDetailPage from './pages/MainPage/Page/UserDetailPage/UserDetail';
import AddUserDetailPage from './pages/MainPage/Page/UserDetailPage/AddUserDetail';

import AdminPage from './pages/MainPage/Page/AdminPage/AdminPage';

import MainPage from '../src/pages/MainPage/Header';
import BodyPage from '../src/pages/MainPage/Body';


export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login">
                    <Route index element={<LoginPage />} />
                    {/* <Route path=":number" element={<AboutPage />} /> */}
                </Route>
                <Route path="register">
                    <Route index element={<RegisterPage />} />
                </Route>
                <Route path="forgetpassword">
                    <Route index element={<ForgotPasswordPage />} />
                </Route>
                <Route path="changepassword">
                    <Route index element={<ChangePasswordPage />} />
                </Route>
                <Route path="test" element={<TestPage />} />
                <Route path="mainpage" element={<MainPage />} />
                <Route path="layout" element={<LayoutComponent />}>
                    <Route index element={<AboutPage />} />
                    <Route path=":number" element={<AboutPage />} />
                </Route>

                <Route path="map" element={<MapPage />} />
                <Route path="history" element={<HistoryPage />} />
                <Route path="cardetail" element={<CarDetailPage />} />
                <Route path="cradleinfomation" element={<CradleInfomationPage />} />

                <Route path="stationinformation" element={<StationInformationPage />} />
                <Route path="addstationinformation" element={<AddStationInformationPage />} />

                <Route path="userdetail" element={<UserDetailPage />} />
                <Route path="adduserdetail" element={<AddUserDetailPage />} />

                <Route path="adminpage" element={<AdminPage />} />

                <Route path="body" element={<BodyPage />}>
                    <Route index element={<BodyPage />} />
                    <Route path=":nametext" element={<BodyPage />} />
                </Route>


                
            </Routes>
        </BrowserRouter>
    );
};

export default Application;
