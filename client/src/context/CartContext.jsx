import React, { useEffect, useState } from "react"
import { formatDollar } from "../helpers/formatDollar"

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
  console.log("Total from CartCONTEXT: ", typeof total)

  function loadCart() {
    fetch("/cart_items")
      .then((res) => res.json())
      .then(setCart)
  }

  const value = [cart, setCart, total, itemCount, loadCart]

  return (
    <CartContext.Provider value={ value }>
      { children }
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }