import React, { useContext, useEffect, useState } from 'react'
import CartItem from '../components/cart/CartItem'
import { CartContext } from '../context/CartContext'
import { Button, Container,  List, styled, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { useNavigate } from 'react-router-dom'

const Cart = ({ currentUser }) => {
  const [orderJsonBody, setOrderJsonBody] = useState({})
  const [cart, setCart, total, itemCount] = useContext(CartContext)
  const navigate = useNavigate()
  
  useEffect(() => {
    const order = {
      user_id: currentUser.id,
      total: total,
      item_count: itemCount,
      order_items_attributes: cart
    }
    setOrderJsonBody(order)
  }, [cart, currentUser, itemCount, total])

  const handleOrder = (e) => {
    e.preventDefault()
    const url = '/orders'
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderJsonBody),
    })
    .then((res) => res.json())
    .then(() => {
      setCart([])
      navigate('/menus')
      // make DELETE fetch to API => cart_items.destroy_all 
    })
  }
  
  const handleDelete = (id) => {
    const updatedCart = cart.filter((i) => i.item_id !== id)
    setCart(updatedCart)
    // make DELETE request to '/cart_items/:id'
  }

  const listOfCartItems = cart.map((item) => (
    <CartItem 
      key={item.item_id} 
      cartItem={item} 
      onDeleteItem={handleDelete}  
    />
  ))

  return (
    <CartContainer
      component="form" 
      onSubmit={(e) => handleOrder(e)} 
      id="order-form"
    >
      <Title variant="h4">Order Summary</Title>
      <CartList dense={true}>
        { cart.length === 0 ? <EmptyCartText>Nothing ordered yet.</EmptyCartText> : listOfCartItems }
      </CartList>
      <Summary>
        <BackToMenusBtn 
          variant="contained" 
          startIcon={<AddShoppingCartIcon />}
          onClick={() => navigate('/menus')}
        >
          Keep Shopping
        </BackToMenusBtn>
        <Total variant="h5" >Total: ${total}</Total>
        <SubmitBtn 
          variant="contained" 
          type="submit" 
          form="order-form"
          endIcon={<SendIcon />}
        >
          Submit Order
        </SubmitBtn>
      </Summary>
    </CartContainer>
  )
}

export default Cart


const CartContainer = styled(Container)({
  margin: '120px auto',
  border: '3px solid #DDC',
  borderRadius: '30px',
  height: '50vh',
  width: '100%',
})

const EmptyCartText = styled(Typography)({
  textAlign: 'center',
  color: 'red',
  margin: '10vh auto',
  fontStyle: 'italic',
  opacity: '0.5',
})

const CartList = styled(List)({
  margin: '0 100px 60px',
  height: '35vh',
  overflow: 'auto',
})

const Title = styled(Typography)({
  textAlign: 'center',
  margin: '15px 0 0'
})

const Summary = styled(Container)({
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%',
  margin: 'auto',
  padding: '30px 0'
})

const BackToMenusBtn = styled(Button)({
  borderRadius: '20px',
  padding: '0 30px',
  '&:hover': {
    backgroundColor: '#BA5421',
    color: '#DDC',
    fontSize: '16px',
    padding: '0 21.5px',
  }
})

const Total = styled(Typography)({
  fontStyle: 'italic',
  fontWeight: 'bolder',
  color: '#BA5421',
  background: '#BCEACB',
  padding: '15px',
  borderRadius: '10px',
  width: '200px',
  textAlign: 'center',
})

const SubmitBtn = styled(Button)({
  borderRadius: '20px',
  padding: '0 30px',
  '&:hover': {
    backgroundColor: '#21BA54',
    color: '#DDC',
    fontSize: '16px',
    padding: '0 22px',
  }
})

