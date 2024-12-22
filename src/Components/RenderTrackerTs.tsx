import React, { useEffect, useRef, useState } from 'react'

const RenderTrackerTs = () => {
    const countRef=useRef<number>(0)
    useEffect(() => {
        countRef.current=countRef.current+1;

    })
    const [count,setCount]=useState(0)
    function handleReset(){
        countRef.current=0;
    }
  return (
    
    <div>
      <h1>Rendered : {countRef.current}</h1>
      <button onClick={() => setCount((prev) => prev+1)}>Render</button>
      <button onClick={handleReset}>Reset Count</button>
    </div>
  )
}

export default RenderTrackerTs
