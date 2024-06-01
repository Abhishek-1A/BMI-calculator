import "./App.css";
import React, { useMemo, useState } from "react";
function App() {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(50);

  function onWeightChange(event) {
    setWeight(event.target.value);
  }
  function onHeihtChange(event) {
    setHeight(event.target.value);
  }

     const output = useMemo(() =>{
     const calculateHeight = height/100;
     return (weight/(calculateHeight*calculateHeight)).toFixed(1)
     },[weight,height]);    
  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className="input-section">
        <p className="slider-output">Weight{weight}: 80kg</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          onChange={onWeightChange}
        />
        <p className="slider-output">Height:{height}cm</p>
        <input className="input-slider" 
        type="range" 
        onChange={onHeihtChange}
        min="140"
        max="220"
        />
      </div>
      <div className="output-section">
        <p>Your BMI is:{output} </p>
      </div>
    </main>
  );
}

export default App;
