import { Component, OnInit } from '@angular/core';
import { ItemModel } from 'src/shared/models/ItemModel.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemsList: ItemModel[] = [];
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calculateTotal(items: ItemModel[]) {
    this.total = 0;
    items.map((item:ItemModel) => {
      this.total += item.amount
    })
  }

  onNewItemAdded(item: ItemModel) {
    this.itemsList.push(item);
    this.calculateTotal(this.itemsList);
  }

  onRemoveItem(item: ItemModel) {
    let index = this.itemsList.indexOf(item)
    this.itemsList.splice(index,1);
    this.calculateTotal(this.itemsList)
  }

  onEditItem(items: any) {
    let indexOfOld = this.itemsList.indexOf(items.oldItem)
    this.itemsList[indexOfOld] = items.newItem;
    this.calculateTotal(this.itemsList)
  }

}
