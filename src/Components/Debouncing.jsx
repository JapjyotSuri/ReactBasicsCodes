import React, { useEffect, useRef, useState } from 'react'

const Debouncing = () => {
    const timerRef=useRef(null)
    const [count,setCount]=useState(0);//this will make value of count persist even if component re-renders
    // let count=0
    useEffect(() => {//It's good practice to clear the timeout when the component unmounts to avoid potential memory leaks
      return () => {
        if(timerRef.current){
          clearTimeout(timerRef.current)
        }
      }
    },[])
    function dataFetching(e){//simulating fetching data
      console.log('fetching data', count, 'requested for',e.target.value);//also sending count of when the fetching data is being called
      setCount((prev) => prev+1 )
    }
    
    // function handleDebouncing(dataFetching,delay,e){
      
    //     if(timerRef.current){
    //         clearTimeout(timerRef.current)//if before the delay expires this function is called again the prev timer will get cleared and a new timeout will be created
    //     }
       
    //     timerRef.current=setTimeout(() => {
    //         dataFetching(e)
    //     }, delay);
    // }

    // The closure is created because the inner function has access to dataFetching function, delay, and timerRef from the outer function, even after the outer function has finished executing. This makes the returned function reusable and flexible.
    function handleDebouncing(dataFetching,delay,){
      return (e) => {//This inner function which is being  returned takes the event e as an argument, which allows this inner function to be used directly in an event handler
        if(timerRef.current){
          clearTimeout(timerRef.current)//if before the delay expires this function is called again the prev timer will get cleared and a new timeout will be created
      }
     
      timerRef.current=setTimeout(() => {
          dataFetching(e)
      }, delay);
      }
      
  }
  return (
    <div>
      <input type='text' onKeyUp={handleDebouncing(dataFetching,1000)}/>
    </div>
  )
}

export default Debouncing
