export default function appendToEachArrayValue(array, appendString) {
  const array4 = [];
  for (const value of array) {
    array4.push(appendString + value);
  }
  return array4;
}
