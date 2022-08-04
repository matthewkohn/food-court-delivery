import React, { useContext, useEffect, useState } from 'react'
import MenuCard from './MenuCard'
import LoadingMessage from '../../messages/LoadingMessage'
import { UserContext } from '../../../context/UserContext'
import { LoadingContext } from '../../../context/LoadingContext'
import { handleGET } from '../../../helpers/fetchRequests'
import { Box, Container, styled, Typography } from '@mui/material'


const Menus = () => {
  const [menus, setMenus] = useState([])
  const { isLoading, setIsLoading } = useContext(LoadingContext)
  const { user } = useContext(UserContext)

  useEffect(() => {
    setIsLoading(true)
    handleGET('/menus')
    .then((newMenus) => {
      setMenus(newMenus)
      setIsLoading(false)
    })
  }, [setIsLoading])

  const menusList = menus.map((menu) => ( <MenuCard menu={ menu } key={ menu.id } /> ))

  return (
    <MenuContainer>
      <Typography variant='h5'>Welcome to the Food Court, { user.username }!</Typography>
      <Typography variant='h4'>Choose a Menu</Typography>
      { isLoading ? 
          <LoadingMessage message="Loading Menus..." />
        : 
          <MenuBox>{ menusList }</MenuBox> 
      }
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
  justifyContent: 'center',
  margin: '20px auto',
  width: '100%'
})
