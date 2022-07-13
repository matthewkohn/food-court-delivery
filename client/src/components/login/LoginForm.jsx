import React, { useState } from 'react'
import { Box, Button, FormControl, styled, TextField } from '@mui/material'
import Error from './Error'

const LoginForm = ({ onLogin }) => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: ''
  })
  const [errors, setErrors] = useState([])
  // const [isLoading, setIsLoading] = useState(false)

  console.log("USER: ", userInfo)
  console.log("ERRORS: ", errors)

  const handleUserInput = (e) => {
    const inputName = e.target.name
    setUserInfo({
      ...userInfo, 
      [inputName]: e.target.value
    })
  }
  
  const handleLogin = (e) => {
    e.preventDefault()
    console.log("click")
    // setIsLoading(true)
    // fetch POST to /sessions
    fetch("/login", {
    // fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
    .then((res) => {
      // setIsLoading(false)
      if (res.ok) {
        res.json().then((data) => onLogin(data))
      } else {
        res.json().then((err) => setErrors(err.errors))
      }
    })
  }

  return (
    <FormControl variant="standard" >
      <LoginBox 
        component="form" 
        onSubmit={(e) => handleLogin(e)} 
        id="login-form"
      >
        <Credential 
          autoFocus 
          required 
          label="username"
          name="username"
          type="username"
          value={userInfo.username}
          onChange={(e) => handleUserInput(e)}
        />
        <Credential 
          required 
          label="password"
          name="password"
          type="password"
          value={userInfo.password}
          onChange={(e) => handleUserInput(e)}
        />
        <SubmitBtn 
          size="large" 
          variant="outline" 
          type="submit" 
          form="login-form"
        >
          LOG IN
        </SubmitBtn>
      </LoginBox>
      {errors.map((err) => (
        <Error key={err}>{err}</Error>
      ))}

    </FormControl>
  )
}

export default LoginForm

const LoginBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column'
})

const Credential = styled(TextField)({
  background: '#DDC',
  borderRadius: '5px',
  margin: '10px auto'
})

const SubmitBtn = styled(Button)({
  color: '#DDC',
  margin: '23px auto',
  padding: '20px',
  border: '1px solid #666'
})