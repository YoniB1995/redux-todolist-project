import React from 'react';
import Homepage from './Components/Pages/Homepage';
import styled from 'styled-components';

const AppBody = styled.div` 
margin:0;
padding:0;
box-sizing:border-box;
background-image: url("images/backgroundImg.jpeg");
background-size: cover;
background-attachment: fixed;

`

function App() {
  return (
    <AppBody>
      <Homepage/>
    </AppBody>
  );
}

export default App;
