import React from 'react'
import { Card, styled, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const MenuCard = ({ menu }) => {
  const navigate = useNavigate()

  return (
    <RestaurantCard raised onClick={ () => navigate(`/menus/${menu.id}`) } >
      <Typography variant="h5">{ menu.name }</Typography>
    </RestaurantCard>
  )
}

export default MenuCard

const RestaurantCard = styled(Card)({
  background: 'forestgreen',
  color: '#DDC',
  margin: '0 30px 30px',
  padding: '30px',
  borderRadius: '50%',
  width: '200px',
  textAlign: 'center',
  display: 'inherit',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: 'blue',
    color: '#DDC'
  }
})