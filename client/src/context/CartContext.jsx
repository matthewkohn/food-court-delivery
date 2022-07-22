import React, { useEffect, useState } from "react";

const CartContext = React.createContext()

function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [itemCount, setItemCount] = useState(0)
  
  useEffect(() => {
    const totalFromCart = cart.map((item) => item.subtotal).reduce((p, c) => p + c, 0)
    const newTotal = totalFromCart.toLocaleString("en-US", {maximumFractionDigits:2, minimumFractionDigits:2})
    setTotal(newTotal)
    const newCount = cart.map((item) => parseInt(item.quantity)).reduce((p, c) => p + c, 0)
    setItemCount(newCount)
  }, [cart])

  const value = [cart, setCart, total, itemCount]

  return (
    <CartContext.Provider value={ value }>
      { children }
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }