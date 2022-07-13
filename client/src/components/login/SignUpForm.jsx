import React, { useState } from 'react'
import { Button, styled, TextField } from '@mui/material'

const SignUpForm = ({ onLogin }) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    password_confirmation: '',
    admin: false
  })
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  const handleUserInput = (e) => {
    const inputName = e.target.name
    setUser({
      ...user, 
      [inputName]: e.target.value
    })
  }
  
  const handleLogin = (e) => {
    e.preventDefault()
    setErrors([])
    setIsLoading(true)
    // fetch POST to /users
    fetch('/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
    .then((res) => {
      setIsLoading(false)
      if (res.ok) {
        res.json().then((data) => onLogin(data))
      } else {
        res.json().then((err) => setErrors(err.errors))
      }
    })
  }
    
  return (
    <>
      <Credential 
        autoFocus 
        required 
        label="username"
        name="username"
        type="username"
        value={user.username}
        onChange={(e) => handleUserInput(e)}
      />
      <Credential 
        required 
        label="password"
        name="password"
        type="password"
        value={user.password}
        onChange={(e) => handleUserInput(e)}
      />
      <Credential 
        required 
        label="confirm password"
        name="password_confirmation"
        type="password"
        value={user.password_confirmation}
        onChange={(e) => handleUserInput(e)}
      />
      <SubmitBtn size="large" variant="solid">Sign Up</SubmitBtn>
    </>
  )
}

export default SignUpForm


const Credential = styled(TextField)({
  background: '#DDC',
  borderRadius: '5px',
  margin: '10px auto'
})

const SubmitBtn = styled(Button)({
  color: '#DDC'
})