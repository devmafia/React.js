import { useState, useEffect } from 'react';
import { Product } from '../types/types';
import ProductList from '../components/ProductList';


const Home: React.FC<{}> = () => {
    const [products, setProducts] = useState<Product[]>([]);

    async function fetchListOfProducts() {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json()
        if (data) {
            setProducts(data)
        }
      }
      
      useEffect(() => {
          fetchListOfProducts()
      }, [])
      
      
      return (
        <div className="container mt-5">
            <ProductList products={products}></ProductList>
        </div>
      );
}

export default Home;
