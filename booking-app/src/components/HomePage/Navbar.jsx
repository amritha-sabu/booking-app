import './Navbar.css';
import image from '../../assets/letter-h.png';
import SignUp from './SignUp';

const Navbar = () => {
    return (
        <div className="navbar">
            <img className='logo' src={image} alt='logo'/>
            <h3>Find a Stay</h3>
            <SignUp/>
        </div>
    );
};

export default Navbar;