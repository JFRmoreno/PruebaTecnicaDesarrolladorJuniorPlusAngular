import {Component, Input} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Product, UpdateProductRequest} from '../../models/getProduct.model';
import {ProductRequestService} from '../../services/product-request-service';

@Component({
  selector: 'app-edit-product',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.css'
})
export class EditProduct {
  @Input() data: Product | undefined;
  productId=0
  productName = ''
  productPrice = 0;
  productDescription = ''

  updatedProductData: UpdateProductRequest | undefined;

  constructor(private productService:ProductRequestService) { }

  ngOnInit() {
    console.log(this.productId);
    if(this.data){
      console.log(this.data)
      this.productId = this.data.id;
      this.productName = this.data.name;
      this.productPrice = this.data.price;
      this.productDescription = this.data.description;
    }
    else {
      console.log("No data")
    }
  }

  editarProducto(){
    const data:UpdateProductRequest={
      idProduct: this.productId,
      name: this.productName,
      price: this.productPrice,
      description: this.productDescription
    }

    this.productService.updateProduct(data).subscribe({
      next: (res) => {
        console.log(res);
        alert("Producto editado con exito");
        this.productId = 0;
        this.productName = '';
        this.productPrice = 0;
        this.productDescription = '';
      },
      error: (err) => {
        console.log("Error al editar producto");
        console.log("----------------------");
        console.log(err);
        console.log("----------------------");
      }
    })
  }
}
