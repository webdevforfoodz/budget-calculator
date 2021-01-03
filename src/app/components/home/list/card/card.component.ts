import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemModel } from 'src/shared/models/ItemModel.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() item!: ItemModel;
  @Output() removedItem: EventEmitter<null> = new EventEmitter<null>();

  constructor() { }

  ngOnInit(): void {
  }

  onRemoveItem() {
    this.removedItem.emit();
  }

}
