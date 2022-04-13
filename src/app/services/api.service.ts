import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  saveProduct(productObj: any) {
    return this.httpClient.post("http://localhost:3000/productList/", productObj);
  }

  getProducts() {
    return this.httpClient.get("http://localhost:3000/productList/")
  }

  editProduct(productId: string, productObj: any) {
    return this.httpClient.put("http://localhost:3000/productList/" + productId + "/", productObj);
  }

  deleteProduct(productId: string) {
    return this.httpClient.delete("http://localhost:3000/productList/" + productId + "/");
  }
}
