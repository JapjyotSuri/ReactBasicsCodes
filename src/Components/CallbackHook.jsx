import React, { useCallback, useState } from 'react'
import CallbackHookSearch from './CallbackHookSearch';

const CallbackHook = () => {
    const allUsers = [
        'john',
        'alex',
        'george',
        'simon',
        'james',
      ];
    const [users,setUsers]=useState(allUsers)
    function shuffle(array){
        for (let i = array.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [array[i], array[randomIndex]] = [array[randomIndex], array[i]]; // Swaping elements to shuffle items
          }
          return array;//returning the shuffled array
    }
    // const handleSearch=(text) => {
    //if we write it like this react on each render treats the same function as different making this function to get called again even if the value is not changed
    //     const filteredUsers=allUsers.filter((user) => user.includes(text));
    //     setUsers(filteredUsers);
    // }
    const handleSearch=useCallback((text) => {//Now we can use the useCallback hook here as when we use useCallback it will consider the function as the same function even after rendering till the time anything in the dependency array is not changed
        console.log(users[0]);//If over here we dont write users in the dependecy array what will happen is that this function will remember the users array that was present on the first render hence it will always show the orignal first element of the array even after filtering takes place
        const filteredUsers=allUsers.filter((user) => user.includes(text));
        setUsers(filteredUsers);

    },[users,allUsers])
  return (
    <div>
      <div className='align-center mb-2 flex'>
        <button onClick={() => setUsers(shuffle(allUsers))}>
          Shuffle
        </button>

        <CallbackHookSearch onChange={handleSearch} />
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  )
}

export default CallbackHook
