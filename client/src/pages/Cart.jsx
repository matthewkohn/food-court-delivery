import React, { useContext, useEffect, useState } from 'react'
import CartItem from '../components/cart/CartItem'
import CartSummary from '../components/cart/CartSummary'
import { CartContext } from '../context/CartContext'
import emptyCart from '../helpers/emptyCart'
import { Container,  List, styled, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { formatDollar } from '../helpers/formatDollar'

const Cart = ({ currentUser }) => {
  const [orderJsonBody, setOrderJsonBody] = useState({})
  const [cart, setCart, total, itemCount, loadCart] = useContext(CartContext)
  const navigate = useNavigate()

  useEffect(() => {
    loadCart()
    // eslint-disable-next-line
  }, [])

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
      emptyCart()
      navigate('/menus') 
    })
  }

  const handleChange = (e, itemId) => {
    const newQuantity = e.target.value
    if (newQuantity > 0) {
      const updatedCart = cart.map((item) => {
        if (item.id === itemId) {
          const updatedItemJsonBody = {...item, quantity: newQuantity}
          fetch(`cart_items/${itemId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedItemJsonBody),
          }).then((res) => res.json())
          .then(console.log)
          const newSubtotal = formatDollar(newQuantity * item.unit_price)
          return { 
            ...item, 
            quantity: newQuantity,
            subtotal: newSubtotal 
          }
        }
        return item
      })
      setCart(updatedCart)
    }
  }
  
  const handleDelete = (itemId) => {
    const updatedCart = cart.filter((i) => i.id !== itemId)
    setCart(updatedCart)
    fetch(`/cart_items/${itemId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.json())
    .then(console.log)
  }

  const listOfCartItems = cart.map((item) => (
    <CartItem 
      key={item.item_id} 
      cartItem={item} 
      onDeleteItem={handleDelete}
      onQuantityChange={handleChange}  
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
      <CartSummary total={total} />
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
