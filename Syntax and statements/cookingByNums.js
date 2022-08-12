function task(number, op1, op2, op3, op4, op5) {
  let result;
  let num = Number(number);
  const arr = [op1, op2, op3, op4, op5];
  arr.forEach(command => {
    switch (command) {
      case "chop":
        result = num / 2;
        console.log(result);
        num = result;
        break;
      case "dice":
        result = Math.sqrt(num);
        console.log(result);
        num = result;
        break;
      case "spice":
        num++;
        console.log(num);
        break;
      case "bake":
        num *= 3;
        console.log(num);
        break;
      case "fillet":
        num = num - num * 0.2;
        console.log(num);
        break;
    }
  });
}

task("9", "dice", "spice", "chop", "bake", "fillet");
