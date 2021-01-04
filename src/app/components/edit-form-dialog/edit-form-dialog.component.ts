import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemModel } from 'src/shared/models/ItemModel.model';

@Component({
  selector: 'app-edit-form-dialog',
  templateUrl: './edit-form-dialog.component.html',
  styleUrls: ['./edit-form-dialog.component.scss']
})
export class EditFormDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public item: ItemModel
  ) { }

  ngOnInit(): void {
  }

  onClick() {
    this.dialogRef.close();
  }

  onSubmit(item: ItemModel) {
    this.dialogRef.close(item)
  }

}
