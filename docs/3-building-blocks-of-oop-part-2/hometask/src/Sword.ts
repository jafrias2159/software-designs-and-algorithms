import { Weapon } from "./Weapon";

export class Sword extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super("sword", baseDamage, baseDurability, value, weight);
  }
  public polish(): void {
    const maximunValue = parseInt(((25 / 100) * this.baseDamage).toFixed(2));
    if (this.damageModifier + this.MODIFIER_CHANGE_RATE < maximunValue) {
      this.damageModifier += this.MODIFIER_CHANGE_RATE;
    }
  }
}
