import {FC, ReactNode} from "react";
import {useNavigate} from "react-router-dom";
import {ICar} from "../interfaces";


interface IProps {
    car: ICar;
    children?: ReactNode;


}

const Car: FC<IProps> = ({car}) => {
    const {id, brand, price, year} = car;
    const navigate = useNavigate();
    return (
        <div>
            <div>id:{id}</div>
            <div><h3>brand:{brand}</h3></div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={() => navigate(id.toString(),{state:car})}>GetDetails</button>
            <button >delete</button>
        </div>
    );
};


export {Car};