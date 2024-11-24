import { BiSolidArrowToLeft } from "react-icons/bi"
import { timeOut, changeColor, resetColor } from "../helper/helper"
const mergeSort = async (columns, setColumns, time, setMsg, sortRef) => {
  setMsg(["Yellow represents low and high", "yellow"], 1000)
  await timeOut(1500)
  setMsg(["green represent merge operation", "green"], 1000)
  async function merge(arr, low, mid, high) {
    changeColor(low, "yellow")
    changeColor(high, "yellow")

    var result = []
    let i = low,
      j = mid + 1
    while (i <= mid && j <= high) {
      if (arr[i] < arr[j]) {
        result.push(arr[i++])
      } else {
        result.push(arr[j++])
      }
    }
    while (i <= mid) {
      result.push(arr[i++])
    }
    while (j <= high) {
      result.push(arr[j++])
    }
    for (let i = low; i <= high; i++) {
      if (sortRef.current) {
        return
      }

      arr[i] = result[i - low]
      changeColor(i, "green")
      await timeOut(0.3 * time)
      setColumns([...arr])
      if (i == low) changeColor(i, "yellow")
      else resetColor(i)
    }

    resetColor(low)
    resetColor(high)
  }

  async function Sort(arr, low, high) {
    if (low >= high || sortRef.current) {
      return
    }
    var mid = Math.floor((low + high) / 2)
    await Sort(arr, low, mid)
    await timeOut(100)
    await Sort(arr, mid + 1, high)
    await merge(arr, low, mid, high)
  }

  await Sort(columns, 0, columns.length - 1)
  setMsg(["Finished Sorting !", "orange"], 2000)
}

export default mergeSort
