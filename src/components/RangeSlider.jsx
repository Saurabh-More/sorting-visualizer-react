import React, { useState } from "react"

const RangeSlider = ({ min = 11, max = 1100, step = 1, initialValue = 880, setTime, disable }) => {
  const [value, setValue] = useState(initialValue)
  setTime(1100 - value)
  const handleChange = (event) => {
    setValue(event.target.value)
    setTime(1100 - value)
  }

  return (
    <div className="range-slider">
      <label
        htmlFor="slider"
        style={{ color: "white" }}>
        Control Speed: {Math.floor(value / 11)}
      </label>
      <input
        type="range"
        id="slider"
        name="slider"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        disabled={disable}
      />
    </div>
  )
}

export default RangeSlider
