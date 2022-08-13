function task(input) {
  //Create result array
  let result = [];
  //Iterate the input
  for (let i = 0; i < input.length; i++) {
    let [name, level, items] = input[i].split(" / ");
    level= Number(level)
    items = items ? items.split(", ") : [];
    let obj = {name,level,items};
    result.push(obj);
  }
  return JSON.stringify(result)
}

console.log(task([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]));
