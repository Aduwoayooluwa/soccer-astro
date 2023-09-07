import React, { useState } from 'react'

type Props = {}

const Ball = (props: Props) => {
    const [ballClicked, setBallClicked] = useState(false)
    
  return (
    <button className={`absolute  ${ballClicked ? "right-[28]" : "left-0"} `} onClick={(e) => {
        setBallClicked(!ballClicked)
        console.log(ballClicked)
    }} draggable={'true'}>
        <img draggable="true" className="w-[20px]" src={"button.png"} alt="ball"/>
    </button>
  )
}

export default Ball