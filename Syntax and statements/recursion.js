function task(num) {
    let newN = num - 1;
    console.log(num);
    if (num > 0) {
        task(newN)

    } else {
        return
    }

}

task(7);