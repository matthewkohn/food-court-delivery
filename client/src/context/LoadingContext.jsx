import React, { useState } from "react"

const LoadingContext = React.createContext()

function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false)

  const value = { isLoading, setIsLoading }

  return (
    <LoadingContext.Provider value={ value }>
      { children }
    </LoadingContext.Provider>
  )
}

export { LoadingContext, LoadingProvider }