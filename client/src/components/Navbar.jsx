import React from 'react'
import { AppBar, IconButton, styled, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = ({ setUser }) => {

  const handleLogout = (e) => {
    fetch("/logout", {
      method: "DELETE"
    })
      .then((res) => {
        if (res.ok) {
          setUser(null)
        }
      })
  }

  return (
    <Banner>
      <Header variant="h3" component="div">Foodcourt Delivery</Header>
    
      <IconButton
          size='large'
          onClick={(e) => handleLogout(e)}
      >
        <Logout />
      </IconButton>
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

const Logout = styled(LogoutIcon)({
  color: '#DDC',
  margin: '10px',
  '&:hover': {
    // backgroundColor: 'darkgreen',
    opacity: [0.9, 0.8, 0.7],
    color: '#F16500'
  }
})