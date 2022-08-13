function task(obj) {
  let resultCar = {};
  let engine = {};
  let coupe = {};
  let wheelsArr = [];
  //Engine specifications object

  if (obj.power <= 90) {
    engine.power = 90;
    engine.volume = 1800;
  } else if (obj.power > 90 && obj.power <= 120) {
    engine.power = 120;
    engine.volume = 2400;
  } else if (obj.power > 120 && obj.power <= 200) {
    engine.power = 200;
    engine.volume = 3500;
  }
  //Coupe specifications object
  coupe.type = obj.carriage;
  coupe.color = obj.color;
  //Wheels size
  if (obj.wheelsize % 2 === 0) {
    obj.wheelsize--;
  }
  wheelsArr = [obj.wheelsize, obj.wheelsize, obj.wheelsize, obj.wheelsize];
  //Car specs
  resultCar.model = obj.model;
  resultCar.engine = engine;
  resultCar.carriage = coupe;
  resultCar.wheels = wheelsArr;
  return resultCar;
}

console.log(
  task({
    model: "Opel Vectra",

    power: 110,

    color: "grey",

    carriage: "coupe",

    wheelsize: 17,
  })
);
