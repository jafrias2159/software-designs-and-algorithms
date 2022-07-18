import { Item } from "./Item";

export class Consumable extends Item {
  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);
    this.spoiled = spoiled;
    this.consumed = false;
  }

  private consumed: boolean;
  private spoiled: boolean;

  public eat(): string {
    if (this.isConsumed()) {
      return "There is nothing left of the bread to consume.";
    }

    return "You eat the bread." + this.isSpoiled() ? "\n You feel sick." : "";
  }

  public use(): string {
    if (!this.isConsumed() && !this.isSpoiled()) {
      return this.eat();
    }
    return '';
  }

  public isConsumed(): boolean {
    return this.consumed;
  }

  public setConsumed(consumed: boolean){
    this.consumed = consumed;
  }

  public isSpoiled(): boolean {
    return this.spoiled;
  }

  public toString(): string {
    throw new Error("Method not implemented.");
  }
}
