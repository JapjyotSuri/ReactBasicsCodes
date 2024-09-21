import React, { useState } from "react";
import './PracticeCss.css'
const PracticeCss = () => {
    const [color,setColor]=useState('blue');
    const [toggle,setToggle]=useState(false);
    function handleChange(){
        setColor((prev) => prev === 'blue' ? 'black' : 'blue' )
    }
    function handlePos(){
        setToggle((prev) => !prev)
    }
    return(
        <div style={{backgroundColor: 'red',display: 'flex',alignItems: 'center',justifyContent: 'center',flexDirection: 'column'}}>
            <div style={{height: '100px',width: '100px',backgroundColor: `${color}`,}}></div>
            <button onClick={handleChange}>Click me to change color</button>
            <div className={`shiftPos ${toggle ? 'buttonText leftText' : ''}`}><p>hello</p></div>
            <button onClick={handlePos}>Click me to change color</button>
        </div>
    )
}
export default PracticeCss