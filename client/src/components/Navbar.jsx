import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { CartContext } from '../context/CartContext'
import { handleDELETE } from '../helpers/fetchRequests'
import { AppBar, IconButton, styled, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import HistoryIcon from '@mui/icons-material/History';
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const { setUser } = useContext(UserContext)
  const { setCart } = useContext(CartContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    handleDELETE('/logout')
    .then(() => {
      setUser(null)
      setCart([])
    })
    .then(navigate('/'))
  }

  return (
    <Banner>
      <Header variant='h3' component='div'>Food Court Delivery</Header>
      <Btn onClick={ () => navigate('/menus') } >
        <MenuBookIcon />
      </Btn>
      <Btn onClick={ () => navigate('/orders') } >
        <HistoryIcon />
      </Btn>
      <Btn onClick={ () => navigate('/cart') } >
        <ShoppingCartIcon />
      </Btn>
      <Btn onClick={ () => handleLogout() } >
        <LogoutIcon />
      </Btn>
    </Banner>
  )
}

export default Navbar


const Banner = styled(AppBar)({
  display: 'flex',
  flexDirection: 'row',
  background: '#21BA54',
  color: '#DDC'
})

const Header = styled(Typography)({
  padding: '10px',
  flexGrow: 1
})

const Btn = styled(IconButton)({
  color: '#DDC',
  margin: '10px',
  '&:hover': {
    opacity: [0.9, 0.8, 0.7],
    color: '#F16500'
  }
})
