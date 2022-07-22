import React, { useContext } from 'react'
import CartItem from '../components/cart/CartItem'
import { CartContext } from '../context/CartContext'
import { Button, Container, List, styled, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { useNavigate } from 'react-router-dom'

const Cart = ({ currentUser }) => {
  const [cart, setCart, total, itemCount] = useContext(CartContext)
  const navigate = useNavigate()

  // const [order, setOrder] = useState({})
  console.log("CurrentUser from CART: ", currentUser)
  console.log("Cart from CART: ", cart)
  console.log("ItemCount from CART: ", itemCount)

  
  const handleDelete = (id) => {
    const updatedCart = cart.filter((i) => i.item_id !== id)
    setCart(updatedCart)
  }

  const listOfCartItems = cart.map((item) => (
    <CartItem 
      key={item.item_id} 
      cartItem={item} 
      onDeleteItem={handleDelete}  
    />
  ))

  return (
    <CartContainer>
      <Title variant="h4">Order Summary</Title>
      <CartList dense={true}>
        { listOfCartItems }
      </CartList>
      <Summary>
        <BackToMenusBtn 
          variant="contained" 
          startIcon={<AddShoppingCartIcon />}
          onClick={() => navigate('/')}
        >
          Keep Shopping
        </BackToMenusBtn>
        <Total variant="h5" >Total: ${total}</Total>
        <SubmitBtn variant="contained" endIcon={<SendIcon />}>Submit Order</SubmitBtn>
      </Summary>
    </CartContainer>
  )
}

export default Cart


const CartContainer = styled(Container)({
  margin: '120px auto',
  border: '3px solid #DDC',
  borderRadius: '30px',
  height: '50vh'
})

const CartList = styled(List)({
  margin: '0 100px 60px',
  height: '35vh',
  overflow: 'auto',
})

const Title = styled(Typography)({
  textAlign: 'center',
  margin: '15px 0 0'
})

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

