import React from 'react'
import { Button, Container, styled, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { useNavigate } from 'react-router-dom'

const CartSummary = ({ total }) => {
  const navigate = useNavigate()

  return (
    <Summary>
      <BackToMenusBtn 
        variant="contained" 
        startIcon={<AddShoppingCartIcon />}
        onClick={() => navigate('/menus')}
      >
        Keep Shopping
      </BackToMenusBtn>
      <Total variant="h5" >Total: ${total}</Total>
      <SubmitBtn 
        variant="contained" 
        type="submit" 
        form="order-form"
        endIcon={<SendIcon />}
      >
        Submit Order
      </SubmitBtn>
    </Summary>
  )
}

export default CartSummary


const Summary = styled(Container)({
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%',
  margin: 'auto',
  padding: '30px 0'
})

const BackToMenusBtn = styled(Button)({
  borderRadius: '20px',
  padding: '0 30px',
  '&:hover': {
    backgroundColor: '#BA5421',
    color: '#DDC',
    fontSize: '16px',
    padding: '0 21.5px',
  }
})

const Total = styled(Typography)({
  fontStyle: 'italic',
  fontWeight: 'bolder',
  color: '#BA5421',
  background: '#BCEACB',
  padding: '15px',
  borderRadius: '10px',
  width: '200px',
  textAlign: 'center',
})

const SubmitBtn = styled(Button)({
  borderRadius: '20px',
  padding: '0 30px',
  '&:hover': {
    backgroundColor: '#21BA54',
    color: '#DDC',
    fontSize: '16px',
    padding: '0 22px',
  }
})