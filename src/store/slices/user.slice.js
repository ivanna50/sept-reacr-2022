import {createSlice} from "@reduxjs/toolkit";

const initialState={
    users:[
        {id:1, name:'Olia'},
        {id:2, name:'Koli'},
        {id:3, name:'Anton'},
    ]
}
const userSlice=createSlice({
    name:'userSlice',
    initialState
});

const   userReducer=userSlice.reducer;

export default userReducer;