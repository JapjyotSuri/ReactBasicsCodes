import React from 'react'
import './FormStyle.css'
const Form = () => {
  return (
    <div>
      <form>
        <label>Username</label>
        <input type='text' required className='form'/>
        <button type='submit'>Submit form</button>
      </form>
    </div>
  )
}

export default Form
