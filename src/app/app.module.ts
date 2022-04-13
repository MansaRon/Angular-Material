import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon'; 
import {MatRadioModule} from '@angular/material/radio'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button'; 
import {MatDialogModule} from '@angular/material/dialog';
import {DialogComponent} from './dialog/dialog.component'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatDatepickerModule} from '@angular/material/datepicker';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, DialogComponent, ProductsComponent],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatSelectModule, MatInputModule, MatDatepickerModule, MatRadioModule,
    MatToolbarModule, MatIconModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatNativeDateModule,
    ReactiveFormsModule, HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
