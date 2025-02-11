import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';
import { useDispatch } from "react-redux";
import { loadCartFromStorage } from './store/slices/cartSlice';
import { Currency } from './types/types';

const App: React.FC = () => {
	  const dispatch = useDispatch();

	  useEffect(() => {
		    const savedCart = localStorage.getItem('cart');
		    const totalPrice = localStorage.getItem("totalPrice");
			const currency = localStorage.getItem('currency');
		    const convertedTotal = localStorage.getItem("convertedTotal");
		    if (savedCart && totalPrice && currency && convertedTotal) {
			      const parsedCart = JSON.parse(savedCart) || [];
			      const parsedPrice = JSON.parse(totalPrice) || 0;
				  const parsedCurrency = currency as Currency;
			      const parsedConvertedTotal = JSON.parse(convertedTotal) || 0;
			      dispatch(loadCartFromStorage({
				        items: parsedCart || [],
				        totalPrice: parsedPrice || 0,
						currency: parsedCurrency || "USD",
						convertedTotal: parsedConvertedTotal || 0,
			  }));
		    }
	  }, [dispatch]);

    return (
        <>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/cart' element={<Cart></Cart>}></Route>
            </Routes>
        </>
    )
}

export default App;
