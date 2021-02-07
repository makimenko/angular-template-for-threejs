export function removeFromArray<T>(array: Array<T>, element: T) {
  const index = array.indexOf(element, 0);
  if (index > -1) {
    array.splice(index, 1);
  }
}
