function task(input){
    let first = Number(input[0])
    let last = Number(input[input.length - 1])
    return first + last;
}

console.log(task(['20','30','40','80']));