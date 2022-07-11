import { Comparable } from './Comparable';

let id = 0;
let counter = 0;
export abstract class Item implements Comparable<Item> {
   
    public compareTo(other: Item): number {
        // your code goes here
        if(this.value > other.value) return 1;
        if(this.value < other.value) return 1;
        return this.name.localeCompare(other.name)
    }

    // your code goes here
    constructor(name: string, value: number, weigth: number){
        this.name = name,
        this.value = value;
        this.weigth = weigth;
        this.id = id;
        id++;
    }

    private _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    private _value: number;
    public get value(): number {
        return this._value;
    }
    public set value(value: number) {
        this._value = value;
    }
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private _weigth: number;
    public get weigth(): number {
        return this._weigth;
    }
    public set weigth(value: number) {
        this._weigth = value;
    }

    public use(){}
    abstract toString(): string;    
    static  get getnumberOfItems(): number{
        return counter;
    }

    static reset(){
        counter = 0;
    }
}
