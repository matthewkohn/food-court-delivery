import React from 'react'
import { styled, Typography } from '@mui/material'
import { messageCss } from '../../styles/loginCss'


const LoadingMessage = ({ message }) => {
  return (
    <Message variant="h4">{ message }</Message>
  )
}

export default LoadingMessage

const Message = styled(Typography)(messageCss);