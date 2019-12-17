import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {

    render() {


        return (
            <div className="container">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        
                        <ul className="nav">
                            <Link to="/">
                                <li className="active">Home</li>
                            </Link>
                            
                            <Link to="/about">
                                <li >About</li>
                            </Link>
                            <Link to="/contact">
                                <li >Contact</li>
                            </Link>
                            <Link to="/validation">
                                <li >Form Validation</li>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </div>

        )

    }
}



export default Nav;
