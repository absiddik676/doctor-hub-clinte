import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Home/NavigationBar/NavigationBar';

const MainLayout = () => {
    return (
        <div>
            <NavigationBar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;