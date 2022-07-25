import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import SignIn from '../pages/SignIn'
import Menus from '../pages/Menus'
import MenuItems from '../pages/MenuItems'
import Item from '../pages/Item'
import Cart from '../pages/Cart'
import { Routes, Route } from 'react-router-dom'
import { Container, styled } from '@mui/material'
import { CartProvider } from '../context/CartContext'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me")
      .then((res) => {
        if (res.ok) {
          res.json().then((user) => setUser(user))
        } else {
          console.log("Please log in or create an account")
        }
      })
  }, [])

  if (!user) return <SignIn onLogin={setUser} />

  return (
    <CartProvider>
      <AppContainer>
        <Navbar logout={ setUser } />
        <Routes>
          <Route path='/menus' element={ <Menus currentUser={ user } /> } />
          <Route path='/menus/:id' element={ <MenuItems /> } />
          <Route path='/item/:id' element={ <Item />} />
          <Route path='/cart' element={ <Cart currentUser={user} /> } />
        </Routes>
      </AppContainer>
    </CartProvider>
  );
}

export default App;


const AppContainer = styled(Container)({
  margin: 'auto',
})