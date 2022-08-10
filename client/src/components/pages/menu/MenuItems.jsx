import React, { useEffect, useState } from 'react'
import { handleGET } from '../../../helpers/fetchRequests'
import { Box, Button, Card, Container, styled, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'


const MenuItems = () => {
  // combine menuName + items to one 
  const [menuName, setMenuName] = useState("")
  const [items, setItems] = useState([])
  const navigate = useNavigate()
  const location = useLocation()

  // change menuName + items to one object, "menu" that I can pull menu.id, menu.name, and map over menu.items
  useEffect(() => {
    handleGET(location.pathname)
    .then((menu) => {
      setMenuName(menu.name)
      setItems(menu.items)
    })
  }, [location])

  // change what you're passing in state: menu
  const handleClick = (item) => {
    navigate(
      `/item/${item.name}`, 
      { state: [item, menuName] }
    )
  }

  const itemsList = items.map(item => {
    return (
      <ItemCard 
        key={item.id} 
        onClick={ () => handleClick(item) }>
        <Detail variant='h5'>{item.name}</Detail>
        <Detail>${item.price}</Detail>
        <Detail>{item.description}</Detail>
      </ItemCard>
    )
  })
// add "AddItemBtn" that triggers a form that allows the user to add an item (name, price, description) and POSTs using menu.id
  return (
    <>
      <Header>
        <Title variant='h3'>{ menuName } Menu</Title>
        <Typography>Click an item to add to your cart, or 
          <Button 
            variant='text' 
            size='large' 
            onClick={() => navigate('/menus')}
          >
            Go Back to Menus
          </Button>
        </Typography>
      </Header>
      <ItemsContainer>
        { itemsList }
      </ItemsContainer>
    </>
  )
}

export default MenuItems


const Header = styled(Box)({
  margin: '100px auto 0',
  textAlign: 'center'
})

const Title = styled(Typography)({
})
const ItemsContainer = styled(Container)({
  margin: '0 auto 20px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center'
})

const ItemCard = styled(Card)({
  background: '#DDC',
  margin: '10px',
  padding: '20px',
  width: '200px',
  borderRadius: '15px',
  '&:hover': {
    backgroundColor: 'blue',
    color: '#DDC'
  }
})

const Detail = styled(Typography)({
  margin: '8px auto',
  textAlign: 'center'
})