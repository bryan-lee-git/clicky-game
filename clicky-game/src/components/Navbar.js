import React from 'react';

const Navbar = props => {
    return (
        <div>
            <nav className="navbar navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <button className="button has-background-grey has-text-white-bis">Score: {props.currentScore}</button>
                            <button className="button has-background-grey has-text-white-bis">Top Score: {props.highScore}</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;