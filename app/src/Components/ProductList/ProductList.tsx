import React from 'react'
import '../../SASS/ProductList.sass'
import ProdCardContainer from '../ProductCards/ProdCardsContainer'
import { State } from '../../Types/types'
import { Provider } from 'react-redux'

const ProductList : React.FC<any> = ( props ) => {
    // console.log(props);
    
    return (
        <div>
            Our Products :
            <div className="product-list">
                {
                    props.Products.list.map((item : any, i : number) : JSX.Element => { 
                        return (
                            <ProdCardContainer  
                                props={item}
                                dispatch= {props.dispatch}
                                added={props.added}
                            >
                                {item}
                            </ProdCardContainer>)
                    })
                }
                
            </div>
        </div>
    )
}

export default ProductList
