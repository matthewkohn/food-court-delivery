import React, { useState } from 'react'
import LoginForm from './LoginForm'
import { Box, Button, styled, Typography } from '@mui/material'
import { logoCss, signInContainerCss, titleCss, toggleBtnCss } from '../../../styles/loginCss'

const SignIn = () => {
  const [showSignUp, setShowSignUp] = useState(false)

  return (
    <SignInContainer component='section' >
      <Logo variant='h3'>Food Court Delivery</Logo>
      { showSignUp ? 
        <Title variant='h5'>Sign Up for Free</Title>
        :
        <Title variant='h5'>Login to Order</Title>
      }
      <LoginForm showSignUp={showSignUp} />
      { showSignUp ?
        <Typography variant='caption'>
          Already have an account? &nbsp;
          <ToggleBtn onClick={ () => setShowSignUp(false) } >
            Log In
          </ToggleBtn>
        </Typography>
        :
        <Typography variant='caption'>
          Don't have an account? &nbsp;
          <ToggleBtn onClick={ () => setShowSignUp(true) } >
            Sign Up
          </ToggleBtn>
        </Typography>
      }    
    </SignInContainer>
  )
}

export default SignIn

const SignInContainer = styled(Box)(signInContainerCss);
const Logo = styled(Typography)(logoCss);
const Title = styled(Typography)(titleCss);
const ToggleBtn = styled(Button)(toggleBtnCss);