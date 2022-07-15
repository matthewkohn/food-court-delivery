import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
// import { useLocation, useNavigate } from 'react-router-dom'

const MenuItems = () => {
  const [items, setItems] = useState([])
  const location = useLocation()
  const url = location.pathname

  console.log(location)
  useEffect(() => {
    console.log("URL: ", url)
    fetch(url)
      .then((res) => res.json())
      .then(setItems)
  }, [url])

  console.log("ITEMS: ", items)

  return (
    <div>MenuItems</div>
  )
}

export default MenuItems


