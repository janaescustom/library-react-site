import React from 'react';
import Reading from '../assets/reading.png';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
    <section id='landing'>
        <header>
            <div className="header__container">
                <div className="header__description">
                    <h1>Europe's most awarded online kid's library platform</h1>
                    <h2>Find your dream book with <span className="orange">Library</span></h2>
                    <Link to="#features">
                        <button className="btn">Browse Books</button>
                    </Link>
                </div>
                <figure className="header__img--wrapper">
                    <img className='header__img' src={Reading} alt="Library" />

                </figure>
            </div>
        </header>
    </section>)
}

export default Landing;