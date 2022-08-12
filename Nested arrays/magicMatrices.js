function task(array) {
    let rowSum = array[0].reduce((a, b) => a + b);
    for (let i = 0; i < array[0].length; i++) {
        //for collumns
        let columnsSum = 0;
        array.forEach(element => {
            columnsSum += element[i];

        });
        if (rowSum != columnsSum) {
            return false;
        }
    }
    return true;
}

console.log(task([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]));