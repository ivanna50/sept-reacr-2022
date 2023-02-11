import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components";

const MainLauout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLauout};