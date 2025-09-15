import logo from 'url:../utils/images/logo1.jpg';

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img className='logo' src={logo} alt='' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;