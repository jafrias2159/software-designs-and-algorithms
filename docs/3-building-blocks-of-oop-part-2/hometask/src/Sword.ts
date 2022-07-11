import { Weapon } from "./Weapon";

export class Sword extends Weapon {
  constructor(baseDamage: number, baseDurability: number, value: number) {
    super("sword", baseDamage, baseDurability, value);
  }
  public polish() {
    const maximunValue = parseInt(((25 / 100) * this.baseDamage).toFixed(2));
    if (this.damageModifier + this.MODIFIER_CHANGE_RATE < maximunValue) {
      this.damageModifier += this.MODIFIER_CHANGE_RATE;
    }
  }
}
