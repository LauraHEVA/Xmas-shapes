import React from 'react';
import Snow from './Snow.tsx';

const Header = () => {
    return (
        <header className="App-header">
            <Snow reverse={true}/>
            <Snow/>
            <Snow reverse={true}/>
            <Snow/>
            <Snow reverse={true}/>
            <Snow/>
            <Snow reverse={true}/>
            <Snow/>
            <Snow reverse={true}/>
            <Snow/>
            <Snow reverse={true}/>
        </header>
    );
}

export default Header;