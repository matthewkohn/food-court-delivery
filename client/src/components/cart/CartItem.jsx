import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, IconButton, Input, ListItem, Paper, styled, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


const CartItem = ({ cartItem, onDeleteItem, onQuantityChange }) => {

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={ () => onDeleteItem(cartItem.id) } >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ItemAccordion>
        <Info expandIcon={ <ExpandMoreIcon /> }>
          <Typography variant="body1">{ cartItem.item_name } from "{ cartItem.menu_name }"</Typography>
          <Details elevation={0} >
            <Typography>Qty: { cartItem.quantity }</Typography>
            <Typography >Subtotal: ${ cartItem.subtotal }</Typography>
          </Details>
        </Info>
        <ItemAccordionDetails>
          <Typography variant="h6">Change quantity:</Typography>
          <Qty
            type='number'
            step='1'
            disableUnderline
            label="Quantity"
            value={ cartItem.quantity }
            onChange={ (e) => onQuantityChange(e, cartItem.id) }
          >
          </Qty>
        </ItemAccordionDetails>
      </ItemAccordion>
    </ListItem>
  )
}

export default CartItem

const ItemAccordion = styled(Accordion)({
  width: '100%',
  padding: '0 10px'
})

const Info = styled(AccordionSummary)({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '5px',
  color: '#777'
})

const ItemAccordionDetails = styled(AccordionDetails)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#EEF'
})

const Details = styled(Paper)({
  display: 'inherit',
  flexDirection: 'row',
  width: '30%',
  justifyContent: 'space-between',
  color: '#777',
  margin: '0 40px'
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