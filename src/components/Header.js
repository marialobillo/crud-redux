import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary
            justify-content-between">
            <div className="container">
                <h1> CRUD - React, Reduz, REST API & Axios</h1>
            </div>

            <a 
                className="btn btn-danger"
                href="/products/new">Add New Product &#43;</a>
        </nav>
    );
}

export default Header;