import React, { useContext, useState, useEffect } from 'react';
import pcPartsData from '../pc_parts.json';
import { CartContext } from '../context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const RANDOM_PRODUCT_COUNT = 3;

const allProducts = [
  ...pcPartsData.pc_parts,
  ...pcPartsData.monitors
];

const getRandomItems = () => {
  const uniqueItems = new Set();
  
  while (uniqueItems.size < RANDOM_PRODUCT_COUNT) {
    const randomIndex = Math.floor(Math.random() * allProducts.length);
    uniqueItems.add(allProducts[randomIndex]);
  }

  return Array.from(uniqueItems);
};

const HomePage = () => {
  const { addToCart } = useContext(CartContext);
  const [randomItems, setRandomItems] = useState([]);

  useEffect(() => {
    setRandomItems(getRandomItems());
  }, []);
  return (
    <div
      style={{
        backgroundImage:
          'url(https://media.istockphoto.com/photos/eletronic-department-store-with-bokeh-blurred-background-picture-id918381560?k=6&m=918381560&s=612x612&w=0&h=X4Rzk8NayJnzQbcRcd9wYjLAoxD3OaX7bWwD6gxT9PE=)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="container"
    >
      <div
        className="row"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '10px',
          padding: '20px',
        }}
      >
        <div className="col-12">
          <h1 className="text-center my-4">Featured Products</h1>
        </div>
        {randomItems.map((item) => (
          <div key={item.id} className="col-md-4">
            <div className="card mb-4">
              <img
                src={item.images}
                className="card-img-top"
                alt={item.name}
                style={{ maxWidth: '400px', width: '100%', maxHeight: '400px', height: '400px' }}
              />
              <div className="card-header">
                <h5>{item.name}</h5>
              </div>
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">{item.type}</h6>
                <p className="card-text">Brand: {item.brand}</p>
                <p className="card-text">Price: ${item.price}</p>
                <h6>Specs:</h6>
                <ul>
                  {Object.entries(item.specs).map(([key, value]) => (
                    <li key={`${item.id}-${key}`}>
                      {key}: {value}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary" onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
