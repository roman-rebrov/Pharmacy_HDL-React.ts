import React, { ButtonHTMLAttributes, useState } from 'react'
import '../../SASS/ProductCard.sass'
import { ProdObj } from '../../Types/types'
import {Link} from 'react-router-dom'
import { render } from '@testing-library/react'
import PhotoViewer from '../Modals/PhotoViewer'
 
const ProductCard : React.FC<
    {products : ProdObj, 
    addedButton : string,
    addedProductFunction : (id : string) => void,
    dispatch : any
}
> = (
        {products, addedButton, addedProductFunction, dispatch} : {
        addedButton : string,
        products : ProdObj, addedProductFunction : (id : string) => void,
        dispatch : any
    }
    )  => {
        console.log();
        
    let [modal, setModal]  = useState(false)
    let [button, setButton] = React.useState(addedButton);

    const event = (id : string) => {
        // debugger
        console.log(id);
        const action = {
            type : "SELECTED_FOR_VIEWING",
            payload : id,
        }
        dispatch(action)
    };
    const openModal = () => {
        setModal(true)
    };
    const close = () => {
        setModal(false)
    };
    const Add_Remove_Product = (event : MouseEvent) => {
        event.preventDefault()
        addedProductFunction(products.id)
        button = button === 'Add' ? 'Remove' : 'Add'
        setButton(button)
        
    };
    
        return (
            <div className='Products'>
            <div className="product-card">
                <Link to='/productViewer' onClick={()=> {event(products.id)}}>
                    <div className="product-name">
                            {products.name}
                    </div>
                </Link>
                <div className="product-photo"
                    onClick={() => {openModal()}}
                >
                    <img src={products.photo[0]} alt={`Photo ${
                        products.brand
                    }`}/>
                </div>
                <div className="cost-wrap">
                    <div className="new-cost">
                        {products.cost['new']} 
                    </div>
                    <div className="add-in-cart-wrap"> 
                        <button
                            onClick = {(e : any) => Add_Remove_Product(e)}
                            >
                        {
                            button
                        }
                        </button> 
                    </div>
                </div>
            </div>
            {modal && <PhotoViewer 
          img={products.photo[0]}
          event={close}
        />}
        </div>
    )
};

export default ProductCard
