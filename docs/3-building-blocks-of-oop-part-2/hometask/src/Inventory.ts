import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory implements ItemComparator {
  compare(first: Item, second: Item): number {
    throw new Error("Method not implemented.");
  }
  private items: Item[];

  public addItem(item: Item) {
    this.items.push(item);
  }

  public sort(): void;
  public sort(comparator: ItemComparator): void;
  public sort(comparator?: ItemComparator): void {
    if (typeof comparator === "undefined") {
      // Sort by any characteritcs in array
    } else {
      //Sort array with new ItemWeightComparator() instance
    }
  }

  public toString() {
    return this.items.join(",");
  }
}
