import React from 'react';
import './Header.css';

function Header(props) {
    return(
        <div className="app-header d-flex">
            <h1>Viktor Tkachenko</h1>
            <h2>{props.allTwets} записей, из них понравилось {props.liked}</h2>
        </div>
    )
}
export default Header;