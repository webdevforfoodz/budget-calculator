import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemModel } from 'src/shared/models/ItemModel.model';
import { MatDialog } from '@angular/material/dialog'
import { EditFormDialogComponent } from 'src/app/components/edit-form-dialog/edit-form-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() item!: ItemModel;
  @Output() removedItem: EventEmitter<null> = new EventEmitter<null>();
  @Output() editItem: EventEmitter<ItemModel> = new EventEmitter<ItemModel>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onRemoveItem() {
    this.removedItem.emit();
  }

  openDialog() {
    const dialogBox = this.dialog.open(EditFormDialogComponent, {
      width: '1000px',
      data: this.item,
    });

    dialogBox.afterClosed().subscribe((item: ItemModel) => {
      this.editItem.emit(item);
    })
  }

}
