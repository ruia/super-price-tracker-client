import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  products: any;

  constructor(private productService: ProductService) { };

  ngOnInit(): void {
    this.productService.getAllProducts()
      .then(response => {
        // console.log(response.data);
        this.products = response.data;
      })
      .catch(error => {
        console.log(error);
      })
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id)
      .then(() => {
        this.products = this.products.filter((p: any) => p.id !== id);
      });
  }
}
