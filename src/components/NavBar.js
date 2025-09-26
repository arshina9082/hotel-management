import React from 'react';
import { Component } from 'react';

class NavBar extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar " style={{ backgroundColor: "#001f3f" }}>
                <div className="container-fluid">
                    <a className="navbar-brand text-white p-4 fw-bold">Home Stay</a>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default NavBar;