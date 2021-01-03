import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemModel } from 'src/shared/models/ItemModel.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  @Input() items!: ItemModel[];
  @Output() itemRemove: EventEmitter<ItemModel> = new EventEmitter<ItemModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onRemoveItem(item: ItemModel) {
    this.itemRemove.emit(item);
  }

}
