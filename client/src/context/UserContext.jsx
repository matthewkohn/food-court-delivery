import React, { useEffect, useState } from "react"

const UserContext = React.createContext()

function UserProvider({ children }) {
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

  const value = { user, setUser }

  return (
    <UserContext.Provider value={ value }>
      { children }
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }