import { Item } from "./Item";

export abstract class Weapon extends Item {
  constructor(
    name: string,
    baseDamage: number,
    baseDurability: number,
    value: number
  ) {
    super(name, value, 0);
    this._baseDamage = baseDamage;
    this._baseDurability = baseDurability;
  }

  public MODIFIER_CHANGE_RATE = 0.05;

  private _baseDamage: number;
  public get baseDamage(): number {
    return this._baseDamage;
  }
  public set baseDamage(value: number) {
    this._baseDamage = value;
  }

  private _damageModifier: number;
  public get damageModifier(): number {
    return this._damageModifier;
  }
  public set damageModifier(value: number) {
    this._damageModifier = value;
  }

  private _baseDurability: number;
  public get baseDurability(): number {
    return this._baseDurability;
  }
  public set baseDurability(value: number) {
    this._baseDurability = value;
  }

  private _durabilityModifier: number;
  public get durabilityModifier(): number {
    return this._durabilityModifier;
  }
  public set durabilityModifier(value: number) {
    this._durabilityModifier = value;
  }

  public polish() {}

  public getDamage(): number {
    return this._baseDamage + this._damageModifier;
  }

  public getDurability(): number {
    return this._baseDurability + this.durabilityModifier;
  }

  public toString(): string {
    return `${this.name} − Value: ${this.value}, Weight: ${
      this.weigth
    }, Damage: ${this.getDamage()}, Durability: ${this.getDurability()}%`;
  }

  public use(): string {
    if (this.getDurability() <= 0)
      return "You can't use the hammer, it is broken.";
    const actaulDurability = this.getDurability() - this.MODIFIER_CHANGE_RATE;
    return `You use the ${this.name}, dealing ${
      this.getDamage() - this.MODIFIER_CHANGE_RATE
    } points of damage. ${actaulDurability === 0 ? "The hammer breaks." : ""}`;
  }
}
