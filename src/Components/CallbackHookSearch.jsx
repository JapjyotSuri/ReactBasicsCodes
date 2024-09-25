import React from 'react'
import { memo } from 'react';//Here what memo does is it only re-renders the component if the props coming to it are changed.Memo is used to improve performance and reduce the number of unnecessary re-renders
const CallbackHookSearch = ({onChange}) => {
    console.log('search is rendered')
  return (
    <div>
    <input
      type='text'
      placeholder='Search users...'
      onChange={(e) => onChange(e.target.value)}
    />
    </div>
  )
}

export default memo(CallbackHookSearch)
