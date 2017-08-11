import { Component, OnInit } from '@angular/core';
import {Item} from '../Item'
import { ItemService } from "../Services/item.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers:[ItemService]
})
export class ItemComponent implements OnInit {
  items: Item[] = []
  finalPriceValue: number;
  constructor( private dataSerive: ItemService) { 
    this.items = dataSerive.getItems();
    this.finalPriceValue = 0;
  }

  ngOnInit() {
    //this.finalPriceValue=0;
  }

  completeAll(checked:boolean) {
    this.items.forEach( item => item.setPrice(1000))
  }

  removeItem(item: Item) {
    this.items = this.items.filter(  t => t !== item);
  }

  addNewItem(description: string, price: number,numItem: number){
    if(description=="" || String(price)=="" || String(numItem)=="")
      alert("Please fill in all the fields")
    else
    {
    this.items.push(new Item(description, price,numItem));
    }
  }

  totalPrice ()
  {
    this.finalPriceValue = 0;
    this.items.forEach(element => {
    this.finalPriceValue = Number(this.finalPriceValue) + Number(element.price)*Number(element.numItem);
    });
    return this.finalPriceValue;
  }

  handleKeyUp(ev,iname) {
    if (ev.which === 13){
    if(iname=="" || String(ev.target.value)=="")
      {alert("Please fill in all the fields")}
      else
      {
      this.addNewItem(iname,ev.target.value,ev.target.value);
      ev.target.value = ''
      }
    }
  }
}
