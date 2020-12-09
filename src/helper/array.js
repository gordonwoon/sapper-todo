export function splitBy(array = [], predicate) {
  var trueArray = [];
  var falseArray = [];
  array.forEach(value => {
    if (predicate(value)) {
      trueArray.push(value);
    } else {
      falseArray.push(value);
    }
  });
  return [trueArray, falseArray];
}

export function sortBy(array = [], key = '', asc = true) {
  return array.sort((a, b) => a[key] < b[key] ? -1 : 1)
}
