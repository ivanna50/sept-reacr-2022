import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carActoins} from "../../redux";

const Cars = () => {
     const {cars}=useSelector(state=>state.cars);
     const dispatch=useDispatch();

     useEffect(()=>{
         dispatch(carActoins.getAll())

         },  [dispatch])
    return (
        <div>
            {cars.map(car=><Cars key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};