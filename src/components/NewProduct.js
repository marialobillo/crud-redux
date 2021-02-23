import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions Redux
import { createNewProductAction } from './../actions/productActions';

const NewProduct = () => {

    // state component 
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    // use useDispatch
    const dispatch = useDispatch();

    // calling action  from product action
    const addProduct = product => dispatch( createNewProductAction(product) );

    // When the use does submit
    const submitNewProduct = event => {
        event.preventDefault();

        // form validation 
        if(name.trim() === '' || price <= 0){
            return;
        }

        // check out errors


        // create new prouct
        addProduct({
            name,
            price
        });
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
                                    value={name}
                                    onChange={event => setName(event.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label>Price</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Product Price..."
                                    name="price"
                                    value={price}
                                    onChange={event => setPrice(Number(event.target.value))}
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