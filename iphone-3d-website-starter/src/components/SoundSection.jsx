import React from 'react'

const SoundSection = () => {
    const handleLearnMore = () => {
    const element = document.querySelector('.display-section');
    window.scrollTo({
        top: element?.offsetTop,
        left: 0,
        behavior: 'smooth'
    });
    }
    
  return (
    <div className="sound-section wrapper">
        <div className="body">
            <div className="sound-section-content content">
                <h2 className="title">New Sound System</h2>
                <p className="text">Feel the Base</p>
                <span className='description'>
                    from $199 or $8.29/mo.<br />
                </span>
                <ul className='links'>
                    <li className="button">
                        Buy
                    </li>
                    <li>
                        <a onClick={handleLearnMore} className="link">Learn more</a>
                    </li>

                </ul>
            </div>
        </div>
    </div>
  );
}

export default SoundSection