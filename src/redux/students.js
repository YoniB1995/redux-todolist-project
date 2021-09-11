import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    students:["yoni","dani","yoav"]
}

const studentSlicer = createSlice({
    name:"students",
    initialState,
    reducers:{
        addNewStudent(state,action){
            state.students.push(action.payload)
        },
        resetStudents(state,action){
            state.students = []
        }

    }
})

export const {addNewStudent,resetStudents} = studentSlicer.actions;

export default studentSlicer.reducer;