function task(input) {
    let obj = {};
    for (let item of input) {
        let [city, population] = item.split("<->");
        obj.city = city;
        obj.population = population;
        if (obj.hasOwnProperty(obj.city)) {
            obj.population += population;
            continue;
        }
        console.log(obj.city + ":" + obj.population);
    }  
}

task(['Istanbul <-> 100000',

'Honk Kong <-> 2100004',

'Jerusalem <-> 2352344',

'Mexico City <-> 23401925',

'Istanbul <-> 1000']);
