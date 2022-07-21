import React, { useEffect, useState } from 'react'
import MenuCard from '../components/menu/MenuCard'
import OrderHistory from '../components/menu/OrderHistory'
import { Box, Container, styled, Typography } from '@mui/material'

const Menus = ({ currentUser }) => {
  const [menus, setMenus] = useState([])

  useEffect(() => {
    fetch("/menus")
      .then((res) => res.json())
      .then(setMenus)

  }, [])
  console.log("MENUS: ", menus)

  return (
    <MenuContainer>
      <Typography variant='h5'>Welcome, {currentUser.username}!</Typography>
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
