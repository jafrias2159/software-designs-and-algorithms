import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";
import { ItemWeightComparator } from "./ItemWeightComparator";

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
      this.items.sort((elementA, elementB) => {
        if (elementA.value <= elementB.value) {
          return 1;
        }
        return -1;
      });
    } else {
      this.items.sort((elementA: Item, elementB: Item) => {
        const itemWeightComparator = new ItemWeightComparator();
        return itemWeightComparator.compare(elementA, elementB);
      });
    }
  }

  public toString() {
    return this.items.join(",");
  }
}
