import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from "../../environments/environment";
import {Products} from "../shared/interfaces/products";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  public getProducts() {
    return this.http.get<Products[]>(environment.api + 'products');
  }

  public getProductById(id: number) {
    return this.http.get<Products>(environment.api + 'products/' + id);
  }

  public createProduct(product: Products) {
    return this.http.post<Products>(environment.api + 'products', product);
  }

  public updateProduct(product: Products, id: number) {
    return this.http.put<Products>(environment.api + 'products/' + id, product);
  }

  public deleteProduct(id: number) {
    return this.http.delete<Products>(environment.api + 'products/' + id);
  }
}
