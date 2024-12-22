import React, { ChangeEvent, useState, useTransition } from 'react'

const UseTransitionHook = () => {
    const [isPending, startTransition] = useTransition()
    const [input, setInput] = useState('')
    const [list, setList] = useState<string[]>([])

    const LIST_SIZE = 20000

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value)
        //below if we dont use the useTransition hook what happens is that the below code simulates a heavy computation and this causes the whole site to lag when we type something in the input as it waits for both the setStates to happen and then render the site
        startTransition(() => {//when we put anything inside startTransition it basically means that we are giving it low priority and this will run in the background while the higher priority render will take place 
            const l: string[] = []
            for (let i = 0; i < LIST_SIZE; i++) {//this simulates a heavy computation to test how effective useTransition hook is 
                l.push(e.target.value)
            }
            setList(l)
        })
    }
    //isPending is used to show something till the time the low priority stuff is happening like a loader or anything else
    return (
        <div>
            <input onChange={handleChange} type='text' ></input>
            <div>
                {
                    isPending ? "Loading....." : list.map(
                        (item) => <h1>{item}</h1>
                    )
                }
            </div>
        </div>
    )
}

export default UseTransitionHook
