import {Component, Injectable} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {ApiGetResponse, Product} from '../../models/getProduct.model';
import {ProductRequestService} from '../../services/product-request-service';


@Component({
  selector: 'app-home',
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

@Injectable({providedIn: 'root'})
export class Home {
  response: ApiGetResponse | undefined
  products:Product[]=[]
  singleProduct:Product | undefined

  protected pageSize:number=0
  protected row:number=0
  constructor(private productService: ProductRequestService, private router: Router) {}

  ngOnInit() {
    this.pageSize=10
    this.row=0
   this.mapProducts(10, 0)
  }

  mapProducts(pageSize:number, row:number){
    this.row=this.row+row;
    this.productService.getProducts(pageSize,this.row).subscribe({
      next:(res)=>{
        this.response=res as ApiGetResponse
        this.products=this.response.data.products
      },
      error:(err)=>{
        console.log("Error al cargar productos");
        console.log("----------------------");
        console.log(err);
        console.log("----------------------");
      }
    });


  }

  modifyProduct(id:number){
    this.singleProduct=this.products.find(i => i.id == id)
    this.router.navigate(['/manageproduct'],{
      state:{product: this.singleProduct, componentToggle:false}
    });
  }

  deleteProduct(id:number, index:number){
    this.productService.deleteProduct(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log("Error al eliminar producto");
        console.log("----------------------");
        console.log(err);
        console.log("----------------------");
      }
    });

    this.products.splice(index, 1)
    alert("Producto eliminado con exito");

  }
}
