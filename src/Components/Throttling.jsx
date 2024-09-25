import React, { useState } from 'react'

const Throttling = () => {
    const [isThrottling, setIsThrottling] = useState(false);//added this to disable the button till the time the limit is going on

    function throttle(expensive,limit){//expensive is a function that does some expensive computation everytime the window is resized or anything that needs to be returned
        let flag=true
        return function(...args){
            if(flag){
                //this refers to the context in which the throttled function is called.
                expensive.apply(this,args);//The args is an array of arguments that are passed to the expensive function. 
                //Using apply() allows you to pass an array of arguments, so if our expensive function needs any parameters, they will be passed correctly.
                flag=false;
                setIsThrottling(true);
                setTimeout(() => {
                    flag=true
                    setIsThrottling(false);
                },limit)
            }
            
        }
    }
     
    function printHello(){//assuming this to be an expensive function
        console.log('hello')
    }
    const throttledPrintHello=throttle(printHello,1000)
  return (
    <div>
       <button onClick={throttledPrintHello} disabled={isThrottling} > {isThrottling ? 'Please Wait': 'Print Hello'}</button>
    </div>
  )
}

export default Throttling
