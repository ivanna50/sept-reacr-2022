import React, {memo} from 'react';


const Todos = memo  (({addTodos, todos}) => {
    console.log('todos');

    return (
        <div>
            {todos.map ((todo, index)=><div key={index}>{todo}</div>)}
            <button onClick={addTodos}>addTodo</button>
        </div>
    );
});

export  {Todos};