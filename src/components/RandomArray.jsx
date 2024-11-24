import React, { useEffect, useState } from "react"

const RandomArrayGenerator = ({ setColumns, disable, setInitialState }) => {
  const [minValue, setMinValue] = useState(10)
  const [maxValue, setMaxValue] = useState(100)
  const [length, setLength] = useState(30)
  const handleGenerate = () => {
    const min = parseInt(minValue, 10)
    const max = parseInt(maxValue, 10)

    if (isNaN(min) || isNaN(max) || min >= max) {
      alert("Please enter valid min and max values where min is less than max.")
      return
    }

    const randomArray = Array.from({ length: length }, () => Math.floor(Math.random() * (max - min + 1)) + min)
    setColumns([...randomArray])
    setInitialState([...randomArray])
  }

  useEffect(() => handleGenerate(), [])

  return (
    <div className="rand-class-parent">
      <div className="rand-class">
        <label htmlFor="min-value">Min Value:</label>
        <input
          type="number"
          id="min-value"
          className="inpt"
          value={minValue}
          onChange={(e) => setMinValue(e.target.value)}
        />
      </div>
      <div className="rand-class">
        <label htmlFor="max-value">Max Value: </label>
        <input
          type="number"
          id="max-value"
          className="inpt"
          value={maxValue}
          onChange={(e) => setMaxValue(e.target.value)}
        />
      </div>
      <div className="rand-class">
        <label htmlFor="length">length: </label>
        <input
          type="number"
          id="length"
          className="inpt"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <button
        onClick={handleGenerate}
        disabled={disable}
        className="rand-class rand-btn">
        Generate Array
      </button>
      {/* {array.length > 0 && (
        <div>
          <h2>Generated Array: </h2>
          <pre>{JSON.stringify(array, null, 2)}</pre>
        </div>
      )} */}
    </div>
  )
}

export default RandomArrayGenerator
