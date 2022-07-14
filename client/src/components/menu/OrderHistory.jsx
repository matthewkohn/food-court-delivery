import { Container, styled, Typography } from '@mui/material'
import React from 'react'

const OrderHistory = () => {
  

  // DataGrid pending...
  
  return (
    <HistoryContainer>
      <Typography variant="h5">Your Previous Orders:</Typography>
      
    </HistoryContainer>

    
  )
}

export default OrderHistory


const HistoryContainer = styled(Container)({
  height: '30vh',
  border: '4px solid black',
  borderRadius: '25px',
  margin: '40px auto 0',
  padding: '8px',
  textAlign: 'center',


})