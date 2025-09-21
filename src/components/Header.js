import logo from 'url:../utils/images/logo1.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const [btnName, setBtnName] = useState('Login');

    return (
        <div className='header'>
            <div>
                <img className='logo' src={logo} alt='' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About Us</Link>
                        </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className='login' onClick={
                        () => {
                            btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
                        }
                    }>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;