import Navbar from './Navbar';
import Calendar from './Calendar/Calendar';
import './Hero.css'
import { useState } from 'react';

const Hero = () => {
    const [showCalendar, setShowCalendar] = useState(false);

    const handleClick = () => {
        setShowCalendar(!showCalendar);
    }

    return (
        <div className="hero">
            <div className="hero_container">
                <Navbar />
                <div className="hero_content">
                    <div className='check-in' onClick={handleClick}>
                        <button>Check In</button>
                    </div>
                    <div className='check-out' onClick={handleClick}>
                        <button>Check Out</button>
                    </div>
                    {/* <p className="check_in_out">
                    <label  htmlFor="check_in_date">Check In </label>
                    <input className="check_in_date" type="date" id="check_in_date" name="check_in_date" required />
                    </p>
                    <p className="check_in_out">
                    <label  htmlFor="check_out_date">Check Out </label>
                    <input className="check_out_date" type="date" id="check_out_date" name="check_out_date" required />
                    </p> */}
                    <label htmlFor="no_of_adults">Adults</label>
                    <select className="booking_dropdown" id="no-of-adults" name="no_of_adults" >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                    <label htmlFor="no_of_children">Children</label>
                    <select className="booking_dropdown" id="no-of-children" name="no_of_children" >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </div>
                    {showCalendar && <Calendar />}
            </div>
        </div>
    );
};

export default Hero;