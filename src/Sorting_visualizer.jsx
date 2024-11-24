import { useEffect, useRef, useState } from "react"
import bubbleSort from "./algorithms/bubbleSort"
import insertionSort from "./algorithms/insertionSort"
import selectionSort from "./algorithms/selectionSort"
import Header from "./components/Header"
import SortingStatusMessage from "./components/SortingStatusMessage"
import RangeSlider from "./components/RangeSlider"
import RandomArrayGenerator from "./components/RandomArray"
import Footer from "./components/Footer"
import mergeSort from "./algorithms/mergeSort"
import { default_col } from "./helper/helper"
import quickSort from "./algorithms/quickSort"
import { BiReset } from "react-icons/bi"
import { FaRegCircleStop } from "react-icons/fa6"
import Tooltip from "./components/Tooltip"

function Sorting() {
  const [initialColumns, setInitialState] = useState([])
  const [columns, setColumns] = useState([])
  const [time, setTime] = useState(0)
  const [message, setMessage] = useState(["welcome to sorting", "rgb(166, 108, 255)"])
  const [maxVal, setMaxVal] = useState(1)
  const [disable, setDisable] = useState(false)
  const sortRef = useRef(false)
  const handleReset = () => {
    setColumns([...initialColumns])
    let columnElements = document.getElementsByClassName("column")
    for (let i = 0; i < columnElements.length; i++) {
      columnElements[i].style.backgroundColor = default_col
    }
    sortRef.current = false
  }

  useEffect(() => setMaxVal(Math.max(...columns)), [columns])
  return (
    <>
      <Header />
      <SortingStatusMessage
        message={message}
        duration={1500}
      />
      <div className="container">
        <div className="sort-container">
          {columns.map((value, index) => (
            <div
              key={index}
              className="column"
              style={{
                height: `${(value / maxVal) * 100}%`,
                width: `${(100 * 2) / (3 * columns.length)}%`,
                backgroundColor: default_col,
                borderRadius: "20px",
              }}></div>
          ))}
        </div>
        <div className="controller">
          <RangeSlider
            setTime={setTime}
            disable={disable}
          />
          <RandomArrayGenerator
            setColumns={setColumns}
            disable={disable}
            setInitialState={setInitialState}
          />
          <div className="button-class">
            <button
              className="btn"
              onClick={() => (sortRef.current = !sortRef.current)}
              disabled={sortRef.current || !disable}
              style={{ backgroundColor: "red" }}>
              STOP <FaRegCircleStop />
            </button>

            <div className="btn-wrapper">
              <button
                className="btn"
                disabled={sortRef.current || disable}
                style={{ backgroundColor: "#a66cff" }}
                onClick={async () => {
                  setDisable(true)
                  await bubbleSort(columns, setColumns, time, sortRef)
                  setDisable(false)
                  sortRef.current = true
                }}>
                Bubble Sort
                <Tooltip index={0} />
              </button>
            </div>

            <button
              className="btn"
              disabled={sortRef.current || disable}
              onClick={async () => {
                setDisable(true)
                await insertionSort(columns, setColumns, time, setMessage, sortRef)
                sortRef.current = true
                setDisable(false)
              }}
              style={{ backgroundColor: "#a66cff" }}>
              Insertion Sort
              <Tooltip index={1} />
            </button>
            <button
              className="btn"
              disabled={sortRef.current || disable}
              onClick={async () => {
                setDisable(true)
                await selectionSort(columns, setColumns, time, setMessage, sortRef)
                setDisable(false)
                sortRef.current = true
              }}
              style={{ backgroundColor: "#a66cff" }}>
              selection Sort
              <Tooltip index={2} />
            </button>

            <button
              className="btn"
              disabled={sortRef.current || disable}
              onClick={async () => {
                setDisable(true)
                await mergeSort(columns, setColumns, time, setMessage, sortRef)
                setDisable(false)
                sortRef.current = true
              }}
              style={{ backgroundColor: "#a66cff" }}>
              Merge Sort
              <Tooltip index={3} />
            </button>

            <button
              className="btn"
              disabled={sortRef.current || disable}
              onClick={async () => {
                setDisable(true)
                await quickSort(columns, setColumns, time, setMessage, sortRef)
                setDisable(false)
                sortRef.current = true
              }}
              style={{ backgroundColor: "#a66cff" }}>
              Quick Sort
              <Tooltip index={4} />
            </button>

            <button
              className="btn"
              disabled={disable}
              onClick={handleReset}
              style={{ backgroundColor: "red" }}>
              RESET <BiReset />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Sorting
