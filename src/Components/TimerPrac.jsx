import React, { useEffect, useRef, useState } from 'react'

const TimerPrac = () => {
    const [timer,setTimer]=useState(10);
    const [intervalId,setIntervalId]=useState(null)
    const [disableStart,setDisableStart]=useState(false);
    const [disableRestart,setDisableRestart]=useState(true);
    const [disableCount,setDisableCount]=useState(true);
    const countRef=useRef(0);
    useEffect(() => {
       if(timer === 0){
        setDisableRestart(false);
       }
    },[timer])
    function handleStart(){
        setDisableStart(true);
        setDisableCount(false);

        const intervalid=setInterval(() => {
            setTimer((prev) => {
                if(prev>0) {
                    return prev-1
                }
                else{
                    setDisableStart(false);
                    setDisableCount(true)
                    return 0;
                }
            })
        },1000)
        setIntervalId(intervalid)
    }
    function handleStop(){
        clearInterval(intervalId);
        setDisableStart(false);
        setDisableCount(true)

    }
    function handleRestart(){
        clearInterval(intervalId)
        setTimer(10);
        setDisableStart(false);
        setDisableCount(true)
        
    }
    function handleInc(){
         countRef.current=countRef.current+1;
    }
  return (
    <div>
        <h1>Time left: {timer}</h1>
        <h1>Number of times clicked: {countRef.current}</h1>
        <button onClick={handleStart} disabled={disableStart}>Start Timer</button>
        <button onClick={handleStop} disabled={!disableStart}>Stop</button>
        <button onClick={handleRestart} disabled={disableRestart}>Restart</button>
        <button onClick={handleInc} disabled={disableCount}>+</button> 

    </div>
  )
}

export default TimerPrac
