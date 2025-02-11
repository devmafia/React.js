import React, { useState, useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addItem, decrementItem, changeCurrency } from '../store/slices/cartSlice';
import { Product } from '../types/types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Currency } from '../types/types';

const Cart: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items) || [];
    const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
    const currency = useSelector((state: RootState) => state.cart.currency);
    const convertedTotal = useSelector((state: RootState) => state.cart.convertedTotal);
    const dispatch = useDispatch();

    const [contact, setContact] = useState({
        name: "",
        surname: "",
        address: "",
        phone: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setContact(prevState => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCurrency = e.target.value as Currency;
        dispatch(changeCurrency(selectedCurrency));
    };

    const handleIncrement = (product: Product) => () => dispatch(addItem(product));
    
    const handleDecrement = (id: number) => () => dispatch(decrementItem(id));

    const handleOrder = () => {
        const order = {
            items: cartItems.map(item => ({
                id: item.id,
                title: item.title,
                image: item.image,
                description: item.description,
                price: item.price,
                quantity: item.quantity,
            })),
            total: convertedTotal,
            contacts: {
                name: contact.name,
                surname: contact.surname,
                address: contact.address,
                phone: contact.phone,
            },
            currency: currency
        };
        console.log('Order Summary:', JSON.stringify(order, null, 2));
    };

    return (
        <div className="container mt-4">
            {cartItems.length === 0 ? (
                <p className="text-center">Your cart is empty</p>
            ) : (
                <div className="row">
                    <div className="col-md-8">
                        <ul className="list-group">
                            {cartItems.map(item => (
                                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img src={item.image} alt={item.title} className="img-thumbnail m-3" style={{ width: '100px' }} />
                                        <div className="ml-3">
                                            <h5>{item.title}</h5>
                                            <p>{item.description}</p>
                                            <p>${item.price}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <button style={{ width: '30px', height: '30px'}} className="btn btn-outline-secondary mx-2" onClick={handleDecrement(item.id)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button style={{ width: '30px', height: '30px'}} className="btn btn-outline-secondary mx-2" onClick={handleIncrement(item)}>+</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-3 text-right">
                            <h4>TOTAL: {convertedTotal.toFixed(2)} {currency}</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3">
                            <h5>Order Details</h5>
                            <form className="d-flex flex-column justify-content-center">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" onChange={handleInputChange} placeholder="Enter your name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="surname">Surname</label>
                                    <input type="text" className="form-control" id="surname" onChange={handleInputChange} placeholder="Enter your surname" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" className="form-control" id="address" onChange={handleInputChange} placeholder="Enter your address" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" className="form-control" id="phone" onChange={handleInputChange} placeholder="Enter your phone number" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="currency">Currency</label>
                                    <select id="currency" className="form-control" value={currency} onChange={handleCurrencyChange}>
                                        <option value="USD">USD</option>
                                        <option value="UAH">UAH</option>
                                        <option value="GBP">GBP</option>
                                        <option value="JPY">JPY</option>
                                    </select>
                                </div>
                                <button type="button" className="btn btn-primary btn-block" onClick={handleOrder}>Order</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
