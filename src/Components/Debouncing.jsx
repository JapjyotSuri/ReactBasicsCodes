import React, { useRef } from 'react'

const Debouncing = () => {
    const timerRef=useRef(null)
    let count=0
    function dataFetching(e){//simulating fetching data
      console.log('fetching data', count++, 'requested for',e.target.value);//also sending count of when the fetching data is being called
    }
    
    function handleDebouncing(dataFetching,delay,e){
        if(timerRef.current){
            clearTimeout(timerRef.current)//if before the delay expires this function is called again the prev timer will get cleared and a new timeout will be created
        }
       
        timerRef.current=setTimeout(() => {
            dataFetching(e)
        }, delay);
    }
  return (
    <div>
      <input type='text' onKeyUp={(e) => handleDebouncing(dataFetching,1000,e)}/>

     
    </div>
  )
}

export default Debouncing
