import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../redux";

// import {userServices} from "../../services";
import {User} from "../User/User";

const Users = () => {
    const dispatch=useDispatch();
     const {users,errors,loading}=useSelector(state=>state.users);

    useEffect(()=>{
        // userServices.getAll().then(({data})=>dispatch(userActions.getAll(data)))
        dispatch(userActions.getAll())
    },   []);


    return (
        <div>
            {errors && JSON.stringify(errors)}
            {loading && <h1>Loading-----------</h1>}
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export  {Users};