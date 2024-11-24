import { timeOut, swap, default_col, changeColor, resetColor } from "../helper/helper"

async function selectionSort(arr, setColumns, time, setMsg, sortRef) {
  const columns = document.getElementsByClassName("column")
  // setMsg("starting selection sort")
  await setMsg(["selecting minimum from search space"], 2000)
  await timeOut(2000)
  await setMsg(["green represents minimum element", "green"], 1000)
  for (let i = 0; i < arr.length; i++) {
    let min_idx = i
    changeColor(i, "yellow")
    await timeOut(time)
    changeColor(min_idx, "green")
    await timeOut(time)
    for (let j = i + 1; j < arr.length; j++) {
      if (sortRef.current) return
      changeColor(j, "yellow")
      await timeOut(time)
      //if lesser element found update min_idx
      if (arr[j] < arr[min_idx]) {
        //before updating min_idx reset the backgroundColor or previous minimum
        var min_idx_color = min_idx === i ? "yellow" : default_col
        changeColor(min_idx, min_idx_color)
        min_idx = j
        changeColor(min_idx, "green")
        await timeOut(time)
      } else resetColor(j)
    }
    await timeOut(time)
    if (min_idx !== i) {
      swap(arr, i, min_idx)
      changeColor(i, "green")
      changeColor(min_idx, "yellow")
      //blink both for some time
      setColumns([...arr])
      //now update the changes in array in UI
    }
    await timeOut(time)
    resetColor(i)
    resetColor(i)
    await timeOut(time)
  }
  setMsg("finished sorting")
}

export default selectionSort
