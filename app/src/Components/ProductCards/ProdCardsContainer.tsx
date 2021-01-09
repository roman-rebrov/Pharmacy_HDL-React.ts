import React from 'react'
import { connect } from 'react-redux'
import ProductCard from './ProductCard'
import { ProdObj } from '../../Types/types'
import {
    ADD_REMOVE_PRODUCT_IN_CART,
    Adding_Action_Type
} from '../../Redux/Actions'
import { render } from '@testing-library/react'

interface MapStateToProps {
    added : string[],
    products : {},
    addedButton : string
}

const ProdCardsContainer : React.FC<{
    props : ProdObj, 
    dispatch : (action : {}) => void,
    added : Array<string>
}> = (
    {props, dispatch, added} : {
        props : ProdObj,
        dispatch : (action : {}) => void,
        added : Array<string>
    }
    ) => {
    const Add_Remove_Action_Creater = (type : string, payload : string) : {} =>  ({
        type ,
        payload
    })
    const addedProductFunction = (id : string) : void => {
        const action = Add_Remove_Action_Creater(ADD_REMOVE_PRODUCT_IN_CART,id)
        dispatch(action)
    }
    const addedButton : string = added.indexOf(props.id) === -1 ? 'Add' : 'Remove'

    const mapStateToProps = (state : any) => ({
        products : props,
        addedProductFunction,
        addedButton,
    });
    const mapDispatchToProps = {
        dispatch
    };
    const ProductCardWrap = connect(mapStateToProps,mapDispatchToProps)(ProductCard)
    return(<ProductCardWrap/>)
};

export default ProdCardsContainer;
