import React, { useState } from 'react'
import LoginForm from '../components/login/LoginForm'
import { Box, Button, styled, Typography } from '@mui/material'

const SignIn = ({ onLogin }) => {
  const [hideSignUp, setHideSignUp] = useState(true);

  return (
    <SignInContainer component='section' >
      <Logo variant='h3'>Food Court Delivery</Logo>

      { hideSignUp ? 
        <Title variant='h5'>Login to Order</Title>
        :
        <Title variant='h5'>Sign Up for Free</Title>
      }

      <LoginForm onLogin={onLogin} hideSignUp={hideSignUp} />

      { hideSignUp ?
        <Typography variant='caption'>
          Don't have an account? &nbsp;
          <ToggleBtn onClick={() => setHideSignUp(false)}>
            Sign Up
          </ToggleBtn>
        </Typography>
        :
        <Typography variant='caption'>
          Already have an account? &nbsp;
          <ToggleBtn onClick={() => setHideSignUp(true)}>
            Log In
          </ToggleBtn>
        </Typography>
      }    

    </SignInContainer>
  )
}

export default SignIn


const SignInContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '20px',
  textAlign: 'center',
  color: '#DDC',
  width: 500,
  minHeight: 585,
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
  color: 'blue',
  '&:hover': {
    backgroundColor: 'lightblue'
  }
})