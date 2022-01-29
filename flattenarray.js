const data = [
  1, [2, 3],
  4, [5, 6, [7, 8]],
  9, [10, [11, 12, [13, 14, 15]]]
];

function flattenArray (array) {
  let flattened = []

  for (let i=0; i<array.length; i++){
    if(Array.isArray(array[i])) {
      flattened = flattened.concat(flattenArray(array[i]));
    } else {
      flattened.push(array[i]);
    }
  };

  return flattened;
};

console.log(data);
console.log(
  flattenArray(data)
);
