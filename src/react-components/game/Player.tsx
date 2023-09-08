import React from 'react'

type Props = {
    className: string
    bg: string
    number: number
}

const Player = ({ className, bg, number }: Props) => {
  return (
        <>
            <div onMouseDown={() => {
                console.log("down")
            }}
            className={`${className} ${bg} focus:border focus:border-white  w-[40px] h-[40px] select-none relative cursor-grabbing -rotate-90  mt-40 perspective-800 transform rotate-x-2 shadow-lg`}>
                <div className="w-full h-full flex items-center justify-center transform -rotate-x-2">
                    <div className="text-center h-full text-white">
                    <p className="text-[10px] "></p>
                    <p className="text-sm font-bold mt-1">{number}</p>
                    
                    </div>
                </div>
            </div>
        </>
  )
}

export default Player