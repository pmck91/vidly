import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to={"/"} className="navbar-brand">Vidly</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={"/movies"} className="nav-link" activeClassName="active">Movies</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/customers"} className="nav-link" activeClassName="active">Customers</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/rentals"} className="nav-link" activeClassName="active">Rentals</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/login"} className="nav-link" activeClassName="active">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/register"} className="nav-link" activeClassName="active">Register</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;