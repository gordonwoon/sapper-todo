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
