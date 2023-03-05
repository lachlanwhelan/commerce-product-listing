import React, { createContext, ReactNode, useEffect, useReducer } from "react";

type childrenType = {
    children: ReactNode
}

enum actionType {
    FETCH_PRODUCTS_START = "FETCH_PRODUCTS_START",
    FETCH_PRODUCTS_SUCCESS ="FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_FAILED = "FETCH_PRODUCTS_FAILED",
    UPDATE_FILTERED_LIST = "UPDATE_FILTERED_LIST"    
}

export type product = {
    index: number,
    isSale: boolean,
    price: string,
    productImage: string,
    productName: string,
    type: string
}

export type state = {
    productList: product[],
    filteredList: product[],
    types: string[],
    status: string,
    error: string
}

type action = {
    type: actionType,
    payload?: any
}

export type contextDefaultValue = {
    state: state,
    filterByType: (value: string) => void,
    filterByName: (value: string) => void
}


const PRODUCT_LIST_INITIAL_STATE = {
    productList: [],
    filteredList: [],
    types: [],
    status: 'idle',
    error: ''
}


export const ProductsContext = createContext<contextDefaultValue>({
    state: {
        productList: [],
        filteredList: [],
        types: [],
        status: 'idle',
        error: ''
    },
    filterByType: () => {},
    filterByName: () => {}
});

const PRODUCT_LIST_ACTIONS = {
   FETCH_PRODUCTS_START: "FETCH_PRODUCTS_START",
   FETCH_PRODUCTS_SUCCESS: "FETCH_PRODUCTS_SUCCESS",
   FETCH_PRODUCTS_FAILED: "FETCH_PRODUCTS_FAILED",
   UPDATE_FILTERED_LIST: "UPDATE_FILTERED_LIST"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
}


const getProductsAsync = async (dispatch: React.Dispatch<action>) => {

    dispatch({type: actionType.FETCH_PRODUCTS_START})

    let data;
    try {
        const response = await fetch('https://api.npoint.io/de064040a1e40eb7647a');

        data = await response.json();
        
        if (response.ok){
            dispatch({type: actionType.FETCH_PRODUCTS_SUCCESS, payload: data});
            return;
        }

        throw new Error("Error:" + response.statusText);
    }
    catch(error){
        console.log(error);
        dispatch({type: actionType.FETCH_PRODUCTS_FAILED, payload: error})
    }
}


const productsReducer = (state : state, action: action) => {

    const {type, payload} = action;

    switch(type){
        case PRODUCT_LIST_ACTIONS.FETCH_PRODUCTS_START :
            return {
                ...state,
                status: 'loading'
            }
        case PRODUCT_LIST_ACTIONS.FETCH_PRODUCTS_SUCCESS :
        return {
            ...state,
            productList: payload,
            filteredList: payload,
            types: [...new Set(state.productList.map((product: product) => product.type))],
            status: 'succeeded'
        }
        case PRODUCT_LIST_ACTIONS.FETCH_PRODUCTS_FAILED :
        return {
            ...state,
            error: payload,
            status: 'failed'
        }
        case PRODUCT_LIST_ACTIONS.UPDATE_FILTERED_LIST :
            return {
                ...state,
                filteredList: payload
            }
        default :
        return state
    }
}

const ProductProvider = ({children} : childrenType) => {

    const [state, dispatch] = useReducer(productsReducer, PRODUCT_LIST_INITIAL_STATE);
    
    useEffect(() => {
        getProductsAsync(dispatch);
    }, []);

    const filterByType = (type: string) => {
        let products;

        if(type === 'All') 
            products = state.productList;
        else
            products= state.productList.filter((product: product) => product.type.toLowerCase() === type.toLowerCase());

        dispatch({type: actionType.UPDATE_FILTERED_LIST, payload: products});
    }

    const filterByName = (searchText: string) => {
        let products;

        products = state.productList.filter((product: product) => product.productName.toLowerCase().includes(searchText));

        dispatch({type: actionType.UPDATE_FILTERED_LIST, payload: products});
    }
    
    
    return (
        <ProductsContext.Provider value={{state, filterByType, filterByName}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductProvider;