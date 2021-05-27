const bubbleSort = (list = []) => {
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


const binarySearch = (list = [], find = 0, leftIndex = 0, rightIndex = 0) => {
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

const exists = (list = [], find = 0) => {
  if (!list || list?.length === 0) return false
  return binarySearch(bubbleSort(list), find, 0, list.length - 1) > -1
}

module.exports = { exists }
