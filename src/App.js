import React,{useState} from 'react';
import Homepage from './Components/Pages/Homepage';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {addNewStudent, resetStudents} from './redux/students'

const AppBody = styled.div` 
margin:0;
padding:0;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items: center;
flex-direction: column;
height:100vh;
width:100vw;

`

function App() {
  // const {students} = useSelector(state => state.student)
  // const dispatch = useDispatch();
  // const [student,setStudent] = useState("");

  return (
    <AppBody>
      {/* {students.map((student)=><h1>{student}</h1>)}
      <input type="text" value={student} onChange={(e)=> setStudent(e.target.value)} />
      <button onClick={()=> dispatch(addNewStudent(student))}>Add Student</button>
      <button onClick={()=> dispatch(resetStudents())}>Reset All Students</button>
      <button onClick={()=> console.log(students)}>Get Students</button> */}
      {/* <Homepage/> */}
      <p>learn react</p>
    </AppBody>
  );
}

export default App;
