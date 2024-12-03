const convertToCelsius = function(tempF) {
  let tempC = (tempF - 32)*(5/9);

  if (tempC !== 0) {
    tempC = tempC.toFixed(1);
  }
  else {
    tempC = tempC.toFixed(0);
  };

  return Number(tempC);
};

const convertToFahrenheit = function(tempC) {
  let tempF = (tempC*9/5) + 32;

  if (tempF !== 0) {
    tempF= tempF.toFixed(1);
  }
  else {
    tempF = tempF.toFixed(0);
  };

  return Number(tempF);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
