import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carActoins} from "../../redux";
import {useSearchParams} from "react-router-dom";
import {Car} from "../Car/Car";

const Cars = () => {
    const {cars, prev, next} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});


    useEffect(() => {
        dispatch(carActoins.getAll({page: query.get('page')}))
    }, [dispatch, query])


    return (
        <div>
            <div>
                <button disabled={!prev} onClick={()=>setQuery(query => ({page: +query.get('page') - 1}))}>prev
                </button>
                <button disabled={!next} onClick={()=>setQuery(query => ({page: +query.get('page') + 1}))}>next
                </button>
            </div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};