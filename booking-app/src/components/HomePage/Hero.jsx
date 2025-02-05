// import hero from '../../assets/Hero.jpg';
import Navbar from './Navbar';
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero_container">
                <Navbar />
                <div className="hero_content"></div>
            </div>
        </div>
    );
};

export default Hero;