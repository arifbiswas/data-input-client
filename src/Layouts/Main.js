import React from 'react';
import { Outlet } from 'react-router-dom';
import UserDataInput from '../Components/UserDataInput';

const Main = () => {
    return (
        <div className='mt-12'>
            <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
            <UserDataInput></UserDataInput>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;