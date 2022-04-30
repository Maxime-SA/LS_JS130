// Replicate the forEach method
function forEach(array, callback, thisArg) {
  for (let index = 0; index < array.length; index++) {
    callback.call(thisArg, array[index], index, array);
  }
}

// Replicate the filter method
function filter(array, callback, thisArg) {
  let filteredArr = [];
  for (let index = 0; index < array.length; index++) {
    if (callback.call(thisArg, array[index], index, array)) {
      filteredArr.push(array[index]);
    }
  }
  return filteredArr;
}

// Replicate the map method
function map(array, callback, thisArg) {
  let transformedArr = [];
  for (let index = 0; index < array.length; index++) {
    transformedArr.push(callback.call(thisArg, array[index], index, array));
  }
  return transformedArr;
}

// Replicate the reduce method
function reduce(array, callback, accumulator, thisArg) {
  let previousValue = accumulator;
  let startIndex = 0;

  if (accumulator === undefined) {
    previousValue = array[0];
    startIndex = 1;
  }

  for (let index = startIndex; index < array.length; index++) {
    previousValue = callback.call(thisArg, previousValue, array[index], index, array);
  }

  return previousValue;
}

// Replicate the filter method with the reduce method
function newFilter(array, callback, thisArg) {
  return array.reduce((prev, curr) => {
    if (callback.call(thisArg, curr)) {
      prev.push(curr);
    }
    return prev;
  }, []);
}

// Replicate the map method with the reduce method
function newMap(array, callback, thisArg) {
  return array.reduce((prev, curr) => {
    prev.push(callback.call(thisArg, curr));
    return prev;
  }, []);
}