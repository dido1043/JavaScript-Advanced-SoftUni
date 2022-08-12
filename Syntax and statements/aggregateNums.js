function task(arr) {
  let numberArr = arr.map(Number);
  let sum = numberArr.reduce((a, b) => a + b);

  let invValues = 0
   for (let i = 0; i < numberArr .length; i++) {
        invValues += 1 / numberArr[i]
    
   }
   let concat = arr.join('')
   console.log( sum+'\n'+invValues+'\n'+concat);
}

task([1, 2, 3]);
