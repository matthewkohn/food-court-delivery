import React from 'react'
import { Button, Container, styled, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { useNavigate } from 'react-router-dom'
import { backToMenusBtnCss, submitBtnCss, summaryCss, totalCss } from '../../../styles/cartCss'


const CartSummary = ({ total }) => {
  const navigate = useNavigate()

  return (
    <Summary>
      <BackToMenusBtn 
        variant="contained" 
        startIcon={ <AddShoppingCartIcon /> }
        onClick={ () => navigate('/menus') }
      >
        Keep Shopping
      </BackToMenusBtn>
      <Total variant="h5" >Total: ${ total }</Total>
      <SubmitBtn 
        variant="contained" 
        type="submit" 
        form="order-form"
        endIcon={ <SendIcon /> }
      >
        Submit Order
      </SubmitBtn>
    </Summary>
  )
}

export default CartSummary

const Summary = styled(Container)(summaryCss);
const BackToMenusBtn = styled(Button)(backToMenusBtnCss);
const Total = styled(Typography)(totalCss);
const SubmitBtn = styled(Button)(submitBtnCss);