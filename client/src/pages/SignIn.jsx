import React, { useState } from 'react'
import { Box, Button, styled, Typography } from '@mui/material'
import LoginForm from '../components/login/LoginForm';
import SignUpForm from '../components/login/SignUpForm';

const SignIn = ({ onLogin }) => {
  const [showLogin, setShowLogin] = useState(true);


  return (
    <SignInContainer component="section" >

      <h1>Sign Up to Order</h1>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <hr />
          <Typography variant="caption">
            Don't have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </Typography>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <hr />
          <Typography variant="caption">
            Already have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </Typography>
        </>
      )}

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

