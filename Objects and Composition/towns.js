function task(arr) {
  arr.shift();
  let result = [];
  class Town {
    constructor(town, latitude, longtitude) {
      this.town = town;
      this.latitude = +latitude;
      this.longtitude = +longtitude;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let editedArr = arr[i]
      .split("|")
      .map((t) => t.trim())
      .filter((x) => x.length != 0);
    let towns = new Town(editedArr[0], editedArr[1], editedArr[2]);
    result.push(towns)
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
