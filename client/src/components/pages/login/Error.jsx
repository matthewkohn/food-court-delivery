import { Box } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import { errorBoxCss } from '../../../styles/loginCss'

const Error = ({ children }) => {
  return (
    <ErrorBox>
      {children}
    </ErrorBox>
    
  )
}

export default Error

const ErrorBox = styled(Box)(errorBoxCss);