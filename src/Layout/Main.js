import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import CustomFooter from '../components/Footer/Footer';


const Main = () => {
    return (
        <div className='main'>
            <Header />
            <Outlet />
            <CustomFooter />
        </div>
    );
};

export default Main;