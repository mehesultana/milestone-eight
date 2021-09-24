import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
	return (
		<div className="header">
			<img className="logo" src={logo} alt="" />
			<nav>
				<a href="/shop">Menu</a>
				<a href="/orders">Order Review</a>
				<a href="/inventory">Favourite Cocktails</a>
			</nav>
		</div>
	);
};

export default Header;
