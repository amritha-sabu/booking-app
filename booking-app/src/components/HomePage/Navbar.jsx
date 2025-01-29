import './Navbar.css';
import image from '../../assets/letter-h.png';
import SignUp from './SignUp';

const Navbar = () => {
    return (
        <div className="navbar">
            <img className='logo' src={image} alt='logo'/>
            <button className='find-stay'>Find a Stay</button>
            <SignUp/>
        </div>
    );
};

export default Navbar;