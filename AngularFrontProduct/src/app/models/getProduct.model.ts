// src/app/models/product.model.ts

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  createdAt: string;
  totalCount: number;
}

export interface ProductsData {
  products: Product[];
  totalCount: number;
}

export interface ApiGetResponse {
  data: ProductsData;
  statusCode: number;
  message: string;
  success: boolean;
}

export interface CreateProductRequest {
  name: string;
  description: string;
  price: number;
}

export interface UpdateProductRequest {
  idProduct: number;
  name: string;
  description: string;
  price: number;
}
