// Function to make a column blink twice
import { blink, changeColor, resetColor, timeOut } from "../helper/helper"

async function insertionSort(arr, setColumns, time, setMsg, sortRef) {
  setMsg(["Inserts each element to appropriate position on sorted part of array", "green"], 2000)
  changeColor(0, "red")
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]
    let j = i - 1

    // Blink the current key column twice in pink
    await blink(i, time)
    changeColor(i, "yellow")

    while (j >= 0 && arr[j] > key) {
      if (sortRef.current) {
        return
      }
      // Swap elements
      arr[j + 1] = arr[j]
      arr[j] = key

      // Change the color to yellow since a swap happened
      changeColor(j, "yellow")

      // Update columns to trigger re-render
      await timeOut(0.5 * time)
      setColumns([...arr])
      await timeOut(0.5 * time)

      // Reset the color after comparison
      changeColor(j + 1, "red")

      j--
    }
    arr[j + 1] = key

    changeColor(j + 1, "green")
    await timeOut(time)
    changeColor(j + 1, "red")
  }

  setMsg(["Finished Sorting", "orange"], 2000)
}

export default insertionSort
