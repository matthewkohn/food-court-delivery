import React, { useEffect, useState } from 'react'
import { handleGET } from '../../../helpers/fetchRequests'
import AddItemForm from '../items/AddItemForm'
import { handleAPI } from '../../../helpers/fetchRequests'
import { Box, Button, Card, Container, styled, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'


const MenuItems = () => {
  const [menuArr, setMenuArr] = useState([])
  const [items, setItems] = useState([])
  const navigate = useNavigate()
  const location = useLocation()
  const [newItem, setNewItem] = useState({
    name: "",
    price: 0,
    description: ""
  })

  useEffect(() => {
    handleGET(location.pathname)
    .then((menu) => {
      setMenuArr(menu)
      setItems(menu.items)
    })
    // eslint-disable-next-line
  }, [location])

  const handleClick = (item) => {
    navigate( `/item/${item.name}`, { state: [item, menuArr] } )
    console.log("Item: ", item)
    console.log("MenuArr: ", menuArr)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const url = `/menus/${menuArr.id}/items`
    handleAPI(url, "POST", newItem)
    .then(res => res.json())
    .then((item) => {
      setItems([...items, item])
    })
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

  return (
    <>
      <Header>
        <Title variant='h3'>{ menuArr.name } Menu</Title>
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
        <AddItemForm newItem={newItem} handleNewItem={setNewItem} onSubmit={handleSubmit} />
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