import React, { useEffect, useState } from 'react'

const Todo = () => {
    const [todo,setTodo]=useState(['helllo','hi','how are you'])
    const [FilteredTodo,setFilteredTodo]=useState(todo)

    useEffect(() => {
        setFilteredTodo(todo);
    },[todo])
    const [input,setInput]=useState('')
    const [search,setSearch]=useState('')
    
    function handleInput(e){
       e.preventDefault();
       setInput(e.target.value)
    }
    function handleSearch(e){
        e.preventDefault();
        setSearch(e.target.value)
     }
    function handleSubmit(){
        setTodo((prev) => [...prev,input])
        
    }
    function handleSearching(){
        if(search === ''){
            setFilteredTodo(todo)
        }
        else{
            const filtered=todo.filter((todo) => todo.includes(search));
        setFilteredTodo(filtered)
        }
       
    }
  return (
    <div>
      <input type="text" value={input} onChange={(e) => handleInput(e)}></input>
      <button onClick={handleSubmit}>Add</button>
      <h1>Your todo's:</h1>
      <ol>
        {
            FilteredTodo.map((todo,idx) => (
                
                <li key={idx}>{todo}</li>
                
                
            ))
        }
      </ol>
      <input type="text" value={search} onChange={(e) => handleSearch(e)}></input>
      <button onClick={handleSearching}>Search</button>
    </div>
  )
}

export default Todo
