import React, { StrictMode } from 'react';
import  ReactDOM from 'react-dom/client';
import App from './App';

const rootNode = document.getElementById('root');

const root = ReactDOM.createRoot(rootNode);

import 'bootstrap/dist/css/bootstrap.min.css';

//TODO: Remove after fetch function is setup
const productList = [
    {
    "index": 0,
    "isSale": false,
    "price": "$49.99",
    "productImage": "Product_1.jpeg",
    "productName": "Pure Blonde Crate",
    "type": "Beer"
    },
    {
    "index": 1,
    "isSale": true,
    "price": "$14.99",
    "productImage": "Product_2.jpeg",
    "productName": "Victoria Bitter 4x6x375ml",
    "type": "Beer"
    },
    {
    "index": 2,
    "isSale": false,
    "price": "$24.99",
    "productImage": "Product_3.jpeg",
    "productName": "Kirin Megumi 4x6x330ml",
    "type": "Beer"
    },
    {
    "index": 3,
    "isSale": true,
    "price": "$4.99",
    "productImage": "Product_4.jpeg",
    "productName": "Panhead CH Johnny Octane Can",
    "type": "Beer"
    },
    {
    "index": 4,
    "isSale": false,
    "price": "$25.99",
    "productImage": "Product_5.jpeg",
    "productName": "Aquila Spark SauvB Bottle",
    "type": "Wine"
    },
    {
    "index": 5,
    "isSale": true,
    "price": "$29.99",
    "productImage": "Product_6.jpeg",
    "productName": "Bernadino Spumante Bottle",
    "type": "Wine"
    },
    {
    "index": 6,
    "isSale": true,
    "price": "$69.99",
    "productImage": "Product_7.jpeg",
    "productName": "Grey Goose Orginal 10x12x50ml",
    "type": "Spirits"
    },
    {
    "index": 7,
    "isSale": false,
    "price": "$49.99",
    "productImage": "Product_8.jpeg",
    "productName": "Scrumpy RBerry 6x1.25L",
    "type": "Cider"
    }
]

root.render(
    <StrictMode>
        <App products={productList}/>
    </StrictMode>
)
