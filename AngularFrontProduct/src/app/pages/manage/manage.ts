import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';
import {EditProduct} from '../../components/edit-product/edit-product';
import {CreateProduct} from '../../components/create-product/create-product';
import {Product} from '../../models/getProduct.model';

@Component({
  selector: 'app-manage',
  imports: [
    RouterOutlet,
    EditProduct,
    CreateProduct,
    RouterLink
  ],
  templateUrl: './manage.html',
  styleUrl: './manage.css'
})
export class Manage {
  cambiarComponent = true;
  random='6454687'
  product: Product | undefined;

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.toggleComponent(true);


      const state = history.state as { product: Product, isNew: boolean };
      if (state) {
        this.product = state.product;
        const isNew = state.isNew;
        this.toggleComponent(state.product?isNew:true);

      }

  }

  toggleComponent(cambio: boolean) {
    this.cambiarComponent = cambio;
  }

}
