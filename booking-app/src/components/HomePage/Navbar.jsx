import './Navbar.css';
import image from '../../assets/letter-h.png';
import SignUp from './SignUp';

const Navbar = () => {
    return (
        <div className="navbar">
            <img className='logo' src={image} alt='logo'/>
            <div className="links">
                <a href='#' className='find-stay'>Find a Stay</a>
                <SignUp/>
            </div>
        </div>
    );
};

export default Navbar;