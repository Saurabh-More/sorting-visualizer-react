import { changeColor, resetColor, timeOut } from "../helper/helper"
async function bubbleSort(arr, setColumns, time, sortRef) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Highlight the columns being compared
      // columns[j].style.backgroundColor = "green"
      if (sortRef.current) {
        return
      }

      changeColor(j, "green")
      // columns[j + 1].style.backgroundColor = "green"
      changeColor(j + 1, "green")

      if (arr[j] > arr[j + 1]) {
        changeColor(j, "yellow")
        changeColor(j + 1, "yellow")

        // Swap elements
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp

        await timeOut(0.5 * time)
        // Update columns to trigger re-render
        setColumns([...arr])
      }
      await timeOut(time)
      // Reset the color after comparison
      resetColor(j)
      resetColor(j + 1)
    }
  }
}

export default bubbleSort
