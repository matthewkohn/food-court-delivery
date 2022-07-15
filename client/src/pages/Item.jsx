import React, { useEffect, useState } from 'react'
import { Container, styled } from '@mui/material'
import { useLocation } from 'react-router-dom'

const Item = () => {
  const [item, setItem] = useState({})
  const location = useLocation()

  useEffect(() => {
    if (location.state !== null) {
      setItem(location.state)
    }
  }, [location])

  console.log("ITEM: ", item)
  
  return (
    <ItemContainer>
      <h1>ITEM</h1>
    </ItemContainer>
  )
}

export default Item


const ItemContainer = styled(Container)({
  margin: '100px auto',


})