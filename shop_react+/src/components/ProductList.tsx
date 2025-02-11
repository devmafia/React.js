import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/slices/cartSlice';
import { Product } from '../types/types';
import { RootState } from '../store/store';

interface ProductListProps {
    products: Product[]; 
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (product: Product) => {
        return () => {
            dispatch(addItem(product));
        };
    };

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {products.slice(0,9).map((product, index) => (
                    <div className="col" key={index}>
                        <div className="card h-100">
                            <img 
                                src={product.image} 
                                className="card-img-top" 
                                style={{ 
                                    width: "200px",
                                    height: "200px",
                                    margin: "0 auto",
                                }} 
                                alt={product.title}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary w-100" onClick={handleAddToCart(product)}>Add to the cart</button>
                                <p>{product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
