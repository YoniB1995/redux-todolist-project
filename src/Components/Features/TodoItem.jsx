import React, {useState} from 'react'
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';
import { setCheck } from './todoSlice';

const ToDoItemStyle = styled.div` 
display:flex;
align-items:center;
width:80%;
color:black;
background-color:white;
margin:6px 4px;
height:40px;
border-radius:12px;
p{
    flex:1;
}
`

export default function TodoItem({name,done,id}) {
    const [checked, setChecked] = useState(true);
    const dispatch = useDispatch();
  const handleChange = (event) => {
      dispatch(setCheck(id))
    setChecked(event.target.checked);
  };

  const stylePara = {
      textDecoration:"lineThrough"
  }

    return (
        <ToDoItemStyle>
            <Checkbox
            color="primary"
        checked={done}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
            <p>{name}</p>
        </ToDoItemStyle>
    )
}
