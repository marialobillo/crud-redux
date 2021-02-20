import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions Redux
import { createNewProductAction } from './../actions/productActions';

const NewProduct = () => {

    // use useDispatch
    const dispatch = useDispatch();

    // calling action  from product action
    const addProduct = () => dispatch( createNewProductAction() );

    // When the use does submit
    const submitNewProduct = event => {
        event.preventDefault();

        // form validation 


        // check out errors


        // create new prouct
        addProduct();
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Add New Product
                        </h2>
        
                        <form
                            onSubmit={submitNewProduct}
                        >
                            <div className="form-group">
                                <label>Name</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Product Name..."
                                    name="name"
                                />
                            </div>

                            <div className="form-group">
                                <label>Price</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Product Price..."
                                    name="price"
                                />
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-primary font-weight-bold 
                                text-uppercase d-block w-100"
                            >Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default NewProduct;