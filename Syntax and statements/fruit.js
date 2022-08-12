function task(fruit, quantity, price){
    let intoKg = quantity / 1000;
    console.log(`I need $${(price*intoKg).toFixed(2)} to buy ${intoKg.toFixed(2)} kilograms ${fruit}.`);
}

task('orange', 2500, 1.80);