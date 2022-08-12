function task(speed, area) {
  const limitForMotorway = 130;
  const limitForInterstate = 90;
  const limitForCity = 50;
  const limitForResidention = 20;
  let status = "";
  let diff;
  if (area == "motorway") {
    if (speed > limitForMotorway) {
      diff = speed - limitForMotorway;
      if (diff <= 20) status = "speeding";
      else if (diff >= 20 && diff < 40) status = "excessive speeding";
      else if (diff >= 70) status = "reckless driving";
      return `The speed is ${diff} km/h faster than the allowed speed of ${limitForMotorway} - ${status}`;
    }
    return `Driving ${speed} km/h in a ${limitForMotorway} zone`;
  } else if (area == "interstate") {
    if (speed > limitForInterstate) {
      diff = speed - limitForInterstate;
      if (diff <= 20) status = "speeding";
      else if (diff >= 20 && diff < 40) status = "excessive speeding";
      else if (diff >= 70) status = "reckless driving";
      return `The speed is ${diff} km/h faster than the allowed speed of ${limitForInterstate} - ${status}`;
    }
    return `Driving ${speed} km/h in a ${limitForInterstate} zone`;
  } else if (area == "city") {
    if (speed > limitForCity) {
      diff = speed - limitForCity;
      if (diff <= 20) status = "speeding";
      else if (diff >= 20 && diff < 40) status = "excessive speeding";
      else if (diff >= 70) status = "reckless driving";
      return `The speed is ${diff} km/h faster than the allowed speed of ${limitForCity} - ${status}`;
    }
    return `Driving ${speed} km/h in a ${limitForCity} zone`;
  } else if (area == "residential") {
    if (speed > limitForResidention) {
      diff = speed - limitForResidention;
      if (diff <= 20) status = "speeding";
      else if (diff >= 20 && diff < 40) status = "excessive speeding";
      else if (diff >= 70) status = "reckless driving";
      return `The speed is ${diff} km/h faster than the allowed speed of ${limitForResidention} - ${status}`;
    }
    return `Driving ${speed} km/h in a ${limitForResidention} zone`;
  }
}
console.log(task(40, "city"));
console.log(task(21, "residential"));
console.log(task(120, "interstate"));
console.log(task(200, "motorway"));
