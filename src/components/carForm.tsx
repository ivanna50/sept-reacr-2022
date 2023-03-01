import { FC } from "react";
import {SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../hooks";
import {ICar} from '../interfaces';
import { carActions } from "../redux";


const CarForm:FC = () => {

    const{reset ,handleSubmit,register } =useForm<ICar>();

     const dispatch=useAppDispatch();

    const save:SubmitHandler<ICar>= async (car:ICar)=>{
       await dispatch(carActions.create({car}))
        reset()

    };
    return (
       <form onSubmit={handleSubmit(save)}>
           <input type="text" placeholder={'brand'} {...register('brand')}/>
           <input type="text" placeholder={'year'} {...register('year',{valueAsNumber :true})}/>
           <input type="text" placeholder={'price'} {...register('price',{valueAsNumber :true})}/>
           <button >save</button>

       </form>
    );
};



export  {CarForm};