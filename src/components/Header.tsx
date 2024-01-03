import React from 'react';
import Snow from './Snow.tsx';
import pokeMario from '../utils/poke-mario.png';

const Header = () => {
    return (
        <div className='header-container' >
            <img src={pokeMario} alt="poke-mario" className="poke-mario" height={80} width={80}/>
            <header className="App-header">
                <Snow reverse={true}/>
                <Snow/>
                <Snow reverse={true}/>
                <Snow disableMobile={true}/>
                <Snow reverse={true} disableMobile={true}/>
                <Snow disableMobile={true}/>
                <Snow reverse={true} disableMobile={true}/>
                <Snow disableMobile={true}/>
                <Snow reverse={true} disableMobile={true}/>
            </header>
            <p className="header-text">
                Click the snowflakes!
            </p>
        </div>
    );
}

export default Header;