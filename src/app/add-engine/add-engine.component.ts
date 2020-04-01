import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { Engine } from '../Engine';

@Component({
  selector: 'app-add-engine',
  templateUrl: './add-engine.component.html',
  styleUrls: ['./add-engine.component.css']
})
export class AddEngineComponent{
  form=new FormGroup({
    price:new FormControl(),
    capacity:new FormControl(),
    cylinders:new FormControl()
  });
  engine:Engine;
  description:string;
  constructor(private dialogRef: MatDialogRef<AddEngineComponent>,
    @Inject(MAT_DIALOG_DATA) data) { }
  save() {
    this.dialogRef.close(this.form.value);
  }
  close() {
  this.dialogRef.close();
}

}
