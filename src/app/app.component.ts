import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog, private api: ApiService) {}

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    });
  }

  public getAllProducts() {
    return this.api.getProducts().subscribe({
      next:(res) => {console.log(res)},
      error:(error) => {console.log(error)}, 
      complete:() => {console.log('Data loaded...')}
    })
  }

}


// export class DialogDataExampleDialog {
//   constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
// }

// export interface DialogData {
//   animal: 'panda' | 'unicorn' | 'lion';
// }

