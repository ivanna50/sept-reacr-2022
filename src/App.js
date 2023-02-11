import './App.css';

import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {AuthRiquireLayout, MainLauout} from "./Layouts";
import {CarsPage} from "./pages/CarsPage/CarsPage";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {RegisterPage} from "./pages/RegisterPage/RegisterPage";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLauout/>}>
                <Route index element={<Navigate to={'cars'}/>}/>

                <Route element={<AuthRiquireLayout/>}>
                    <Route path={'cars'} element={<CarsPage/>}/>
                </Route>

                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'register'} element={<RegisterPage/>}/>
            </Route>
        </Routes>
)

};


export
    {
        App
    }
;
