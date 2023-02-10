import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators";
import {useDispatch, useSelector} from "react-redux";
import {carActoins} from "../../redux";


const Form = () => {
    const {register, handleSubmit, reset, setValue, formState: {errors, isValid}} = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    });
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);


    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])
    const save = async (car) => {
        await dispatch(carActoins.create({car}))
        reset()

    };

    const update = async (car) => {
        await dispatch(carActoins.updateById({id: carForUpdate.id, car}))
        reset()

    }

    return (
        <div>

            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                <buton disabled={!isValid}>{carForUpdate ? 'update' : 'create'}</buton>
            </form>
        </div>
    );
};

export {Form};