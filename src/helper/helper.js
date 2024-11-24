const default_col = "turquoise"
const columns = document.getElementsByClassName("column")

const changeColor = (i, color = "yellow") => {
  if (i >= columns.length || i < 0) {
    console.log("out of bound ")
    return
  }
  columns[i].style.backgroundColor = color
}

const resetColor = (i, color = default_col) => {
  if (i >= columns.length || i < 0) {
    console.log("out of bound ")
    return
  }

  columns[i].style.backgroundColor = default_col
}

const timeOut = async (time) => {
  await new Promise((resolve) => setTimeout(() => resolve(), time))
}

async function blink(i, time) {
  for (let k = 0; k < 2; k++) {
    columns[i].style.backgroundColor = "pink"
    await new Promise((resolve) => setTimeout(resolve, 0.3 * time))
    columns[i].style.backgroundColor = default_col
    await new Promise((resolve) => setTimeout(resolve, 0.3 * time))
  }
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

export { default_col, changeColor, resetColor, timeOut, blink, swap }
