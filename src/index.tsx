import { StrictMode } from 'react';
import  ReactDOM from 'react-dom/client';
import App from './App';

const rootNode = document.getElementById('root');

const root = ReactDOM.createRoot(rootNode as HTMLElement);

import 'bootstrap/dist/css/bootstrap.min.css';
import ProductProvider from './context/ProductContext';


root.render(
    <StrictMode>
      <ProductProvider>
            <App/>
      </ProductProvider>
    </StrictMode>
)
