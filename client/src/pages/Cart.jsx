import React from 'react'
import CartItem from '../components/cart/CartItem'
import { Container, List, styled, Typography } from '@mui/material'

const Cart = ({ cart, onCartChange, currentUser }) => {

  console.log("currentUser: ", currentUser)
  console.log("CART: ", cart)

  const listOfCartItems = cart.map((item) => (
    <CartItem key={item.id} cartItem={item} onCartUpdate={onCartChange} />
  ))

  return (
    <CartContainer>
      <Title variant="h4">Order Summary</Title>
      <CartList dense={true}>
        { listOfCartItems }
      </CartList>

      {/* delivery address, submit button nav=>'/' */}
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

const CartList = styled(List)({
  margin: '0 100px',
  height: '50vh',
  overflow: 'auto',
})

const Title = styled(Typography)({
  textAlign: 'center',
})