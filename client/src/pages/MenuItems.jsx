import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
// import { useLocation, useNavigate } from 'react-router-dom'

const MenuItems = () => {
  const [items, setItems] = useState([])
  const location = useLocation()

  console.log(location)
  useEffect(() => {
    const url = location.pathname
    console.log("URL: ", url)
    fetch(url)
      .then((res) => res.json())
      .then(setItems)

  }, [])

  console.log("ITEMS: ", items)

  return (
    <div>MenuItems</div>
  )
}

export default MenuItems


