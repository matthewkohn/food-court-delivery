import React, { useContext, useEffect, useState } from 'react'
import MenuCard from '../components/menu/MenuCard'
import OrderHistory from '../components/menu/OrderHistory'
import { Box, Container, styled, Typography } from '@mui/material'
import { CartContext } from '../context/CartContext'

const Menus = ({ currentUser }) => {
  const [menus, setMenus] = useState([])
  const [setCart] = useContext(CartContext)

  useEffect(() => {
    fetch("/menus")
      .then((res) => res.json())
      .then(setMenus)
    fetch("/cart-items")
      .then((res) => res.json())
      .then(setCart)
  }, [setCart])

  return (
    <MenuContainer>
      <Typography variant='h5'>Welcome to the Food Court, {currentUser.username}!</Typography>
      <Typography variant='h4'>Choose a Menu</Typography>
      <MenuBox>
        {menus.map((menu) => ( <MenuCard menu={menu} key={menu.id} /> ))}
      </MenuBox>
      <OrderHistory />
    </MenuContainer>
  )
}

export default Menus


const MenuContainer = styled(Container)({
  padding: '80px',
  margin: '5px auto',
  textAlign: 'center'
})

const MenuBox = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  margin: '20px auto',
  width: '100%'
})
