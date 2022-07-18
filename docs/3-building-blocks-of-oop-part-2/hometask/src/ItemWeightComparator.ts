import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class ItemWeightComparator implements ItemComparator {
    public compare(first: Item, second: Item) {
        if(first.weigth > second.weigth) return 1;
        if(first.weigth < second.weigth) return -1;
        return first.compareTo(second)
    }
}
