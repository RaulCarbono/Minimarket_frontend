import { useState } from "react"
import { counterContext } from "./CounterContext"

const StateContext = () => {

    const [count, setCounter] = useState(0)

  return (
    <div>StateContext</div>
  )
}

export default StateContext