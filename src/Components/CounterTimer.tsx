import React, { useRef, useState } from 'react'

const CounterTimer = () => {
    const [timer, setTimer] = useState(0);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)
    const [, forceRender] = useState(0);
    const lapRef = useRef<number[]>([])
    function handleStart() {
        if (intervalId === null) {
            const timer = setInterval(() => {
                setTimer((timer) => timer + 1)

            }, 1000)
            setIntervalId(timer)
        }

    }
    function handleStop() {
        if (intervalId !== null) {
            clearInterval(intervalId)
        }
        setIntervalId(null)

    }
    function handleLap() {
        lapRef.current = [...lapRef.current, timer]
    }
    function handleRemove(lapDelete: number) {
        lapRef.current = lapRef.current.filter((lap) => lap !== lapDelete)
        forceRender((prev) => prev + 1)
    }
    function handleReset() {
        setTimer(0);
        lapRef.current=[]
        if (intervalId !== null) {
            clearInterval(intervalId)
        

        }
        setIntervalId(null);
    }
    function formatTime(timeInSec){
        const mins=Math.floor(timeInSec/60)
        const seconds=timeInSec%60
        return `${mins}:${seconds < 10 ? '0': ''}${seconds}`
    }
    return (
        <div>
            <h1>Time: {formatTime(timer)}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleLap}>Lap</button>
            <button onClick={handleReset}>Reset</button>
            <div>
                {lapRef.current.map((lap, idx) => (
                    <div>
                        <h1>lap {idx + 1}: {lap}</h1>
                        <button onClick={() => handleRemove(lap)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CounterTimer
