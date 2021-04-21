function flatten(arr) {
  return [].concat(...arr)
}
function deepFlatten(arr) {
  return flatten(           // return shalowly flattened array
    arr.map(x=>             // with each x in array
      Array.isArray(x)      // is x an array?
        ? deepFlatten(x)    // if yes, return deeply flattened x
        : x                 // if no, return just x
    )
  )
}