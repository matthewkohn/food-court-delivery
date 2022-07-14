import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import SignIn from '../pages/SignIn'

import { Routes, Route } from 'react-router-dom'

import { Container, styled } from '@mui/material'
import Menus from '../pages/Menus'


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me")
      .then((res) => {
        if (res.ok) {
          res.json().then((user) => setUser(user))
        } else {
          console.log("Please log in or create an account")
        }
      })
  }, [])

  if (!user) return <SignIn onLogin={setUser} />


  return (
    <AppContainer>
      <Navbar setUser={setUser} />
      <Routes>
        <Route path='/' element={ <Menus /> } />
        

      </Routes>
    </AppContainer>
  );
}

export default App;


const AppContainer = styled(Container)({
  margin: 0,
  width: '100vw'
})