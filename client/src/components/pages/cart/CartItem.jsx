import React from 'react'
import { formatDollar } from '../../../helpers/formatDollar';
import { Accordion, AccordionSummary, AccordionDetails, IconButton, Input, ListItem, Paper, styled, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


const CartItem = ({ cartItem, onDeleteItem, onQuantityChange }) => {
  const newSubtotal = formatDollar(cartItem.subtotal)

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
          <InfoDetails elevation={0} >
            <Typography variant="body1">{ cartItem.item_name } from "{ cartItem.menu_name }"</Typography>
            <Details elevation={0} >
              <Typography>Qty: { cartItem.quantity }</Typography>
              <Typography >Subtotal: ${ newSubtotal }</Typography>
            </Details>
          </InfoDetails>
        </Info>
        <ItemAccordionDetails>
          <Typography variant="h6">Change Quantity</Typography>
          <Qty
            type='number'
            step='1'
            disableUnderline
            value={ cartItem.quantity }
            onChange={ (e) => onQuantityChange(e, cartItem.id) }
          >
          </Qty>
          <Typography variant="h6">Unit Price: ${ cartItem.unit_price }</Typography>
        </ItemAccordionDetails>
      </ItemAccordion>
    </ListItem>
  )
}

export default CartItem

const ItemAccordion = styled(Accordion)({
  width: '100%',
  padding: '0 10px',
  display: 'flex',
  flexDirection: 'column',
})

const Info = styled(AccordionSummary)({
  padding: '5px',
  color: '#777',
  width: '100%',
})

const InfoDetails = styled(Paper)({
  display: 'inherit',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
})

const Details = styled(Paper)({
  display: 'inherit',
  flexDirection: 'row',
  width: '40%',
  padding: '5px',
  justifyContent: 'space-between',
  color: '#777',
})

const ItemAccordionDetails = styled(AccordionDetails)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#EEF',
  padding: '0 30px',

})

const Qty = styled(Input)({
  width: '100px',
  height: '30px',
  padding: '15px',
  margin: '10px 50px 10px 7px',
  textAlign: 'right',
  textDecoration: 'none',
  fontSize: '24px',
  borderRadius: '5px',
  background: 'white'
})