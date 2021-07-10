import React , {useState} from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { saveTodo } from './todoSlice'

const FormStyle = styled.div` 

display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
border-radius:25px;
padding-bottom: 0px;
height:50%;

`

const InputStyle = styled.input` 
border: none;
:focus{
    outline: none;
}
`

const ButtonStyle = styled.button` 
background-image: url("images/backgroundImg.jpeg");
border-radius:5px;
border:none;
:hover{
    cursor: pointer;
    opacity:0.5;
}
`

export default function Input() {
    const [text,setText] = useState("");
    const dispatch = useDispatch()
    const addToDo = ()=> {
        dispatch(saveTodo({
            item:text,
            done:false,
            id:Date.now()
    }))}
    return (
        <FormStyle>
            
            <label htmlFor="">Add Note:
                <InputStyle type="text" name="" value={text} onChange={(e)=>{setText(e.target.value)}}/>
            </label>
            <ButtonStyle onClick={addToDo}>Click</ButtonStyle>
            
        </FormStyle>
    )
}
