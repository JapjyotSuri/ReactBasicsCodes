import React, { useReducer } from 'react'

const ReducerPrac = () => {
    const initialState={
        value: 1,
        task: 1,
    }
    function reducer(state,action){
       if(action.type==='val'){
        return   {...state,value: state.value+action.payload}
       }
       return state
    }
    const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <h1>{state.value}</h1>
      <button onClick={() => {
        dispatch({payload: 1,type: 'val'})
      }}>Inc val</button>
      
    </div>
  )
}

export default ReducerPrac
