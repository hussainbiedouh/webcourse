

export class Item {

    constructor (public description: string, public price : number, public numItem : number) {}

    toString () {
        return `Item Name: ${this.description}, Price: ${this.price}, Number of Item:${this.numItem}.`
    }

    setPrice(pricenew: number){
        this.price = pricenew;
    }
    
    setNumItem(numItem: number){
        this.numItem = numItem;
    }
}
