// import { useEffect, useState } from "react"
// import bubbleSort from "../algorithms/bubbleSort"
// import insertionSort from "../algorithms/insertionSort"
// import selectionSort from "../algorithms/selectionSort"
// import Header from "../components/Header"
// import SortingStatusMessage from "../components/SortingStatusMessage"
// import RangeSlider from "../components/RangeSlider"
// import RandomArrayGenerator from "../components/RandomArray"
// import Footer from "../components/Footer"
// import mergeSort from "../algorithms/mergeSort"
// import { default_col } from "../helper/helper"
// import quickSort from "../algorithms/quickSort"
// import "../App.css"
// function SortingController() {
//   const [time, setTime] = useState(0)
//   return (
//     <div className="controller">
//       <RangeSlider setTime={setTime} />
//       <RandomArrayGenerator setColumns={setColumns} />
//       <button
//         className="btn"
//         style={{ backgroundColor: "#a66cff" }}
//         onClick={() => bubbleSort(columns, setColumns, time)}>
//         Bubble Sort
//       </button>
//       <button
//         className="btn"
//         onClick={() => insertionSort(columns, setColumns, time, setMessage)}
//         style={{ backgroundColor: "#a66cff" }}>
//         insertion Sort
//       </button>
//       <button
//         className="btn"
//         onClick={() => selectionSort(columns, setColumns, time, setMessage)}
//         style={{ backgroundColor: "#a66cff" }}>
//         selection Sort
//       </button>

//       <button
//         className="btn"
//         onClick={() => mergeSort(columns, setColumns, time, setMessage)}
//         style={{ backgroundColor: "#a66cff" }}>
//         Merge Sort
//       </button>

//       <button
//         className="btn"
//         onClick={() => quickSort(columns, setColumns, time, setMessage)}
//         style={{ backgroundColor: "#a66cff" }}>
//         Quick Sort
//       </button>

//       <button
//         className="btn"
//         onClick={() => {
//           location.reload()
//         }}
//         style={{ backgroundColor: "#a66cff" }}>
//         reset
//       </button>
//     </div>
//   )
// }

// export default SortingController
