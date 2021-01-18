import React from 'react'
import { connect } from 'react-redux'
import { ADD_REMOVE_PRODUCT_IN_CART } from '../../Redux/Actions';
// import addedToCart from '../../Redux/addedReducer';
import PayComponent from './PayComponent'

const PayComponentContainer : React.FC = ()  => {

    const removeActionCreator = (id : string) => ({
        type: ADD_REMOVE_PRODUCT_IN_CART, 
        payload: id
    });
    const viewerActionCreator = (id : string) => ({
            type : "SELECTED_FOR_VIEWING",
            payload : id,
    });
    const mapStateToProps = (state : any) => { 
        let total : number = 0;
        state.addedToCartReducer.added.forEach((element : any) => { 
            // console.log(element.cost);
            total += element.cost;
        });
        return({
            addedToCart : [...state.addedToCartReducer.added],
 
        })
    };
    const mapDispatchToProps = (dispatch : any) => {
        return({
            viewer : (id : string) => {
                dispatch(viewerActionCreator(id))
            },
            remove : (id : string) => { 
                dispatch(removeActionCreator(id));
            },
        })
    } 

    const PayComponentWrap = connect(mapStateToProps, mapDispatchToProps)(PayComponent);
    
    return(<PayComponentWrap />)
};

export default PayComponentContainer;