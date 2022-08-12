function task(input) {
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            arr.unshift(input[i]);
        } else {
            arr.push(input[i]);
        }
    }
    return arr
}

console.log(task([7, -2, 8, 9]));