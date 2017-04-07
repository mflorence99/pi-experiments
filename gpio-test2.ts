const rpio = require("rpio");

const random = (array: any[]) => {
  let l = array.length;
  let i = Math.min(Math.floor(Math.random() * l), l - 1);
  return array[i];
};

const pins = [11, 13, 15];

process.on("SIGINT", () => {
  pins.forEach(pin => rpio.close(pin, rpio.INPUT));
  process.exit();
});

pins.forEach(pin => rpio.open(pin, rpio.OUTPUT, rpio.LOW));

setInterval(() => {
  let pin = random(pins);
  rpio.write(pin, rpio.HIGH);
  setTimeout(() => rpio.write(pin, rpio.LOW), 500);
}, 1000);
