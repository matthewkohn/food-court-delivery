import React, { useEffect, useState } from "react"
import { formatDollar } from "../helpers/formatDollar"
import { handleGET } from "../helpers/fetchRequests"

const CartContext = React.createContext()

function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0.00)
  const [itemCount, setItemCount] = useState(0)
  
  useEffect(() => {
    const totalFromCart = cart.map((item) => parseFloat(item.subtotal)).reduce((p, c) => p + c, 0)
    const newTotal = formatDollar(totalFromCart)
    setTotal(newTotal)
    const newCount = cart.map((item) => parseInt(item.quantity)).reduce((p, c) => p + c, 0)
    setItemCount(newCount)
  }, [cart])

  function loadCart() {
    handleGET('/cart_items')
    .then((items) => {
      const sortedItems = items.sort((a,b) => a.id - b.id)
      setCart(sortedItems)
    })
  }

  const value = { cart, setCart, total, itemCount, loadCart }

  return (
    <CartContext.Provider value={ value }>
      { children }
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }