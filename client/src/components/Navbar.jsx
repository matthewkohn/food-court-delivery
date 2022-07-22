import React from 'react'
import { AppBar, IconButton, styled, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ logout }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE"
    })
    .then(() => logout(null))
    .then(navigate('/'))
  }

  return (
    <Banner>
      <Header variant='h3' component='div'>Food Court Delivery</Header>
    
      <ButtonWrapper
        size='large'
        onClick={ () => navigate('/') }
      >
        <MenuBookIcon />
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
