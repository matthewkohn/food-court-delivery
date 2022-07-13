import React, { useState } from 'react'
import { Box, Button, styled, Typography } from '@mui/material'
import LoginForm from '../components/login/LoginForm';
import SignUpForm from '../components/login/SignUpForm';

const SignIn = ({ onLogin }) => {
  const [showLogin, setShowLogin] = useState(true);


  return (
    <SignInContainer component="section" >
      <Logo variant="h3">Food Court Delivery</Logo>
      {showLogin ? (
        <>
        <Title variant="h5">Login to Order</Title>
          <LoginForm onLogin={onLogin} />
          <Typography variant="caption">
            Don't have an account? &nbsp;
            <ToggleBtn color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </ToggleBtn>
          </Typography>
        </>
      ) : (
        <>
          <Title variant="h5">Sign Up for Free</Title>
          <SignUpForm onLogin={onLogin} />
          <Typography variant="caption">
            Already have an account? &nbsp;
            <ToggleBtn color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </ToggleBtn>
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
  color: '#DDC',
  width: 500,
  borderRadius: '20px',
  margin: '100px auto',
  backgroundColor: 'darkgreen',
  '&:hover': {
    backgroundColor: 'green',
    opacity: [0.9, 0.8, 0.7]
  }
})

const Logo = styled(Typography)({
  margin: '20px auto',
  fontStyle: 'italic',
  letterSpacing: '2px'
})

const Title = styled(Typography)({
  margin: '20px 0 30px'
})

const ToggleBtn = styled(Button)({

})