import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.development';
import {CreateProductRequest, UpdateProductRequest} from '../models/getProduct.model';

@Injectable({
  providedIn: 'root'
})
export class ProductRequestService {
  constructor(private http: HttpClient) { }
  getProducts(pageSize:number, row:number){

    return this.http.get(environment.apiGet, {
      params:{
        pageZise: pageSize.toString(),
        row: row.toString()
      },
      headers:{"Accept":"application/json","Content-Type":"application/json", "Access-Control-Allow-Origin":"*"}
    })
  }

  deleteProduct(id:number){
    return this.http.delete(environment.apiDelete, {
      body:{idProductDelete: id},
      headers:{"Accept":"application/json","Content-Type":"application/json", "Access-Control-Allow-Origin":"*"}
    })
  }

  createProduct(data:CreateProductRequest){
    return this.http.post(environment.apiCreate, data,{
      headers:{"Accept":"application/json","Content-Type":"application/json", "Access-Control-Allow-Origin":"*"}
    })
  }

  updateProduct(data:UpdateProductRequest){
    return this.http.put(environment.apiUpdate, data,{
      headers:{"Accept":"application/json","Content-Type":"application/json", "Access-Control-Allow-Origin":"*"}
    })
  }

}
