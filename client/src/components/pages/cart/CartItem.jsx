import React from 'react'
import { formatDollar } from '../../../helpers/formatDollar';
import { Accordion, AccordionSummary, AccordionDetails, IconButton, Input, ListItem, Paper, styled, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { detailsCss, infoCss, infoDetailsCss, itemAccordionCss, itemAccordionDetailsCss, qtyCss } from '../../../styles/cartCss';


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

const ItemAccordion = styled(Accordion)(itemAccordionCss);
const Info = styled(AccordionSummary)(infoCss);
const InfoDetails = styled(Paper)(infoDetailsCss);
const Details = styled(Paper)(detailsCss);
const ItemAccordionDetails = styled(AccordionDetails)(itemAccordionDetailsCss);
const Qty = styled(Input)(qtyCss);