function task(input) {
  let counter = 0;
  for (let i = 0; i < input.length; i++) {
    let arr = input[i];
    for (let j = 0; j < arr.length; j++) {
      let element = arr[j];
      if (i !== input.length - 1) {
        if (element === arr[j + 1] || element === input[i + 1][j]) {
          counter++;
        }
      } else {
        if (element === arr[j + 1]) {
          counter++;
        }
      }
    }
  }
  return counter;
}

console.log(
  task([
    ["2", "3", "4", "7", "0"],
    ["4", "0", "5", "3", "4"],
    ["2", "3", "5", "4", "2"],
    ["9", "8", "7", "5", "4"],
  ])
);
