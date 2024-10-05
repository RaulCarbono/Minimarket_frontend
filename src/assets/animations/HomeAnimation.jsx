import React from 'react'
import animation from "./animation.json"
import { LottiePlayer } from 'lottie-react'

function HomeAnimation() {
  return (
    <div>
        <LottiePlayer src={animation} alt=""
        autoplay  
        loop
        style={{ height: '300px', width: '300px' }}
        />
    </div>
  )
}

export default HomeAnimation