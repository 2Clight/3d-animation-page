import React from 'react'
import Iphone from '../assets/images/iphone-14.jpg'
import HoldingPhone from '../assets/images/iphone-hand.png'

const Jumbotron = () => {

    const handleLearnMore = () => {
        const element = document.querySelector('.sound-section');
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left:0,
            behavior: 'smooth'
        });
    }

    return (
        <div className='jumbotron-section wrapper'>
            <h2 className="title">New</h2>
            <img className='logo' src={Iphone} alt="iphone 14 pro" />
            <p className="text">Big and Bigger</p>
            <span className='description'>
                from $999 or $41.62/mo.<br />
            </span>
            <ul className="links">
                <li><button className="button">
                    Buy </button>
                </li>
                <li><a onClick={handleLearnMore} className="link">
                    Learn more </a>
                </li>
            </ul>
            <img className='iphone-img' src={HoldingPhone} alt="iphone" />

        </div>
    )
}

export default Jumbotron