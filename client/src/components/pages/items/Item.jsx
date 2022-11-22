import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../context/CartContext'
import { handleAPI } from '../../../helpers/fetchRequests'
import { Box, Button, ButtonGroup, Container, FormControlLabel, FormGroup, Input, styled, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'


const Item = () => {
  const [item, setItem] = useState({})
  const [menuName, setMenuName] = useState("")
  const [isAdded, setIsAdded] = useState(false)
  const { cart, setCart } = useContext(CartContext)
  const navigate = useNavigate()
  const location = useLocation()
  const currentMenu = location.state[1]
  const currentItem = location.state[0]
  const isItemFound = cart.some(i => i.item_id === currentItem.id)

  const [cartItem, setCartItem] = useState({
    item_id: currentItem.id,
    quantity: 1
  })

  useEffect(() => {
    setItem(currentItem)
    setMenuName(currentMenu.name)
    setIsAdded(isItemFound)
  }, [currentItem, currentMenu, isItemFound])

  const handleQuantity = (e) => {
    const qty = parseInt(e.target.value)
    if (qty > 0) {
      setCartItem({ ...cartItem, quantity: qty })
    }
  }

  const handleAddToCart = () => {
    setCart([ ...cart, cartItem ])
    setIsAdded(true)
    handleAPI('/cart_items', "POST", cartItem)
    .then((res) => {
      if (res.ok) {
        res.json()
      } else {
        console.log("There was a problem adding this item to your cart. Please choose another item.", res)
      }
    })
  }
  // console.log("cartItem from ITEM: ", cartItem)

  return (
    <ItemContainer>
      <Title variant='h3'>{ item.name }</Title>
      <ItemBody>
        <Section>
          <Description variant='h6'>
            { item.description }
          </Description>
          <ButtonGroup>
            <ActionBtn
              onClick={ () => navigate(-1) }
              variant='outlined'
            >
              Back to { menuName }
            </ActionBtn>
            <ActionBtn
              onClick={ () => navigate('/menus') }
              variant='outlined'
            >
              Browse Other Menus
            </ActionBtn>
            <ActionBtn
              onClick={ () => navigate('/cart') }
              variant='outlined'
            >
              Check Out
            </ActionBtn>
          </ButtonGroup>
        </Section>

        <Section>
          <Price variant='h4'>${ item.price }</Price>
          <FormControlLabel
            label='Quantity: '
            labelPlacement='start'
            control={
              <Qty
                type='number'
                step='1'
                disabled={ isAdded }
                disableUnderline
                value={cartItem.quantity}
                onChange={ (e) => handleQuantity(e) }
              />
            }
          />
          <OrderBtn
            onClick={ () => handleAddToCart() }
            variant='contained'
            disabled={ isAdded }
          >
            { isAdded ? "Added to cart!" : "Add To Cart" }
          </OrderBtn>
        </Section>
      </ItemBody>

    </ItemContainer>
  )
}

export default Item


const ItemContainer = styled(Container)({
  margin: '120px auto',
  border: '3px solid #DDC',
  borderRadius: '30px',
  height: '60vh'
})

const Title = styled(Typography)({
  textAlign: 'center',
  margin: '25px auto'
})

const ItemBody = styled(Box)({
  width: '80%',
  margin: '30px auto',
  display: 'flex',
  justifyContent: 'space-between'
})

const Description = styled(Typography)({
  padding: '0 50px 0 0',
  minWidth: '50%'
})

const Price = styled(Typography)({
  margin: '0 auto'
})

const Section = styled(FormGroup)({
  display: 'inherit',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '250px',
  margin: '0 15px'
})

const ActionBtn = styled(Button)({
  padding: '10px'
})

const OrderBtn = styled(Button)({
  padding: '20px',
  borderRadius: '50%',
  minWidth: '150px',
})

const Qty = styled(Input)({
  width: '100px',
  height: '30px',
  padding: '15px',
  margin: '10px',
  textAlign: 'right',
  textDecoration: 'none',
  fontSize: '24px',
  borderRadius: '5px',
})