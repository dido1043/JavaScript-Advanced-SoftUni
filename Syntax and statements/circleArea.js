function task(input){
    let type = typeof input;
    
    if (type !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
        return;
    }
    let result = Math.PI * Math.pow(input, 2);
    console.log(result.toFixed(2));
}

task(5);
console.log('-----');
task('name')