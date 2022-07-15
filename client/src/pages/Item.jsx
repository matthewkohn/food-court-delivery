// import React, { useContext, useEffect, useState } from 'react'
import React, { useEffect, useState } from 'react'
// import { CartContext } from '../components/context/CartContext'
import { Box, Button, ButtonGroup, Container, FormControlLabel, FormGroup, Input, styled, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'


const Item = () => {
  const [item, setItem] = useState({})
  const [menuName, setMenuName] = useState("")
  const [quantity, setQuantity] = useState(1)
  // const [cart, setCart] = useContext(CartContext)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.state !== null) {
      setItem(location.state[0])
      setMenuName(location.state[1])
    }
  }, [location])

  const handleQuantity = (e) => {
    const qty = e.target.value
    if (qty > 0) {
      setQuantity(e.target.value)
    }
  }

  // const handleAddToCart = () => {
  //   console.log("CliCK")
  //   const contents = {

  //   }
  // }


  // console.log("CART: ", cart)

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
                value={quantity}
                onChange={(e) => handleQuantity(e)}
              />
            }
          />
          <OrderBtn
            // onClick={() => handleAddToCart()}
            onClick={() => console.log("click")}
            variant='contained'
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