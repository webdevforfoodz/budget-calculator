import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemModel } from 'src/shared/models/ItemModel.model';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.scss']
})
export class InputformComponent implements OnInit {

  item: ItemModel = new ItemModel(null!,'');
  @Output() newItem: EventEmitter<ItemModel> = new EventEmitter<ItemModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.newItem.emit(form.value)
    form.reset();
  }

}
