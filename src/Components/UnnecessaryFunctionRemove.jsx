import React, { useCallback, useEffect, useState } from 'react'
const functionsCounter = new Set();

const howManyFunctionCalled = (increment, decrement, incrementOtherCounter) => {//set is like an array but it doent allow duplicate value
  functionsCounter.add(increment);//here it will add increment function to the Set functionsCounter but if it is already present it will not add it
  functionsCounter.add(decrement);
  functionsCounter.add(incrementOtherCounter);
  console.log(functionsCounter.size);
};

const UnnecessaryFunctionRemove = () => {

    const [counter, setCounter] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter(prevCounter => prevCounter + 1);
  
    console.log("Inc");
  }, []);

  const decrement = useCallback(() => {
    setCounter(prevCounter => prevCounter + 1);
    console.log("Inc");
  }, []);

  const incrementOtherCounter = useCallback(() => {
    setOtherCounter(prevCounter => prevCounter - 1);
    
    console.log("Inc");
  }, []);

  useEffect(() => {
    howManyFunctionCalled(increment, decrement, incrementOtherCounter);
},[increment,decrement,incrementOtherCounter])
  return (
    <div>
      <h1>
        <code>useCallback()</code>
      </h1>
      <h3>Counter Value:{counter}</h3>
      <h3>Other CounterValue:{otherCounter}</h3>
      <h3>{`No of function calls: ${functionsCounter.size}`}</h3>
      <button onClick={decrement}>Decrement -</button>
      <button onClick={increment}>Increment +</button>
      <button onClick={incrementOtherCounter}>IncrementOtherCounter +</button>
    </div>
  )
}

export default UnnecessaryFunctionRemove
