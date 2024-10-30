import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="products-grid">
            {products.slice(0, 30).map(product => (
                <div className="product-card" key={product.id}>
                    <img src={product.images[0]} alt={product.title} className="product-image" />
                    <h3 className="product-name">{product.title}</h3>
                    <p className="product-price">{product.price} USD</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
