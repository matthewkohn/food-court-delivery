import React, { useContext } from 'react'
import SignIn from './login/SignIn'
import Navbar from './Navbar'
import Menus from './menu/Menus'
import MenuItems from './menu/MenuItems'
import Item from './items/Item'
import Cart from './cart/Cart'
import OrderHistory from './orders/OrderHistory'
import { UserContext } from '../context/UserContext'
import { Routes, Route } from 'react-router-dom'
import { Container, styled } from '@mui/material'


function App() {
  const { user } = useContext(UserContext)

  if (!user) return <SignIn />

  return (
    <AppContainer>
      <Navbar />
      <Routes>
        <Route path='/menus' element={ <Menus /> } />
        <Route path='/menus/:id' element={ <MenuItems /> } />
        <Route path='/item/:id' element={ <Item />} />
        <Route path='/cart' element={ <Cart /> } />
        <Route path='/orders' element={ <OrderHistory /> } />
        <Route path='/' element={ <SignIn /> } />
      </Routes>
    </AppContainer>
  );
}

export default App;


const AppContainer = styled(Container)({
  margin: 'auto',
})