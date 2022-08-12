function task(item1, item2, item3) {
    let sum = item1.length + item2.length + item3.length;
    let average = Math.floor(sum / 3);
    console.log(sum + '\n' + average);
}

task('chocolate', 'ice cream', 'cake');