import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [time,setTime]=useState(10);
    const [intervalId,setIntervalId]=useState(null)
    const [reachedMin,setReachedMin]=useState(false);
    useEffect(() => {
         if(reachedMin){
            clearInterval(intervalId);
         }
    },[reachedMin])
    function handleStart(){
        // if(intervalId === null){ //only will set the value of intervalId once and this is to ensure that we dont start multiple intervals at once
        const interval=setInterval(() => {
            
                setTime((prev) => 
                    {
                        if(prev>0){//here we are checking over here because else because state gets batched so we dont get the latest value so we can get outdated value if we check time before this
                           return prev-1
                        }
                        else {
                            setReachedMin(true)
                            return 0;
                        }
                    }
                    );
            
            

        },1000)
        setIntervalId(interval)
    // }
    }
    function handleStop(){
        if(intervalId!=null){
            clearInterval(intervalId);
        }
        
    }
  return (
    <div>
      <h1>{time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default Timer
