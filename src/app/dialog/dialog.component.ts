import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  seasons: string[] = ['Brand New', 'Second Hand', 'Refurbished'];
  productForm !: FormGroup
  actionBtn: string = 'Save';

  constructor(@Inject(MAT_DIALOG_DATA) public editData: any, private formBuilder : FormBuilder, private api: ApiService, private dialogRef: MatDialogRef<DialogComponent>) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      productCategory: ['', Validators.required],
      productDate: ['', Validators.required],
      productSeason: ['', Validators.required],
      productPrice: ['', Validators.required],
      productComment: ['', Validators.required]
    })

    //console.log(this.editData);
    // Checks data from the modal and appends the data if its available 
    if (this.editData) {
      this.actionBtn = 'Update';
      this.productForm.controls['productName'].setValue(this.editData.productName);
      this.productForm.controls['productCategory'].setValue(this.editData.productCategory);
      this.productForm.controls['productDate'].setValue(this.editData.productDate);
      this.productForm.controls['productSeason'].setValue(this.editData.productSeason);
      this.productForm.controls['productPrice'].setValue(this.editData.productPrice);
      this.productForm.controls['productComment'].setValue(this.editData.productComment);
    }
  }

  onSubmitProduct(): void {
    if (this.actionBtn == 'Save') {
      this.saveProduct();
    }
    else {
      this.editProduct();
    }
  }

  public saveProduct(): any {
    if (this.productForm.valid) {
      this.api.saveProduct(this.productForm.value).subscribe({
        next:(res) => {
          alert('Product added');
          this.productForm.reset();
          this.dialogRef.close();
          this.getAllProducts();
        }, error:() => {
          alert('Error adding');
        }, complete:() => {}
      });
    }
  }

  public editProduct(): any {
    if (this.productForm.valid) {
      return this.api.editProduct(this.editData.id, this.productForm.value).subscribe({
        next:(data) => {
          //console.log(data);
          alert('Product updated');
          this.productForm.reset();
          this.dialogRef.close();
          this.getAllProducts();
        }, error:() => {
          alert('Error occured');
        }, complete:() => {}
      })
    }
  }
  
  public getAllProducts() {
    return this.api.getProducts().subscribe({
      next:(data) => {},
      error:(error) => {console.log(error)}, 
      complete:() => {console.log('Data loaded...')}
    })
  }

  public deleteProduct(): void {
    this.api.deleteProduct(this.editData.id).subscribe({
      next:(remove) => {
        //console.log(remove);
        alert('Product Deleted');
        this.dialogRef.close();
      }, error:() => {
        alert('Error occured');
      }, complete:() => {}
    })
  }

}
