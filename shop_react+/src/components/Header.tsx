import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Header: React.FC = () => {
    const convertedTotal = useSelector((state: RootState) => state.cart.convertedTotal);
    const location = useLocation();
    let navItem;

    if (location.pathname === '/') {
        navItem = (
            <li className="nav-item">
                <span style={{ padding: '10px' }}>{convertedTotal > 0 && `(${convertedTotal.toFixed(2)})`}</span>
                <span className='badge text-bg-success'>
                    <Link to='/cart' className="nav-link p-3">Cart</Link>
                </span>
            </li>
        );
    } else if (location.pathname === '/cart') {
        navItem = (
            <li className="nav-item">
                <span style={{ padding: '10px' }}>{convertedTotal > 0 && `(${convertedTotal.toFixed(2)})`}</span>
                <span className="badge text-bg-success">
                    <Link to='/' className="nav-link p-3">Home</Link>
                </span>
            </li>
        );
    }

    return (
        <header className="navbar navbar-expand-lg navbar-light container-fluid" style={{ 
                backgroundColor: 'grey' 
            }}>
            <ul className="navbar-nav ms-auto">
                {navItem}
            </ul>
        </header>
    );
};

export default Header;
