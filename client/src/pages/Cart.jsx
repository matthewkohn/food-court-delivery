import React from 'react'
import { Container, styled } from '@mui/material'

const Cart = () => {


  return (
    <CartContainer>
      <h1>CART</h1>
    </CartContainer>
    
  )
}

export default Cart


const CartContainer = styled(Container)({
  margin: '120px auto',
  border: '3px solid #DDC',
  borderRadius: '30px',
  height: '60vh'
})