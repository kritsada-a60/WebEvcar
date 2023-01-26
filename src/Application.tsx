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
import AddCarDetailPage from './pages/MainPage/Page/CarDetailPage/AddCar';
import EditCarDetailPage from './pages/MainPage/Page/CarDetailPage/EditCar';

import CustomerPage from './pages/MainPage/Page/CustomerPage/Customer';
import AddCustomerPage from './pages/MainPage/Page/CustomerPage/AddCustomer';
import EditCustomerPage from './pages/MainPage/Page/CustomerPage/EditCustomer';
import DeleteCustomerPage from './pages/MainPage/Page/CustomerPage/DeleteCustomer';

import CreditPage from './pages/MainPage/Page/Credit/Credit';
import AddCreditPage from './pages/MainPage/Page/Credit/AddCredit';

import CarReseverPage from './pages/MainPage/Page/CarResever/CarReserve';
import AddCarReseverPage from './pages/MainPage/Page/CarResever/AddCarReserve';

import StationPage from './pages/MainPage/Page/StationPage/CradleInfomation';
import AddStationPagePage from './pages/MainPage/Page/StationPage/AddCradle';
import EditStationPagePage from './pages/MainPage/Page/StationPage/EditCradle';



import StationInformationPage from './pages/MainPage/Page/StationInformationPage/StationInformation';
import AddStationInformationPage from './pages/MainPage/Page/StationInformationPage/Addstation';
import UserDetailPage from './pages/MainPage/Page/UserDetailPage/UserDetail';
import AddUserDetailPage from './pages/MainPage/Page/UserDetailPage/AddUserDetail';
import EditUserDetailPage from './pages/MainPage/Page/UserDetailPage/EditUserDetail';

import ServicePage from './pages/MainPage/Page/Service/Service';
import AddServicePage from './pages/MainPage/Page/Service/AddService';
import EditServicePage from './pages/MainPage/Page/Service/EditService';


import AdminPage from './pages/MainPage/Page/AdminPage/AdminPage';

import MainPage from '../src/pages/MainPage/Header';
import BodyPage from '../src/pages/MainPage/Body';


export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
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
                <Route path="addcardetail" element={<AddCarDetailPage />} />
                <Route path="editcardetail" element={<EditCarDetailPage />} />

                <Route path="credit" element={<CreditPage />} />
                <Route path="addcredit" element={<AddCreditPage />} />

                <Route path="carresever" element={<CreditPage />} />
                <Route path="addcarresever" element={<AddCreditPage />} />

                <Route path="station" element={<StationPage />} />
                <Route path="addstation" element={<AddStationPagePage />} />
                <Route path="editstation" element={<EditStationPagePage />} />


                <Route path="customer" element={<CustomerPage />} />
                <Route path="addcustomer" element={<AddCustomerPage />} />
                <Route path="editcustomer" element={<EditCustomerPage />} />
                <Route path="deletecustomer" element={<DeleteCustomerPage />} />
                {/* <Route path="deletecustomer" element={<CustomerPage />} /> */}

                {/* <Route path="stationinformation" element={<StationInformationPage />} />
                <Route path="addstationinformation" element={<AddStationInformationPage />} /> */}

                <Route path="userdetail" element={<UserDetailPage />} />
                <Route path="adduserdetail" element={<AddUserDetailPage />} />
                <Route path="edituserdetail" element={<EditUserDetailPage />} />
                
                <Route path="service" element={<ServicePage />} />
                <Route path="addservice" element={<AddServicePage />} />
                <Route path="editservice" element={<EditServicePage />} />
                

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
