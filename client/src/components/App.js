import React from 'react'
import Navbar from './Navbar'
import SignIn from './home/SignIn'

import { Routes, Route } from 'react-router-dom'

import { Container } from '@mui/material'


function App() {

  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path='/' element={ <SignIn /> } />
        

      </Routes>
      
    </Container>
  );
}

export default App;
