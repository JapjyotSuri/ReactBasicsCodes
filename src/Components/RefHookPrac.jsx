import React, { useEffect, useRef } from 'react'

const RefHookPrac = () => {
    const inputRef=useRef([]);
    
    useEffect(() => {
       console.log(inputRef.current)
    },[])
    function handleEnter(e,index){
        if(e.key === 'Enter'){
      if(index < inputRef.current.length-1){
        inputRef.current[index+1].focus()
      }
    }
    }
  return (
    <div>
      <input type='text' ref={(e) => (inputRef.current[0] = e)} onKeyDown={(e) => handleEnter(e,0)} />
      <input type='text' ref={(e) => (inputRef.current[1]= e)} onKeyDown={(e) => handleEnter(e,1)} />
      <input type='text' ref={(e) => (inputRef.current[2] = e)} onKeyDown={(e) => handleEnter(e,2)}/>
      <input type='text' focus={false}/>
    </div>
  )
}

export default RefHookPrac
