import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

const UseLayoutEffectPrac = () => {
    const [show,setShow]=useState(false);
    const button=useRef<HTMLButtonElement | null>(null);
    const popup=useRef<HTMLDivElement | null>(null)
    const [poppupPosition,setPoppupPosition]=useState({top: 0})
    // useEffect(() => {
    //     if(popup.current == null || button.current == null){//here we are putting condition to check wether there is a button and a popup refernce otherwise we will not do anything
    //         return
    //     }
    //     const {bottom}=button.current.getBoundingClientRect()//getBoundingClientRect is a DOM method that returns a DOMRect object, which provides information about the position and size of the element relative to the viewport
    //     //botto, represents the distance from the top of of thr viewport to the bottom edge of the button
    //     popup.current.style.top=`${bottom+25}px`//this makes the popup appear 25 px below the button

        
    // })
    //when we use useEffect hook and see the result in slow motion what happens is that the poppup first gets displayed just below the button and after sometime it is shown 25pxs below the button but when using useLayoutEffect it is shown 25 px below the button from the start
    useLayoutEffect(() => {
        if(popup.current && button.current){//here we are putting condition to check wether there is a button and a popup refernce otherwise we will not do anything
            const {bottom}=button.current.getBoundingClientRect()//getBoundingClientRect is a DOM method that returns a DOMRect object, which provides information about the position and size of the element relative to the viewport
            //botto, represents the distance from the top of of thr viewport to the bottom edge of the button
            // popup.current.style.top=`${bottom+25}px`//this makes the popup appear 25 px below the button
            setPoppupPosition({top: bottom+25})
        }   
    },[show])
  return (
    <div>
      <button ref={button} onClick={() => {setShow((prev) => !prev)
        console.log('button is clicked')
      }}> 
        Click here!!!
      </button>
      {
        show && (
            <div style={{ position:'absolute',top: `${poppupPosition.top}px`}} ref={popup}>
                This is a popup
            </div>
        )
      }
    </div>
  )
}

export default UseLayoutEffectPrac
