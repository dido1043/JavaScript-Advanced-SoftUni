function task(input) {
  let products = [];

  //iterate input and split elements
  input.forEach((element) => {
    let [town, product, price] = element.split(" | ");
    //check for repeats
    if (products.filter((x) => x.product === product).length > 0) {

      let obj = products.find(x => x.product === product);

      if (obj.price > Number(price)) {
        obj.price = Number(price);
        obj.town = town;
       
      }
    } else {
      let obj = { town, product, price: Number(price) };
      products.push(obj);
    }
  });
  //sort prices 
  for (let item of products) {
    console.log(`${item.product} -> ${item.price} (${item.town})`);
  }
}

task([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
