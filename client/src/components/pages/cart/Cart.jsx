import React, { useContext, useEffect, useState } from 'react'
import CartItem from './CartItem'
import CartSummary from './CartSummary'
import { CartContext } from '../../../context/CartContext'
import { UserContext } from '../../../context/UserContext'
import { handleDELETE, handleAPI } from '../../../helpers/fetchRequests'
import { formatDollar } from '../../../helpers/formatDollar'
import { Container,  List, styled, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import LoadingMessage from '../../messages/LoadingMessage'
import { cartContainerCss, cartListCss, messageCss, titleCss } from '../../../styles/cartCss'


const Cart = () => {
  const [orderJsonBody, setOrderJsonBody] = useState({})
  const [deleteMessage, setDeleteMessage] = useState("")
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
      item_count: itemCount
    }
    setOrderJsonBody(order)
  }, [user, itemCount, total])

  const handleOrder = (e) => {
    e.preventDefault()
    handleAPI('/orders', "POST", orderJsonBody)
    .then((res) => {
      if (res.ok) {
        setCart([])
        handleDELETE('/empty_cart')
        navigate('/orders') 
      } else {
        console.log("Can't place order: ", res.statusText)
      }
    })
  }

  const handleChange = (e, itemId) => {
    const newQuantity = parseInt(e.target.value)
    if (newQuantity > 0) {
      const updatedCart = cart.map((item) => {
        if (item.id === itemId) {
          const updatedItemJsonBody = { ...item, quantity: newQuantity }
          handleAPI(`cart_items/${itemId}`, "PATCH", updatedItemJsonBody)
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
  
  const handleDeleteItem = (itemId) => {
    const updatedCart = cart.filter((i) => i.id !== itemId)
    setCart(updatedCart)
    handleDELETE(`/cart_items/${ itemId }`)
    .then((res) => {
      if (res.ok) {
        res.json().then((message) => setDeleteMessage(message.error))
      } else {
        res.json().then((err) => setDeleteMessage(err.statusText))
      }
    })
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
      <Title variant="h4">Cart Summary for { user.username }</Title>
      <CartList dense={true}>
        { cart.length === 0 ? <LoadingMessage message="Cart is Empty." /> : listOfCartItems }
      </CartList>
      <CartSummary total={total} />
      { deleteMessage !== "" ? <Message variant="h6">{ deleteMessage }</Message> : null }
    </CartContainer>
  )
}

export default Cart


const CartContainer = styled(Container)(cartContainerCss);
const CartList = styled(List)(cartListCss);
const Title = styled(Typography)(titleCss);
const Message = styled(Typography)(messageCss);