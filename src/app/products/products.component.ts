import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = [];
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['productName', 'productCategory', 'productSeason', 'productDate', 'productPrice', 'productComment', 'action'];
  //dataSource: MatTableDataSource<UserData>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private api: ApiService) {
    //this.dataSource = new MatTableDataSource;
  }

  public ngOnInit(): void {
    this.getAllProducts();
  }

  public openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    });
  }

  public getAllProducts() {
    return this.api.getProducts().subscribe({
      next:(data) => {
        this.products = data;
        this.dataSource = new MatTableDataSource(this.products);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(error) => {console.log(error)}, 
      complete:() => {console.log('Data loaded...')}
    })
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public editProduct(row: any) {
    this.dialog.open(DialogComponent, {
      width: '30%',
      data: row
    })
  }

  // deleteProduct(row: any): void {
  //   this.api.deleteProduct(this.editData.id, this.productForm.value).subscribe({
  //     next:(remove) => {
  //       console.log(remove);
  //       alert('Product Deleted');
  //       this.dialogRef.close();
  //     }, error:() => {
  //       alert('Error occured');
  //     }, complete:() => {}
  //   })
  // }

}
