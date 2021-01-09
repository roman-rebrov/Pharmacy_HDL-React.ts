import React from 'react'
import ProductList from '../ProductList/ProductList'
import { State } from '../../Types/types'
import { connect } from 'react-redux'

const   ProdListContainrt : React.FC<{}> = () : any => {
    // return (
    //     // <div className="">
    //     //     ddddddd
    //     // </div> 
        
    //     )
}
// console.log(store);

const mapStateToProps = (store : any) : {} => {
        // console.log(store.State.dispatch);
        
        return {
            ...store.State,
            // added : store.addedToCart,
            added :[ ...store.addedToCartReducer.addedId]
        }
    }
    const mapDispatchTpProps = (dispatch : any) : {} =>{
        return{
            dispatch
        }
    }
    const ProdoctListWrap = connect(mapStateToProps)(ProductList )
    export default ProdoctListWrap
    // export default ProdListContainrt
    