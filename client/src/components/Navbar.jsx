import { AppBar, styled, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <AppBar>
      <Header variant="h3" component="div">Foodcourt Delivery</Header>
    
    </AppBar>
  )
}

export default Navbar

const Header = styled(Typography)({
  padding: '10px',
  flexGrow: 1,
  background: '#21BA54'
})