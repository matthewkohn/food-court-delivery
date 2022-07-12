import { Box, Button, styled, TextField } from '@mui/material'
import React, { useState } from 'react'

const SignIn = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    password_confirmation: ''
  })
  console.log(user)

  const handleUserInput = (e) => {
    const inputName = e.target.name
    setUser({
      ...user, 
      [inputName]: e.target.value
    })
  }

  return (
    <SignInContainer component="form">

      <h1>Sign Up to Order</h1>
      <Credential 
        autoFocus 
        required 
        label="username"
        name="username"
        type="username"
        value={user.username}
        onChange={handleUserInput}
      />
      <Credential 
        required 
        label="password"
        name="password"
        type="password"
        value={user.password}
        onChange={handleUserInput}
      />
      <Credential 
        required 
        label="confirm password"
        name="password_confirmation"
        type="password"
        value={user.password_confirmation}
        onChange={handleUserInput}
      />
      <SubmitBtn size="large" variant="solid">Submit</SubmitBtn>
      

    </SignInContainer>
  )
}

export default SignIn

const SignInContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  textAlign: 'center',
  width: 500,
  height: 500,
  borderRadius: '20px',
  margin: '150px auto',
  backgroundColor: 'darkgreen',
  '&:hover': {
    backgroundColor: 'green',
    opacity: [0.9, 0.8, 0.7]
  }
})

const Credential = styled(TextField)({
  background: '#DDC',
  borderRadius: '5px',
  margin: '10px auto 50px'
})

const SubmitBtn = styled(Button)({

})