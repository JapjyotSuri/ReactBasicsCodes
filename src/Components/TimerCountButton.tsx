import React, { useRef, useState } from 'react'

const TimerCountButton = () => {
    const [timer,setTimer]=useState(10);
    const [intervalId,setIntervalId]=useState<number | null>(null)
    const [disableStart,setDisableStart]=useState(false);
    const [disableRestart,setDisableRestart]=useState(true);
    const [disableCount,setDisableCount]=useState(true);
    const countRef=useRef(0);

    function handleStart(){
        if(intervalId === null){
            //remember that timerId is a number
            const timerId: number=window.setInterval(() => {//using window.setInterval here removes the error that comes when setInterval is called the error that was coming was Timeout is not assignable to parameter of type SetStateAction<number | null>
                setTimer((prev) => {
                    if(prev <= 0){//if our prev is equal to or less than 0 we return 0 and enable the restart button and disable the increment button

                        handleStop()//automatically stoping the timer once it becomes 0
                        setDisableRestart(false);
                        setDisableCount(true);
                        return 0;
                    }
                    return prev-1;
                })

            },1000)
            console.log(timerId)
            setIntervalId(timerId)
            setDisableStart(true)
            setDisableRestart(false)
            setDisableCount(false)
        }
    }
    function handleStop(){
       if(intervalId !== null){
         clearInterval(intervalId)
         setIntervalId(null)
        setDisableStart(false) //this makes start button to enable evrytime we restart
       }
    }
    function handleRestart(){
        handleStop();
        countRef.current=0
        setTimer(10);
        setDisableRestart(true)
        setDisableCount(true)
        // setDisableStart(false)
        
    }
    function handleInc(){
        countRef.current=countRef.current+1;
    }
  return (
    <div>
        <h1>Time left: {timer}</h1>
        <h1>Number of times clicked: {countRef.current}</h1>
        <button onClick={handleStart} disabled={disableStart} aria-label='Start'>Start Timer</button>
        <button onClick={handleStop} disabled={!disableStart || timer === 0 || intervalId==null} aria-label='Stop'>Stop</button>
        <button onClick={handleRestart} disabled={disableRestart} aria-label='Restart'>Restart</button>
        <button onClick={handleInc} disabled={disableCount} aria-label='Increment count'>+</button> 
    </div>
  )
}

export default TimerCountButton
