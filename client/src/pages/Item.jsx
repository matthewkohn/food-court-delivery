import React, { useEffect, useState } from 'react'
import { Box, Button, ButtonGroup, Container, FormControlLabel, FormGroup, Input, styled, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'


const Item = ({ cart, onCartChange }) => {
  const [item, setItem] = useState({})
  const [menuName, setMenuName] = useState("")
  const [isAdded, setIsAdded] = useState(false)
  
  const navigate = useNavigate()
  const location = useLocation()
  const currentItem = location.state[0]
  const currentMenu = location.state[1]

  const [cartItem, setCartItem] = useState({
    menu_name: currentMenu,
    item_name: currentItem.name,
    item_id: currentItem.id,
    unit_price: parseFloat(currentItem.price),
    quantity: 1,
    subtotal: parseFloat(currentItem.price)
  })

  useEffect(() => {
    if (location.state !== null) {
      setItem(currentItem)
      setMenuName(currentMenu)
    } else {
      return <LoadError variant="h3" >Uh oh, something went really wrong!</LoadError>
    }
  }, [currentItem, currentMenu, location])

  const handleQuantity = (e) => {
    const qty = parseFloat(e.target.value)
    if (qty > 0) {
      const newSubtotal = item.price * qty
      setCartItem({
        ...cartItem,
        quantity: qty,
        subtotal: newSubtotal
      })
    }
  }

  const handleAddToCart = () => {
    onCartChange( [ ...cart, cartItem ] )
    setIsAdded(true)
  }


  console.log("ITEM: ", item)
  console.log("cartItem: ", cartItem)
  console.log("CART: ", cart)

  return (
    <ItemContainer>
      <Title variant='h2'>{item.name}</Title>
      <ItemBody>
        <Section>
          <Description variant='h6'>
            {item.description}
          </Description>
          <ButtonGroup>
            <ActionBtn
              onClick={ () => navigate(-1) }
              variant='outlined'
            >
              Back to {menuName}
            </ActionBtn>
            <ActionBtn
              onClick={ () => navigate('/') }
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
          <Price variant='h4'>${item.price}</Price>
          <FormControlLabel
            label='Quantity: '
            labelPlacement='start'
            control={
              <Qty
                type='number'
                step='1'
                disableUnderline
                value={cartItem.quantity}
                onChange={(e) => handleQuantity(e)}
              />
            }
          />
          <OrderBtn
            onClick={() => handleAddToCart()}
            variant='contained'
            disabled={isAdded}
          >
            Add To Cart
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

const LoadError = styled(Typography)({
  color: 'red'
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
  alignItems: 'flex-start',
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
  width: '60px',
  height: '30px',
  padding: '15px',
  margin: '10px',
  textAlign: 'center',
  textDecoration: 'none',
  fontSize: '24px'
})