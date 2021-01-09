import React from 'react'
import { connect } from 'react-redux'
import PayComponent from './PayComponent'

const PayComponentContainer : React.FC = ()  => {

    const mapStateToProps = (state : any) => {
        return({
            
        })
    };
    const mapDispatchToProps = (dispatch : any) => {
        return({

        })
    } 

    const PayComponentWrap = connect()(PayComponent);
    return(<PayComponentWrap />)
};

export default PayComponentContainer;