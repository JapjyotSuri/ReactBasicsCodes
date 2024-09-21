import React, { useState } from 'react'


const HideContent = () => {
    const [toggle,setToggle]=useState(false)
    function handleToggle(){
        setToggle((prev) => !prev)
    }
  return (
    <div>
      {
        toggle && 
            <div>
                <h1>Content is here</h1>
            </div> 
      }
      {
        !toggle &&  <div>
        Click button to get content
    </div>
      }
      <button onClick={handleToggle}>Click to show!!</button>
    </div>
  )
}

export default HideContent
