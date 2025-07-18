# Zenith Product -API

A RESTful API to manage products with full CRUD functionality and advanced querying features.

## Features

- Create a product
- Get all product with:
   * Pagination ( page,limit )
   * Filtering by category,miniPrice,maxPrice
   * Sorting (e.g sortBy=price_asc & desc)
- Get product by ID
- Update product by ID
- Delete product by ID   

## API Endpoints

| Method | Endpoint            | Description                     |
| ------ | ------------------- | ------------------------------- |
| POST   | `/api/products`     | Create a new product            |
| GET    | `/api/products`     | Get all products (with filters) |
| GET    | `/api/products/:id` | Get a product by ID             |
| PUT    | `/api/products/:id` | Update a product by ID          |
| DELETE | `/api/products/:id` | Delete a product by ID          |

## Query Parameteres 
- age: Page number (default: 1)
- limit: Items per page (default: 10)
- category: Filter by product category
- minPrice: Minimum price
- maxPrice: Maximum price
- sortBy: price_asc, name_desc


## Setup & Run

1. Install dependencies:
2. Start server:`npm run dev`
3. API will run on `http://localhost:5000/api`