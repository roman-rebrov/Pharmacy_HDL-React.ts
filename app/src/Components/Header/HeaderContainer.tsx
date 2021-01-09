import React, { useState } from 'react'
import Header from './Header'
// import {State} from '../../Types/types'
import { connect } from 'react-redux'
import { ADD_REMOVE_PRODUCT_IN_CART } from '../../Redux/Actions'


const HeaderContainer : React.FC = () => {
    const removeActionCreator = (id : string) => ({
        type: ADD_REMOVE_PRODUCT_IN_CART, 
        payload: id
    });
    const addRemoveActionCreator = (id : string) => ({
        type: ADD_REMOVE_PRODUCT_IN_CART, 
        payload: id
    });
    const mapStateToProps = (state : any) : any => {
        // console.log(state.State.Products.list[1].cost.new);
        return {
            // added : [...state.addedToCart],
            added : [...state.addedToCartReducer.addedId],
            addedToCart : [...state.addedToCartReducer.added],
            // products : state.State.Products.list,
        }
    };
    const mapDispatchToProps = (dispatch : any) : any => {
        return { 
            remove : (id : string) => { 
                dispatch(removeActionCreator(id))
            },
            addRemove : (id : string) => {
                dispatch(addRemoveActionCreator(id))
            },
            totalCost : (cost : number) => {
                
            }
        }
    };

    const HeaderWrap = connect(mapStateToProps, mapDispatchToProps)(Header)

    return ( <HeaderWrap/> )
}

export default HeaderContainer 
