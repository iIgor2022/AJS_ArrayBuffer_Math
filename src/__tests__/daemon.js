import Daemon from '../daemon';

test('Testing creating deamon', () => {
  const daemon = new Daemon('name', 100);
  expect(daemon.attackDistance).toBe(NaN);
});

test('Testing daemon attack without stoned', () => {
  const deamon = new Daemon('name', 100);
  deamon.attack = 2;
  expect(deamon.attack).toBe(90);
});

test('Testing daemon attack with stoned', () => {
  const deamon = new Daemon('name', 100);
  deamon.attack = 2;
  deamon.stoned = true;
  expect(deamon.attack).toBe(85);
});

test('Testing deamon attack without distance setup', () => {
  const deamon = new Daemon('name', 100);
  deamon.stoned = true;
  expect(deamon.attack).toBe(NaN);
});
