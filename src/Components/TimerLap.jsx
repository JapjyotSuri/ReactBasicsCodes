import React, { useRef, useState } from 'react'

const TimerLap = () => {
    const [timer,setTimer]=useState(0);
    const [intervalId,setIntervalId]=useState(null)
    const [,forceRender]=useState(0);
    const lapRef=useRef([])
    function handleStart(){
        const intervalId=setInterval(() => {
            setTimer((prev) => prev+1)
        },1000)
        setIntervalId(intervalId) 
    }
    function handleStop(){
        clearInterval(intervalId)
    }
    function handleLap(){
        lapRef.current=[...lapRef.current,timer]
    }
    function handleReset(){
        setTimer(0);
        clearInterval(intervalId);
    }
    function handleRemove(lapDelete){
        lapRef.current=lapRef.current.filter((lap) => lap != lapDelete)
        forceRender((prev) => prev+1)
    }
  return (
    <div>
        <h1>Time: {timer}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleLap}>Lap</button>
        <button onClick={handleReset}>Reset</button>
        <div>
            {lapRef.current.map((lap,idx) => (
                <div>
                  <h1>lap {idx+1}: {lap}</h1>
                  <button onClick={() => handleRemove(lap)}>Remove</button>
                  </div>
            ))}
        </div>
    </div>
  )
}

export default TimerLap
