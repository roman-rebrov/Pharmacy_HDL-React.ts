import { ADD_REMOVE_PRODUCT_IN_CART } from "./Actions";

type addedToCart = {
    added : string[]
}

const initialAddedTOCart : addedToCart = {
    added: []
 };

 const addedToCart = (added : string[] = initialAddedTOCart.added, action : any) : string[] => {
    // console.log(action.type)
    
    switch(action.type) {
        case ADD_REMOVE_PRODUCT_IN_CART :
            let check : number = added.indexOf(action.payload);
            let array : string[] = added;
            check === -1 ? array.push(action.payload) : array.splice(check, 1);
            // console.log(check);
            // console.log(array);
            // let array : Array<string> = state.Added;
            // array.push(action.payload)
            return([ ...array ])
    }
    return added;
};

export default addedToCart;