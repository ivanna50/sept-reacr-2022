import React, {useCallback, useState} from 'react';
import {Todos} from "./Todos";

const UseCallBack = () => {
    const [todos,setTodos] =  useState([]);
   const [count,setCount]   =useState(0);

   const addTodos= useCallback(()=>{
        setTodos(prevState =>[...prevState,'new Todos'])

   },[])


    return (
        <div>
            <Todos todos={todos} addTodos={addTodos}/>
            <div>count:{count}</div>
            <button onClick={()=>setCount(prevState => (prevState+1))}>countE</button>
        </div>
    );
};

export  {
    UseCallBack,
};