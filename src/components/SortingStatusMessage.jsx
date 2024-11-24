import React, { useState, useEffect } from "react"

const SortingStatusMessage = ({ message, duration = 2000 }) => {
  const [visible, setVisible] = useState(false)
  const [color, setColor] = useState("white")
  useEffect(() => {
    if (message) {
      setColor("white")
      if (message[1] == "yellow") setColor("red")
      setVisible(true)
      const timer = setTimeout(() => {
        setVisible(false)
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [message, duration])

  return (
    <div
      className={`status-message ${visible ? "show" : "hide"}`}
      style={{ backgroundColor: message[1], color: color }}>
      {message[0]}
    </div>
  )
}

export default SortingStatusMessage
