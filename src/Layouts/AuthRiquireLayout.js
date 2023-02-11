import React from 'react';
import {Outlet} from "react-router-dom";

const AuthRiquireLayout = () => {
    return (
        <div>
            AuthRiquireLayout
            <Outlet/>
        </div>
    );
};

export {AuthRiquireLayout};