import React, { useState, useRef, useEffect } from 'react';

const Resise = () => {
  const elementRef = useRef(null); // Reference to the DOM element
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Function to update dimensions
  const updateDimensions = () => {
    if (elementRef.current) {
      setDimensions({
        width: elementRef.current.offsetWidth,
        height: elementRef.current.offsetHeight,
      });
    }
  };

//   // Set up an event listener on window resize to update dimensions
//   useEffect(() => {
//     // Initial measurement
//     updateDimensions();

//     // Add event listener to track window resize
//     window.addEventListener('resize', updateDimensions);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('resize', updateDimensions);
//     };
//   }, []); // Empty array means this effect runs once after initial render

  return (
    <div>
      <h1>Measure DOM Element</h1>
      <div
        ref={elementRef}
        style={{
          width: '50%',
          height: '200px',
          backgroundColor: 'lightblue',
          margin: '0 auto',
          textAlign: 'center',
          lineHeight: '200px',
        }}
      >
        Resize the window!
      </div>
      <div>
        <h2>Element Dimensions:</h2>
        <p>Width: {dimensions.width}px</p>
        <p>Height: {dimensions.height}px</p>
      </div>
    </div>
  );
};

export default Resise;
