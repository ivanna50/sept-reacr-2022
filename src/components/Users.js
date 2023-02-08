import React from 'react';
import {useSelector} from "react-redux";


const Users = () => {
    const {users} = useSelector(store =>store.user);
    return (
        <div>
            {users.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    );
};

export  {Users};