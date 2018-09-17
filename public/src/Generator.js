function Generator() {}

Generator.prototype.generateNumbers = function() {
  arr = [];
  for (i = 0; i < 6; i++) {
    arr.push(Math.floor(Math.random() * 59));
  }
  return arr;
};

Generator.prototype.generatePowerBall = function() {
  return Math.floor(Math.random() * 59);
};
