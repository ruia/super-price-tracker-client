import { Component } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { UntypedFormGroup, UntypedFormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any;
  document: any = '';

  public form = new UntypedFormGroup({
    name: new UntypedFormControl(null, Validators.required),
    price: new UntypedFormControl(null, Validators.required)
  });

  constructor(private productService: ProductService) { };

  ngOnInit(): void {
    this.productService.getAllProducts()
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        console.log(error);
      })
  }

  createProduct(): void {
    const data = this.form.value;
    this.productService.createProduct(data)
      .then(product => {
        this.products.push(product);
        this.form.reset();
        document.getElementById('name')?.focus();
      });
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id)
      .then(() => {
        this.products = this.products.filter((p: any) => p.id !== id);
      });
  }
}
