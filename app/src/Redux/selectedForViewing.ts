import Products from "./Products";


const selectedObject : {} = {};

const selectedForViewing = (object : {} = selectedObject, action : any) => {
    switch(action.type){
        case "SELECTED_FOR_VIEWING" :

            Products.list.forEach( ( element, i ) => {
                if( element.id === action.payload ){
                    object = {...element};
                    return(object);
                }
            });
    }
    return(object)
}

export default selectedForViewing;