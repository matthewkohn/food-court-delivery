import React, { useContext, useState } from 'react'
import Error from './Error'
import { UserContext } from '../../context/UserContext'
import { handleAPI } from '../../helpers/fetchRequests'
import { Box, Button, FormControl, styled, TextField } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import { useNavigate } from 'react-router-dom'

const LoginForm = ({ hideSignUp }) => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    password_confirmation: '',
    admin: false
  })
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleUserInput = (e) => {
    const inputName = e.target.name
    setUserInfo({
      ...userInfo, 
      [inputName]: e.target.value
    })
  }
  
  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoading(true)
    let url = ""
    hideSignUp ? url = "/login" : url = "/signup"
    handleAPI(url, "POST", userInfo)
    .then((newUser) => {
      setIsLoading(false)
      setUser(newUser)
    })
    .then(navigate('/menus'))
    .catch((err) => setErrors(err.errors))
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

        { hideSignUp ?
          <SubmitBtn 
            size="large" 
            variant="outline" 
            type="submit" 
            form="login-form"
            endIcon={<LoginIcon />}
          >
            { isLoading ? "LOADING..." : "LOG IN" }
          </SubmitBtn>
        :
          <>
            <Credential 
              required 
              label="confirm password"
              name="password_confirmation"
              type="password"
              value={userInfo.password_confirmation}
              onChange={(e) => handleUserInput(e)}
            />
            <SubmitBtn 
              size="large" 
              variant="outline" 
              type="submit" 
              form="login-form"
              endIcon={<AppRegistrationIcon />}
            >
                { isLoading ? "Loading..." : "Let's get Started!" }
            </SubmitBtn>
          </>
        }
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
  margin: '0 auto 15px'
})

const SubmitBtn = styled(Button)({
  color: '#DDC',
  margin: '23px auto',
  padding: '20px',
  border: '1px solid #666',
  borderRadius: '15px',
  '&:hover': {
    backgroundColor: 'blue'
  }
})