import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getAllProducts() {
    return axios.get('http://localhost:3000/products');
  }

  createProduct(data: any) {
    return axios.post('http://localhost:3000/products', data)
      .then(response => {
        console.log('Created successfully', response.data);
        return response.data.product;
      })
      .catch(error => {
        console.error('Error creating resource', error);
      });
  }

  deleteProduct(id: number) {
    return axios.delete('http://localhost:3000/products/'+id+'/delete')
      .then(response => {
        console.log('Deleted successfully', response.data);
      })
      .catch(error => {
        console.error('Error deleting resource', error);
      });
  }
}
