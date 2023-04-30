import Character from './character';

export default class Daemon extends Character {
  constructor(name, attack) {
    super('Daemon', attack);
    this.name = name;
  }
}