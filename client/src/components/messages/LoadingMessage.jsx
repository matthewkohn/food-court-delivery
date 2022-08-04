import React from 'react'
import { styled, Typography } from '@mui/material'


const LoadingMessage = ({ message }) => {
  return (
    <Message variant="h4">{ message }</Message>
  )
}

export default LoadingMessage


const Message = styled(Typography)({
  margin: '100px 0',
  color: 'red',
  fontStyle: 'italic',
  textAlign: 'center'
})

