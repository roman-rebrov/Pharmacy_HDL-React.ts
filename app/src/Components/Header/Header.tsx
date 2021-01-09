import React from 'react'
import { Link } from 'react-router-dom'
import '../../SASS/Header.sass'

const Header : React.FC<any> = (props) => {
    let [ popup, setPopup ] : any = React.useState(false);
    let { addedToCart, addRemove} = props;                      //  products, added ,
    
    const total = (prod: [{cost : string}]) : number => {
        let total : number = 0;
        prod.forEach((item : any, i : number) => {
            // for(let i : number = 0; i <  added.length; i++) {
                // if ( item.id === added[i] ){
                    total += Number(item.cost)
                    // console.log(total);
                // }
            // } 
        })
        return total
    };
    // console.log(props);
    const event = (id : string) => {
        addRemove(id);
    }
    return (
        <div>
            <header className="App-header block" >
                <nav>
                    <Link  to='/'>
                        HOME
                    </Link>
                    <Link to='/about'>
                        ABOUT
                    </Link>
                </nav>
                <div className="cart"            // КОРЗИНА
                    onMouseOver={()=>{
                        setPopup(true)
                    }}
                    onMouseLeave={()=>{
                        setPopup(false)
                    }}
                >
                        <div className="cart-wrap">
                            <div className="cart-total-cost">   
                                {total(addedToCart)}
                            </div>
                            <div className="icon">
                                <i className="fas fa-cart-arrow-down"></i>
                            </div>
                            <div className= {"cart-added-length" && addedToCart.length > 0? 'count-added-products' : ''}>
                                {addedToCart.length === 0 ? 'Корзина пуста' : addedToCart.length}
                            </div>
                        </div>
                        {
                            popup &&
                            <div className="cart-popup">
                                {addedToCart.length === 0 && 'пусто'} <br/>
                                {addedToCart.length === 0 ? 
                                        <div className="">
                                            <div style={{ border : '1px solid',
                                                // backgroundColor: '#899e9d2',
                                                fontSize: '1rem',
                                                backgroundColor: '#899e9d',
                                            }}>in cart</div>
                                        </div>
                                     :
                                     <div className=""> 
                                            <div className="added-products--fast-view_wrap">
                                                {
                                                    addedToCart.map((items : any, i : number) => {
                                                        // debugger
                                                        // for(let i : number = 0; i <  added.length; i++) {
                                                            // if ( items.id === added[i] ){
                                                                return (<div key={items.id} className="added-product">
                                                                            <div className="fast-view--name">
                                                                                {items.name}
                                                                            </div>
                                                                            <div className="fast-view--cost">
                                                                                {items.cost}
                                                                            </div>
                                                                            <div 
                                                                                className="fast-view-remove"
                                                                                onClick={() => {
                                                                                    event(items.id)
                                                                                }}
                                                                            >
                                                                                &times;
                                                                            </div>
                                                                        </div>)
                                                            // }
                                                        // }
                                                    })
                                                }
                                            </div>
                                            <Link to='/payPage' style={{ 
                                                border : '1px solid',
                                                backgroundColor: '#3e6462',
                                                cursor : 'pointer',
                                                color : 'white',
                                                fontSize: '1rem',
                                                display: 'block',
                                                width: '100%'
                                            }}>
                                                {/* <Link to='/productViewer'> */}
                                                    in cart
                                                {/* </Link> */}
                                            </Link>
                                         {/* <input type="button" value='in'/> */}
                                     </div>
                                }
                            </div>
                        }
                </div>
            </header>
        </div> 
    )
}

export default Header;
