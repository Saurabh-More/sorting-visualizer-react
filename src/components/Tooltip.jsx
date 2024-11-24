import React from "react"
import { BsInfo, BsInfoSquare } from "react-icons/bs"
const algorithms = [
  {
    name: "Bubble Sort",
    description: "Repeatedly swaps adjacent elements if they are in the wrong order. Simple but inefficient for large datasets.",
    timeComplexity: "O(n²)",
    bestUseCase: "Small datasets or as a teaching tool for beginners.",
  },

  {
    name: "Insertion Sort",
    description:
      "Builds the sorted array one element at a time by comparing each new element with those already sorted. Efficient for small datasets or nearly sorted data.",
    timeComplexity: "O(n²)",
    bestUseCase: "Small datasets, especially when the array is already partially sorted.",
  },
  {
    name: "Selection Sort",
    description:
      "Repeatedly selects the smallest (or largest) element from the unsorted part and moves it to the beginning. Performs fewer swaps than Bubble Sort but is still inefficient for large datasets.",
    timeComplexity: "O(n²)",
    bestUseCase: "Situations where memory writes are costly.",
  },

  {
    name: "Merge Sort",
    description:
      "Divides the array into halves, sorts each half, and then merges them back together. More efficient than simple algorithms and works well with large datasets.",
    timeComplexity: "O(n log n)",
    bestUseCase: "Large datasets or when stable sorting is required.",
  },
  {
    name: "Quick Sort",
    description:
      "Picks a pivot element and partitions the array around the pivot. One of the fastest sorting algorithms for average cases but can perform poorly on certain datasets without optimization.",
    timeComplexity: "O(n log n) on average, O(n²) in the worst case",
    bestUseCase: "Large datasets where average performance is more important than the worst case.",
  },
]

const Tooltip = ({ index }) => {
  const algo = algorithms[index]

  if (!algo) return null // Handle invalid index

  return (
    <div className="tooltip">
      <BsInfoSquare style={{ color: "green", fontSize: "18px" }} />
      <span className="tooltiptext">
        <strong>{algo.name}</strong>
        <br />
        <em>{algo.description}</em>
        <br />
        <strong>Time Complexity:</strong> {algo.timeComplexity}
        <br />
        <strong>Best Use Case:</strong> {algo.bestUseCase}
      </span>
    </div>
  )
}

export default Tooltip
