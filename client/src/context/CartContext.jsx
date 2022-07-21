import React, { useEffect, useState } from "react";

const CartContext = React.createContext()

function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const value = [cart, setCart, total]

  useEffect(() => {
    const totalFromCart = cart.map((item) => item.subtotal).reduce((prev, curr) => prev + curr, 0)
    setTotal(totalFromCart.toLocaleString("en-US", {maximumFractionDigits:2}))
  }, [cart])

  return (
    <CartContext.Provider value={ value }>
      { children }
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }