import React, { useEffect, useState } from 'react'
// import Navbar from './Navbar'
import SignIn from '../pages/SignIn'

// import { Routes, Route } from 'react-router-dom'

import { Container } from '@mui/material'


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me")
      .then((res) => {
        if (res.ok) {
          res.json().then((user) => setUser(user))
        }
      })
  }, [])

  if (!user) return <SignIn onLogin={setUser} />


  return (
    <Container>
      {/* <Navbar /> */}
      {/* <Routes>
        <Route path='/' element={ <SignIn onLogin={setUser} /> } />
        

      </Routes> */}
      <h1>YOU DID IT</h1>
    </Container>
  );
}

export default App;
