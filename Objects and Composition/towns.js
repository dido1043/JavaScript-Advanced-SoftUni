function task(arr) {
  arr.shift();
  let result = [];
  class Town {
    constructor(town, latitude, longtitude) {
      this.Town = town;
      this.Latitude = +latitude;
      this.Longitude = +longtitude;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let editedArr = arr[i]
      .split("|")
      .map((t) => t.trim())
      .filter((x) => x.length != 0);
    let town = editedArr[0];
    let latitude = +editedArr[1];
    let longtitude = +editedArr[2];
    let towns = new Town(town, latitude.toFixed(2), longtitude.toFixed(2));
    result.push(towns);
  }
  return JSON.stringify(result);
}
console.log(
  task([
    "| Town | Latitude | Longitude |",
    "| Sofia | 42.696552 | 23.32601 |",
    "| Beijing | 39.913818 | 116.363625 |",
  ])
);
