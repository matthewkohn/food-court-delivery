import React, { useContext } from 'react'
import CartItem from '../components/cart/CartItem'
import { CartContext } from '../context/CartContext'
import { Button, Container, List, styled, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

const Cart = ({ currentUser }) => {
  const [cart, setCart, total] = useContext(CartContext)
  // const [order, setOrder] = useState({})
  console.log("CurrentUser from CART: ", currentUser)

  
  const handleDelete = (id) => {
    const updatedCart = cart.filter((i) => i.item_id !== id)
    setCart(updatedCart)
  }

  const listOfCartItems = cart.map((item) => (
    <CartItem 
      key={item.item_id} 
      cartItem={item} 
      onDeleteItem={handleDelete}  
    />
  ))

  return (
    <CartContainer>
      <Title variant="h4">Order Summary</Title>
      <CartList dense={true}>
        { listOfCartItems }
      </CartList>
      <Total variant="h5" >Total: ${total}</Total>
      <SubmitBtn variant="contained" endIcon={<SendIcon />}>Submit Order</SubmitBtn>
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
  margin: '15px 0 0'
})

const Total = styled(Typography)({

})

const SubmitBtn = styled(Button)({

})