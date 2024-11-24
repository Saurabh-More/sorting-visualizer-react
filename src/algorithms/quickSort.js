import { blink, changeColor, resetColor, timeOut } from "../helper/helper"

export default async function quickSort(columns, setColumns, time, setMsg, sortRef) {
  async function partition(array, low, high) {
    if (sortRef.current) {
      return
    }

    const pivot = array[low] // Choose the first element as the pivot
    changeColor(low, "blue")
    let left = low + 1
    let right = high
    while (true) {
      changeColor(left, "yellow")
      changeColor(right, "yellow")
      // Move left index to the right until an element larger than or equal to the pivot is found
      while (left <= right && array[left] <= pivot) {
        await timeOut(0.4 * time)
        resetColor(left)
        left++
        changeColor(left, "yellow")
      }
      await timeOut(0.8 * time)
      // Move right index to the left until an element smaller than or equal to the pivot is found
      while (left <= right && array[right] >= pivot) {
        await timeOut(0.4 * time)
        resetColor(right)
        right--
        if (right >= left);
        changeColor(right, "yellow")
      }
      if (left > right) {
        resetColor(left)
        resetColor(right)
        break
      }
      changeColor(left, "red")
      changeColor(right, "red")
      await timeOut(time)
      ;[array[left], array[right]] = [array[right], array[left]] // Swap elements
      setColumns([...array])
      await timeOut(time)
      resetColor(left)
      resetColor(right)
    }
    ;[array[low], array[right]] = [array[right], array[low]] // Place pivot in its correct position
    resetColor(low)
    await blink(right, time)
    changeColor(right, "blue")
    await timeOut(time)
    setColumns([...array])
    await timeOut(time)
    resetColor(right)
    await timeOut(time)
    return right
  }

  async function sort(array, low = 0, high = array.length - 1) {
    if (low < high || !sortRef.current) {
      const pivotIndex = await partition(array, low, high)
      if (low < pivotIndex - 1) await sort(array, low, pivotIndex - 1) // Recursively sort the left part
      if (pivotIndex + 1 < high) await sort(array, pivotIndex + 1, high) // Recursively sort the right part
    }
    return array
  }

  await setMsg(["blue represent pivot element", "blue"])
  await timeOut(2000)
  await setMsg(["yellow represent low and high", "yellow"])
  await sort(columns, 0, columns.length - 1)
  setMsg(["Finished Sorting !", "orange"], 2000)
}
