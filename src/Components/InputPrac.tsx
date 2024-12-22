import React, { InputHTMLAttributes, useRef, useState } from 'react'

const InputPrac = () => {
    const [input,setInput]=useState('');
    function handleInput(event: any){
        event.preventDefault()
        console.log(event.target.value)
        if(inputRef!== null){
            console.log('value in input ref',inputRef.current?.value) 
           
        }
        setInput(event.target.value)
        
    }
    const inputRef=useRef<HTMLInputElement|null>(null);
  return (
    <div>
      <input ref={inputRef} type="text" value={input} onChange={handleInput}></input>
    </div>
  )
}

export default InputPrac
