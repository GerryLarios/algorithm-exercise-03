const bubbleSort = (list = []) => { // O(n ^ 2)
  if (!list.length) return list
  
  if (list.length === 2) {
    if (list[0] < list[1]) return list
    else [list[1], list[0]]
  }

  const lenght = list.length
  for (let i = 0; i < lenght; i = i + 1) { 
    for (let j = 0; j < lenght; j = j + 1) {
      if (list[j] > list[j + 1]) {
        let tmp = list[j]
        list[j] = list[j + 1]
        list[j + 1] = tmp
      }
    }
  } 
  return list
}

const binarySearch = (list = [], find = 0, leftIndex = 0, rightIndex = 0) => { // theta (log(n))

  if (!list.length) return -1
  if (list.length === 1 && list[0] === find) return 0

  if (rightIndex >= leftIndex) {
    const index = leftIndex + Math.floor((rightIndex - leftIndex) / 2)
    const item = list[index]

    if (item === find) return index

    return item > find
      ? binarySearch(list, find, leftIndex, index - 1)
      : binarySearch(list, find, index + 1, rightIndex)
  }
  
  return -1
}

const isSorted = (list = []) => { // O^(n / d)
  if (!list.length) return true
  if (list.length === 2) return list[0] < list[1]

  let sorted = true

  for (let i = 0; i < list.lenght; i = i + 1) {
    if (list[i + 1] && list[i] > list[i + 1]) {
      sorted = false
      break
    }
  }

  return sorted
}

const exists = (list = [], find = 0) => {
  if (!list || list?.length === 0) return false
  const sortedList = isSorted(list) ? list : bubbleSort(list)
  return binarySearch(sortedList, find, 0, list.length - 1) > -1
}

module.exports = { exists }
