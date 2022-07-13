import React, { useState } from 'react'
import { Button, FormControl, styled, TextField } from '@mui/material'
import Error from './Error'

const LoginForm = ({ onLogin }) => {
  const [user, setUser] = useState({
    username: '',
    password: ''
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
    setIsLoading(true)
    // fetch POST to /sessions
    fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
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
    <FormControl variant="standard" onSubmit={handleLogin}>
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
      <SubmitBtn size="large" variant="outline">Log In</SubmitBtn>
      {errors.map((err) => (
        <Error key={err}>{err}</Error>
      ))}

    </FormControl>
  )
}

export default LoginForm


const Credential = styled(TextField)({
  background: '#DDC',
  borderRadius: '5px',
  margin: '10px auto'
})

const SubmitBtn = styled(Button)({
  color: '#DDC',
  padding: '44px'
})