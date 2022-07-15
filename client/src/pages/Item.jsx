import React, { useEffect, useState } from 'react'
import { Box, Button, Container, FormControlLabel, FormGroup, Input, styled, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'

const Item = () => {
  const [item, setItem] = useState({})
  const [quantity, setQuantity] = useState(1)
  const location = useLocation()

  useEffect(() => {
    if (location.state !== null) {
      setItem(location.state)
    }
  }, [location])

  const handleQuantity = (e) => {
    const qty = e.target.value
    if (qty > 0) {
      setQuantity(e.target.value)
    }
  }

  return (
    <ItemContainer>
      <Title variant="h2">{item.name}</Title>
      <ItemBody>
        <Description variant="h6">
          {item.description}
        </Description>
        <RightSide>
          <Typography variant="h4">${item.price}</Typography>
          <FormControlLabel
            label="Quantity: "
            labelPlacement='start'
            control={
              <Qty
                type="number"
                step="1"
                value={quantity}
                onChange={(e) => handleQuantity(e)}
              />
            }
          />
          <AddToCartBtn
            onClick={() => console.log("Click!!")}
            variant="contained"
          >
            Add To Cart
          </AddToCartBtn>
        </RightSide>
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
  width: '70%',
  margin: '30px auto',
  display: 'flex'
})

const Description = styled(Typography)({
  padding: '0 50px 0 0',
  minWidth: '50%',
})

const RightSide = styled(FormGroup)({
  display: 'inherit',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '250px'
})

const AddToCartBtn = styled(Button)({
  padding: '20px',
  borderRadius: '50%',
})

const Qty = styled(Input)({
  width: '60px',
  height: '30px',
  padding: '15px',
  margin: '10px',
  textAlign: 'center',
  fontSize: '24px'
})