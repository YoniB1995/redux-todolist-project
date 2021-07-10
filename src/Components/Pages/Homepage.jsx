import React from 'react'
import Input from '../Features/Input'
import styled from 'styled-components'
import TodoItem from '../Features/TodoItem'

const HomeStyle = styled.div` 
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
height:100vh;
width:100vw;
`

const Container= styled.div`
padding:32px 0px;
border: 1px solid black;
height:300px;
width:300px;
display:flex;
flex-direction:column;
align-items: center;
background-color: rgb(232,234,237);
`

const ToDoContainer = styled.div` 
flex:1;
width:100%;
display:flex;
flex-direction: column;
align-items: center;
`

export default function Homepage() {
    const todoList = [{
            item:'todo',
            done:false,
            id:546546456},
            {
            item:'todo2',
            done:true,
            id:454545644}
        ]
    return (
        <HomeStyle>
            <Container>
                <ToDoContainer>
                    {todoList.map(item=>
                        <TodoItem 
                        name={item.item} 
                        done={item.done}
                        id={item.id} />
                    )}
                </ToDoContainer>
            <Input/>
            </Container>
        </HomeStyle>
    )
}
