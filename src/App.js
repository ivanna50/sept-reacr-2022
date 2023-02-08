
import React, {useReducer} from 'react';

import './App.css';

const App = () => {
     const reducer=(state,action)=> {
         switch (action.type)  {
             case 'INC1':
                 return {...state,count1:state.count1+1}
             case 'DEC1':
                 return {...state,count1:state.count1-1}
             case 'DRE1':
                 return {...state,count1: state.count1+3}
             case 'INC2':
                 return {...state,count2:state.count2+1}
             case 'DEC2':
                 return {...state,count2:state.count2-1}
             default:
                 return {...state}
             case 'RESET':
                 return{count1:0,count2:0}
         }

     };



     const initValue=()=>(
         {count1:0,count2:0}
     );
    const [state,dispatch]=useReducer(reducer ,null, initValue)

  return (
      <div>
           <div>Count1:{state.count1}</div>
          <button onClick={()=>dispatch({type:'INC1'})} >inc</button>
          <button onClick={()=>dispatch({type:'DEC1'})} >dec</button>
          <button onClick={()=>dispatch({type:'DRE1'})} >dre</button>
         .

           <div>Count2:{state.count2}</div>
          <button onClick={()=>dispatch({type:'INC2'})}>inc</button>
          <button onClick={()=>dispatch({type:'DEC2'})}>dec</button>
          <hr/>
          <button onClick={()=>dispatch({type:'RESET',payload:25})}>reset</button>


      </div>
  );
};



export  {App};
