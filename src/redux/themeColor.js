import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    color:"#f4f4f4"
}

const colorSlicer = createSlice({
    name:"color",
    initialState,
    reducers:{
        primaryColor(state,action){
            state.color ="black";
        },
        secondaryColor(state,action){
            state.color = "red"
        },
        userColor(state,action){
            state.color = action.payload
        },

    }
})

export const {primaryColor , secondaryColor, userColor} = colorSlicer.actions;

export default colorSlicer.reducer;