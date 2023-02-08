import {createSlice} from "@reduxjs/toolkit";

const initialState={
    cars:[
        {id:1, brand:'BMW'},
        {id:2, brand:'KIA'},
        {id:3, brand:'AUDI'},
    ]
}
 const carSlice=createSlice({
    name:'carSlice',
    initialState
});

const   carReducer=carSlice.reducer;

export default carReducer;