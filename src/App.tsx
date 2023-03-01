import {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";

// import {Cars} from "./components";
import { CarDetails } from "./components/CarDetails";
import {MainLayout} from "./layuots";
import {CarPage} from "./pages";

const App: FC = () => {
    return (

        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/cars'}/>}/>
                <Route path={'cars'} element={<CarPage/>}>
                    <Route path={':id'} element={<CarDetails/>}/>
                </Route>
            </Route>

        </Routes>

    );
};


export {App};