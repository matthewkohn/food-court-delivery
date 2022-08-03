import React, { useContext, useEffect, useState } from 'react'
import CartItem from './CartItem'
import CartSummary from './CartSummary'
import { CartContext } from '../../context/CartContext'
import { UserContext } from '../../context/UserContext'
import { handleDELETE, handleAPI } from '../../helpers/fetchRequests'
import { formatDollar } from '../../helpers/formatDollar'
import { Container,  List, styled, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
  const [orderJsonBody, setOrderJsonBody] = useState({})
  const { cart, setCart, total, itemCount, loadCart } = useContext(CartContext)
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    loadCart()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    const order = {
      user_id: user.id,
      total: total,
      item_count: itemCount,
      order_items_attributes: cart
    }
    setOrderJsonBody(order)
  }, [cart, user, itemCount, total])

  const handleOrder = (e) => {
    e.preventDefault()
    handleAPI('/orders', "POST", orderJsonBody)
    .then(() => {
      setCart([])
      handleDELETE('/empty_cart')
      navigate('/orders') 
    })
  }

  const handleChange = (e, itemId) => {
    const newQuantity = e.target.value
    if (newQuantity > 0) {
      const updatedCart = cart.map((item) => {
        if (item.id === itemId) {
          const updatedItemJsonBody = { ...item, quantity: newQuantity }
          const newSubtotal = formatDollar(newQuantity * item.unit_price)
          handleAPI(`cart_items/${itemId}`, "PATCH", updatedItemJsonBody)
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
  
  const handleDeleteItem = (itemId) => {
    const updatedCart = cart.filter((i) => i.id !== itemId)
    setCart(updatedCart)
    handleDELETE(`/cart_items/${ itemId }`)
  }

  const listOfCartItems = cart.map((item) => (
    <CartItem 
      key={ item.item_id } 
      cartItem={ item } 
      onDeleteItem={ handleDeleteItem }
      onQuantityChange={ handleChange }  
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
  overflow: 'unset',
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