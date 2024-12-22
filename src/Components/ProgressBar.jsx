import React, { useState } from 'react'

const ProgressBar = () => {
    const [value,setValue]=useState(0);
    function handleInput(e){

       e.preventDefault();
       if(e.target.value === ''){//Added this because once we write something in the input and then make it empty the progress bar was not being set to 0
        console.log('input is empty')
        setValue(0)
       }
       else{
        const newValue = Math.max(0, Math.min(100, e.target.value));//adding condition to keep input between 0 and 100
        setValue(newValue)
       }
       
    }
  return (
    <div>
      <h1>Progress bar</h1>
        <div style={{borderStyle: 'solid',borderWidth: '2px',height: '25px',width: '50%'}}>
            <div style={{width: `${value}%`,backgroundColor: 'yellow',height: '100%'}}>

            </div>
        </div>
        <form>
          <label for="html">Input Percentage:</label>
          <input type="number"  onChange={handleInput} min='0' max='100' />
        </form>
      </div>
    
  )
}

export default ProgressBar
