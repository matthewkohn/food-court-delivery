import { Box, styled } from '@mui/material'
import React from 'react'

const SignIn = () => {
  return (
    <SignInContainer>
      <h1>Sign In / Signup Container</h1>
    </SignInContainer>
  )
}

export default SignIn

const SignInContainer = styled(Box)({
  width: 500,
  height: 500,
  borderRadius: '20px',
  margin: '150px auto',
  backgroundColor: 'darkgreen',
  '&:hover': {
    backgroundColor: 'lightgreen',
    opacity: [0.9, 0.8, 0.7]
  }
})