import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    count : 5,
    test:"new"
};

const counterSlice = createSlice({
    name:'counter',
   initialState,
    reducers:{
        increment(state,action){
            state.count = state.count + 1;
        },
        decrement(state,action){
            state.count = state.count - 1;
        },
        addNew(state,action){
            state.test = "old"
        }
    }
})

export const { increment, decrement,addNew} = counterSlice.actions

export default counterSlice.reducer