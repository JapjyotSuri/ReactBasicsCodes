import React, { useState } from "react";
import './ButtonChange.css'
const ButtonChange = () => {
    const [isClicked,setIsClicked]=useState(false)
    const [color,setColor]=useState('brown');
    const $color='red';
    return(
        <div style={{display: "flex",flexDirection: 'column',justifyContent: 'center',alignItems: 'center',backgroundColor: color,width: isClicked? '100%' : '70%'}}>
            <button className={`btn ${isClicked ? 'btn_red btn_wide': 'btn_blue btn_small'}`} />
            <button className="clickme" onClick={()=> {
                setIsClicked((prev) => !prev) 
                setColor((prev) => prev==='brown' ? 'pink': 'brown')
            }}>Click me!!</button>
            <button id="btnId">Button with id</button>
        </div>
    )
}
export default ButtonChange