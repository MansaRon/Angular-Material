import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  seasons: string[] = ['Brand New', 'Second Hand', 'Refurbished'];
  productForm !: FormGroup

  constructor(private formBuilder : FormBuilder, private api: ApiService, private dialogRef: MatDialogRef<DialogComponent>) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      productCategory: ['', Validators.required],
      productDate: ['', Validators.required],
      productSeason: ['', Validators.required],
      productPrice: ['', Validators.required],
      productComment: ['', Validators.required]
    })
  }

  onSubmitProduct(): void {
    if (this.productForm.valid) {
      this.api.saveProduct(this.productForm.value).subscribe({
        next:(res) => {
          alert('Product added');
          this.productForm.reset();
          this.dialogRef.close();
        }, error:() => {
          alert('Error adding');
        }, complete:() => {}
      });
    }
  }

}
