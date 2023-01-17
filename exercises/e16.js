// see e16.md

export function find(array, callback) {
  // Your code goes here...
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
}

