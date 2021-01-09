import { State } from '../Types/types';
import { ADD_REMOVE_PRODUCT_IN_CART } from './Actions'
import InitialState from './initialState';
 
 
 const defaultReducer = (state : State = InitialState, action : any) : State => {
    // console.log(action.type)
    
    switch(action.type) {
        // case ADD_REMOVE_PRODUCT_IN_CART :
        //     let check : number = state.Added.indexOf(action.payload);
        //     let array : string[] = state.Added;
        //     check === -1 ? array.push(action.payload) : array.splice(check, 1)
        //     // console.log(check);
        //     // console.log(array);
        //     // let array : Array<string> = state.Added;
        //     // array.push(action.payload)
        //     return({
        //         ...state,
        //         Added : array
        //     })
    }
    return state
};

export default defaultReducer;