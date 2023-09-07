import React, { useEffect, useState } from 'react';

const CountdownTimer: React.FC = () => {
  const initialTimeInSeconds = 120; // 2 minutes in seconds
  const [remainingTime, setRemainingTime] = useState(initialTimeInSeconds);
  const [message, setMwessage] = useState("")
  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime((prevTime) => prevTime - 1);
      } else {
        clearInterval(interval);
        // Perform actions when the timer ends (game over)
        alert("Game Ended")
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTime]);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <div className="timer">
    {
        remainingTime !== 0 && (
            <>
                <p className='text-xl font-semibold'>{minutes}:{seconds < 10 ? '0' : ''}{seconds}</p>
            </>
        )
    }
      

      {
        remainingTime === 0 && (<>
            <p className='font-bold text-center text-red-600 text-3xl'>Game Ended</p> 
        </>)
      }
    </div>
  );
};

export default CountdownTimer;
