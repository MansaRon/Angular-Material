import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/api.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public dialog: MatDialog, private api: ApiService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

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
