import React from 'react'
import { Paper, IconButton, ListItem, styled, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({ cartItem, onDeleteItem }) => {



  // console.log("CART ITEM: ", cartItem)
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={ () => onDeleteItem(cartItem.item_id) } >
          <DeleteIcon />
        </IconButton>
      }
    >
      <Info>
        <Typography variant="body1">{ cartItem.item_name } from { cartItem.menu_name }</Typography>
        <Details elevation={0} >
          <Typography>Qty: { cartItem.quantity }</Typography>
          <Typography >Subtotal: ${ cartItem.subtotal }</Typography>
        </Details>

      </Info>
    </ListItem>
  )
}

export default CartItem


const Info = styled(Paper)({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '5px',
  color: '#777'
})

const Details = styled(Paper)({
  display: 'inherit',
  flexDirection: 'row',
  width: '30%',
  justifyContent: 'space-between',
  color: '#777'
})