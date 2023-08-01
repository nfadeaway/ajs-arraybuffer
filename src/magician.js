import Character from './character';

export default class Magician extends Character {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.attack = 100;
    this.defence = 40;
    this.stoned = false;
  }

  setStoned(status) {
    this.stoned = status;
  }

  getAttackPower(endpoint) {
    const endpointAttackPower = {
      1: 100,
      2: 90,
      3: 80,
      4: 70,
      5: 60,
    };
    return this.stoned
      ? (this.attack / 100) * endpointAttackPower[endpoint] - Math.log2(endpoint) * 5
      : (this.attack / 100) * endpointAttackPower[endpoint];
  }
}
