import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Invertory implements ItemComparator {
  compare(first: Item, second: Item): number {
    throw new Error("Method not implemented.");
  }
  private items: Item[];

  public addItem(item: Item) {
    this.items.push(item);
  }

  public sort():void;
  public sort(comparator: ItemComparator): void;
  public sort(comparator?: ItemComparator): void {
    if (typeof comparator === "undefined") {
      // Sort by any characteritc
    } else {
      //Sort stuff with ItemWeightComparator class
      //new ItemWeightComparator()
    }
  }

  public toString(){
    return this.items.join(',');
  }
}
