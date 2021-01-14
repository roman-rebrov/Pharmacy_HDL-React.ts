import React from 'react'
import { Link } from 'react-router-dom';
import '../../SASS/PayComponent.sass'

const PayComponent : any = (props : any) => {
    let total : number = 0;
    let { remove } = props;
    props.addedToCart.forEach((element : any) => {
        total += Number(element.cost);
    });
    const event = (id : string) => {
        remove(id);
    };
    const eventForView = (id : string) => {
        props.viewer(id)
    };
    console.log(props.addedToCart);
    return (
        <div>
            Pay Component
            <div className="order-objects-wrap">
                <div className="order-objects">
                    { 
                        props.addedToCart.map((el : any , i : number) => (
                            <div key={el.id + i} className="order-objects_item">
                                <Link to='/productViewer' onClick={()=> {eventForView(el.id)}}>
                                    <div className="">
                                        {el.name}
                                    </div>
                                </Link>
                                <div className="">
                                    {el.cost}
                                </div>
                                <div 
                                    className="order-objects-btn-remove"
                                    onClick={() => {
                                        event(el.id)
                                    }}
                                >
                                    &times;
                                </div>
                            </div>
                            )
                        )
                    }
                </div>
            </div>
            <div className="pay" style={{
                display: "flex",
                justifyContent: "flex-end"
            }}>
                <div className="total-cost" style={{

                }}>
                    { total }
                </div>
                <div className="order">
                    <button>Order</button>
                </div>
            </div>
        </div>
    )
}

export default PayComponent
