import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ADD_REMOVE_PRODUCT_IN_CART } from '../../Redux/Actions'
import ProductViewer from './ProductViewer'

const ProductViewerContainer = () => {
    // console.log(props.state.State.Products.list);
    
    const Add_Remove_Action_Creater = (type : string, payload : string) : {} =>  ({
        type,
        payload
    })

    const mapStateToProps = (state : any) => {
        return({
        selectedObject : {...state.selectedForViewing},
        addedId :[ ...state.addedToCartReducer.addedId],
        // addedButton : state.addedToCartReducer.addedId.indexOf(state.selectedForViewing.id) === -1 ? 'Add' : 'Remove'
    })};
    
    const mapDispatchToProps = (dispatch : any) => {
        return({
            addedProductFunction : (id : string) : void => {
                const action = Add_Remove_Action_Creater(ADD_REMOVE_PRODUCT_IN_CART,id)
                dispatch(action)
            }
        })

    };
    const ProductViewerWrap = connect(mapStateToProps, mapDispatchToProps)(ProductViewer)
    return( <ProductViewerWrap /> );
};

export default ProductViewerContainer;
