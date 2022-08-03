import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { AppBar, IconButton, styled, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import HistoryIcon from '@mui/icons-material/History';
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" })
    .then(res => res.ok ? setUser(null) : console.log(res))
    .then(navigate('/'))
  }

  return (
    <Banner>
      <Header variant='h3' component='div'>Food Court Delivery</Header>
    
      <ButtonWrapper
        size='large'
        onClick={ () => navigate('/menus') }
      >
        <MenuBookIcon />
      </ButtonWrapper>

      <ButtonWrapper
        size='large'
        onClick={ () => navigate('/orders') }
      >
        <HistoryIcon />
      </ButtonWrapper>

      <ButtonWrapper
        size='large'
        onClick={ () => navigate('/cart') }
      >
        <ShoppingCartIcon />
      </ButtonWrapper>

      <ButtonWrapper
          size='large'
          onClick={ () => handleLogout() }
      >
        <LogoutIcon />
      </ButtonWrapper>
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

const ButtonWrapper = styled(IconButton)({
  color: '#DDC',
  margin: '10px',
  '&:hover': {
    opacity: [0.9, 0.8, 0.7],
    color: '#F16500'
  }
})
