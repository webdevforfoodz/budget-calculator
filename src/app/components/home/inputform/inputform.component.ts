import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemModel } from 'src/shared/models/ItemModel.model';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.scss']
})
export class InputformComponent implements OnInit {

  @Input() item: ItemModel = new ItemModel(null!,'');
  @Output() newItem: EventEmitter<ItemModel> = new EventEmitter<ItemModel>();

  isItemExist: boolean = false;

  constructor() { }

  ngOnInit(): void {

    if(this.item.description !== '') {
      this.isItemExist = true;
    }
  }

  onSubmit(form: NgForm) {
    this.newItem.emit(form.value)
    form.reset();
  }

}
