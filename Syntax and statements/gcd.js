function task(a, b) {
  let x = Math.abs(a);
  let y = Math.abs(b);

  while (y) {
    let t = y;
    y = x % y;
    x = t;
  }
  console.log(x);
}
task(2154, 458);
