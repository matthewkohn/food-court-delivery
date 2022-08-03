import React, { useContext, useEffect, useState } from 'react'
import MenuCard from './MenuCard'
import { UserContext } from '../../context/UserContext'
import { Box, Container, styled, Typography } from '@mui/material'

const Menus = () => {
  const [menus, setMenus] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useContext(UserContext)

  useEffect(() => {
    setIsLoading(true)
    fetch("/menus")
      .then((res) => res.json())
      .then((menus) => {
        setMenus(menus)
        setIsLoading(false)
      })
  }, [])

  const menusList = menus.map((menu) => ( <MenuCard menu={menu} key={menu.id} /> ))

  return (
    <MenuContainer>
      <Typography variant='h5'>Welcome to the Food Court, {user.username}!</Typography>
      <Typography variant='h4'>Choose a Menu</Typography>
      { isLoading ? <Loading variant="h4">Loading Menus...</Loading> : <MenuBox>{ menusList }</MenuBox> }
    </MenuContainer>
  )
}

export default Menus


const MenuContainer = styled(Container)({
  padding: '80px',
  margin: '5px auto',
  textAlign: 'center'
})

const Loading = styled(Typography)({
  margin: '100px 0',
  color: 'red',
  fontStyle: 'italic'
})

const MenuBox = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  margin: '20px auto',
  width: '100%'
})
