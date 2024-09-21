import React, { useRef } from 'react'

const ScrollToRef = () => {
    const divRef1=useRef(null)
    const divRef2=useRef(null)
    const divRef3=useRef(null)

    function handleScroll(ref){
        ref.current.scrollIntoView({behaviour: 'smooth'})
    }
  return (
    
    <div>
        <button onClick={() => {handleScroll(divRef1)}}>Go to div 1</button>
        <button onClick={() => {handleScroll(divRef2)}}>Go to div 2</button>
        <button onClick={() => {handleScroll(divRef3)}}>Go to div 3</button>
        
      <div ref={divRef1} style={{height: 400,backgroundColor: 'black'}}>
        <h1>First div </h1>
      </div>
      <div ref={divRef2} style={{height: 400,backgroundColor: 'red'}}><h1>Second div</h1></div>
      <div ref={divRef3} style={{height: 400,backgroundColor: 'yellow'}}><h1>third div</h1></div>
    </div>
  )
}

export default ScrollToRef
