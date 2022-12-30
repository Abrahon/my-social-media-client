import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Component/Component/Home/Home';
import Media from '../Component/Component/Media/Media';
import Navbar from '../Component/Component/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet>
               
            </Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;