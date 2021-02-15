import React, { Fragment } from 'react';

const Products = () => {

    return (
        <Fragment>
            <h2 className="text-center my-5">Products</h2>

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                       <th scope="col">Name</th> 
                       <th scope="col">Price</th> 
                       <th scope="col">Options</th> 
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </Fragment>
    );
}


export default Products;