import React, { useRef } from 'react'

const ScrollToDiv = () => {
    const divRef1 = useRef<HTMLDivElement | null>(null)
    const divRef2 = useRef<HTMLDivElement | null>(null)
    const divRef3 = useRef<HTMLDivElement | null>(null)
    function handleScroll(divRef: React.RefObject<HTMLDivElement | null>) {//RefObject is a type provided by React to represent the object returned by useRef() for accessing DOM elements.
        if(!divRef.current){
            console.log("Failed to find div reference")
            return ;
        }
       
            divRef.current.scrollIntoView({ behavior: 'smooth' })

    }
    return (


        <div>
            <button onClick={() => { handleScroll(divRef1) }} aria-label='Scroll to div 1'>Go to div 1</button>
            <button onClick={() => { handleScroll(divRef2) }} aria-label='Scroll to div 2'>Go to div 2</button>
            <button onClick={() => { handleScroll(divRef3) }} aria-label='Scroll to div 3'>Go to div 3</button>

            <div ref={divRef1} style={{ height: 400, backgroundColor: 'black' }}>
                <h1>First div </h1>
            </div>
            <div ref={divRef2} style={{ height: 400, backgroundColor: 'red' }}><h1>Second div</h1></div>
            <div ref={divRef3} style={{ height: 400, backgroundColor: 'yellow' }}><h1>third div</h1></div>
        </div>
    )
}

export default ScrollToDiv
