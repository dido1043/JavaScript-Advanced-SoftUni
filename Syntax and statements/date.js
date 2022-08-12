function task(y, m, d) {

    let dateInput = `${y}-${m}-${d}`;
    let date = new Date(dateInput);
    date.setDate(date.getDate()-1);
    console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
}

task(2016, 9, 30);
