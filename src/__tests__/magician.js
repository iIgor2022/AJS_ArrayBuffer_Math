import Magician from '../magician';

test('Testing creating magician', () => {
  const daemon = new Magician('name', 100);
  expect(daemon.attackDistance).toBe(NaN);
});

test('Testing magician attack without stoned', () => {
  const deamon = new Magician('name', 100);
  deamon.attack = 2;
  expect(deamon.attack).toBe(90);
});

test('Testing magician attack with stoned', () => {
  const deamon = new Magician('name', 100);
  deamon.attack = 2;
  deamon.stoned = true;
  expect(deamon.attack).toBe(85);
});

test('Testing magician attack without distance setup', () => {
  const deamon = new Magician('name', 100);
  deamon.stoned = true;
  expect(deamon.attack).toBe(NaN);
});
