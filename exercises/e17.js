export function minBy(array, cb) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (cb(element) < cb(min)) {
      min = element;
    }
  }
  return min;
}

export function maxBy(array, cb) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (cb(element) > cb(max)) {
      max = element;
    }
  }
  return max;
}
