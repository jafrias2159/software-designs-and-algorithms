import { Weapon } from "./Weapon";

export class Bow extends Weapon {
  
    constructor(baseDamage: number, baseDurability: number, value: number) {
    super("bow", baseDamage, baseDurability, value);
  }

  public polish() {
    if (this.getDurability() <= 1) {
      this.durabilityModifier = +this.MODIFIER_CHANGE_RATE;
    }
  }
}
