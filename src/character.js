export default class Character {
  constructor(type, attack) {
    if (['Daemon', 'Magician'].includes(type)) {
      this.type = type;
    } else {
      throw new Error('Character type not allowed!');
    }
    this.attackPower = attack;
    this.stone = false;
    this.attackDistance = NaN;
  }

  set stoned(stone) {
    this.stone = stone;
  }

  get stoned() {
    return this.stone;
  }

  set attack(param) {
    this.attackDistance = param;
  }

  get attack() {
    if (Number.isNaN(this.attackDistance)) {
      return NaN;
    }
    let result = this.attackPower * (1 - (this.attackDistance - 1) / 10);
    if (this.stoned) {
      result -= Math.log2(this.attackDistance) * 5;
    }
    return result;
  }
}
