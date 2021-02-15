import React from 'react';

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark 
        bg-primary justify-content-between">
            <div className="container">
                <h2> CRUD - React, Redux, REST API & Axios</h2>
            </div>

            <a 
                className="btn btn-danger new-post d-block d-md-inline-block"
                href="/products/new">New Product &#43;</a>
        </nav>
    );
}

export default Header;