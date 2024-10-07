import React from 'react'
import animation from "./animation.json"
import Lottie from 'lottie-react'

function HomeAnimation() {
  return (
    <div>
        <Lottie animationData={animation}
        />
    </div>
  )
}

export default HomeAnimation