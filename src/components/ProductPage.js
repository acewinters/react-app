import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import productsData from '../pc_parts.json';
import { CartContext } from '../context/CartContext';

const ProductList = ({ products, addToCart }) => (
<div className="row">
    {products.map((product) => (
      <div key={product.id} className="col-md-4 col-sm-6">
        <div className="card mb-3">
          <img
            src={product.images}
            className="card-img-top"
            alt={product.name}
            style={{ maxWidth: '400px', width: '100%', maxHeight: '400px', height: '400px' }}
          />
          <div className="card-header">
            <h5>{product.name}</h5>
          </div>
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">{product.type}</h6>
            <p className="card-text">Brand: {product.brand}</p>
            <p className="card-text">Price: ${product.price}</p>
            <h6>Specs:</h6>
            <ul>
              {Object.entries(product.specs).map(([key, value]) => (
                <li key={`${product.id}-${key}`}>
                  {key}: {value}
                </li>
              ))}
            </ul>
            <button
              className="btn btn-primary"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ProductPage = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container">
      <h2 className="mt-4 category-title">PC Components</h2>
      <ProductList products={productsData.pc_parts} addToCart={addToCart} />
      <h2 className="mt-4 category-title">Monitors</h2>
      <ProductList products={productsData.monitors} addToCart={addToCart} />
    </div>
  );
};

export default ProductPage;
