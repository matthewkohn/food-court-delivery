import { Box } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'

const Error = ({ children }) => {
  return (
    <ErrorBox>
      {children}
    </ErrorBox>
    
  )
}

export default Error

const ErrorBox = styled(Box)({
  color: 'red',
  backgroundColor: 'mistyrose',

})