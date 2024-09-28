import React, { useState } from 'react';
import './Counter.css';

function Counter() {
   const [counter, setCounter] = useState(0);
   const [initialCount, setInitialCount] = useState(0);

   const handleInitialCountChange = (event) => {
      setInitialCount(Number(event.target.value)); // Convert input value to number
   };

   const handleReset = () => {
      setCounter(initialCount); // Reset counter to initial count
   };

   return (
      <div className='counter-container'>
         <h1>Simple Counter Application</h1><br />
         <button onClick={() => setCounter(counter + 1)}>Increment</button>
         <button onClick={() => setCounter(counter - 1)}>Decrement</button>
         <button onClick={handleReset}>Reset</button>
         <h2>Count: {counter}</h2>
      </div>
   );
}

export default Counter;
