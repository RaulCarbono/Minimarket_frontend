import { useState } from "react"
import { counterContext } from "./CounterContext"

const StateContext = ({ children }) => {

    const [register, setRegister ] = useState(false)

  return (
    <counterContext.Provider
    value={{
        register,
        setRegister
    }}
    >
        {children}
    </counterContext.Provider>
  )
}

export default StateContext