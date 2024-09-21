import React, { useState } from 'react'

const FormValidate = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState({})
    function handleEmail(e){
        e.preventDefault();
        setEmail(e.target.value)
    }
    function handlePass(e){
        e.preventDefault();
        setPassword(e.target.value)
    }
    function validate(){
        const errors={}
        const emailReg=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!email){
             errors.email='Email is required'
        }
        if(!emailReg.test(email)){
            errors.email='enter valid email'
        }
        if(!password){
            errors.password="please enter password"
        }
        if(password.length < 6){
            errors.password='password should be atleast 6 characters long'
        }
        setError(errors)
    }
    function handleSubmit(){
        if(validate()){
            alert('submitted successfully')
        }
        
    }
  return (
    <div>
      <label>Email</label>
      <input type='text' value={email} onChange={(e) => {handleEmail(e)}}></input>

      {error.email && <p style={{color: 'red'}}>{error.email}</p>}
      <label>Password</label>
      <input type='text' value={password} onChange={(e) => {handlePass(e)}}></input>
      {error.password && <p style={{color: 'red'}}>{error.password}</p>}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default FormValidate
