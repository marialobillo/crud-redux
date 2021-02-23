

import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from './../types';

import AxiosClient from './../config/axios';

// Create new products
export function createNewProductAction(product) {
    return async (dispatch) => {
        dispatch( addProduct() );

        try {
            // insert on API
            await AxiosClient.post('/products', product);
            // update the state
            dispatch( addProductSuccess(product) ); 
        } catch (error) {
            console.log(error);
            // change state if there is an error
            dispatch( addProductError(true) );
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
});


// if product is saved in db
const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})

// if happens any errors
const addProductError = state => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
})