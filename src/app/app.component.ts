import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    });
  }

}


// export class DialogDataExampleDialog {
//   constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
// }

// export interface DialogData {
//   animal: 'panda' | 'unicorn' | 'lion';
// }

