import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CreateProductRequest} from '../../models/getProduct.model';
import {ProductRequestService} from '../../services/product-request-service';

@Component({
  selector: 'app-create-product',
  imports: [
    FormsModule
  ],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css'
})
export class CreateProduct {
  name = '';
  description = ''
  price: number =0
  data: CreateProductRequest | undefined

  constructor(private productService: ProductRequestService) {}

  crearProducto() {
    this.data={
      name:this.name,
      description:this.description,
      price:this.price
    }

    this.productService.createProduct(this.data).subscribe({
      next: (res) => {
        console.log(res);
        alert("Producto creado con exito");
        this.name = '';
        this.description = '';
        this.price = 0;
      },
      error: (err) => {
        console.log("Error al crear producto");
        console.log("----------------------");
        console.log(err);
        console.log("----------------------");
      }
    })
  }

}
