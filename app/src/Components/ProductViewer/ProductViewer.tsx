import React, { useState } from 'react'
import PhotoViewer from '../Modals/PhotoViewer';

const ProductViewer = (props : any) => {
    console.log(props); 
    if (!props.selectedObject.id) {
        window.location.href = "http://localhost:3000/";
    }
    const { id, name, discribes, photo, cost } = props.selectedObject;
    let buttonAdded = props.addedId.indexOf(id) === -1 ? 'Add' : 'Remove';

    let [modal, setModal]  = useState(false);
    // let [button, setButton] = React.useState(props.addedButton);

    const openModal = () => {
        setModal(true)
    };
    const close = () => {
        setModal(false)
    };

    const Add_Remove_Product = (event : MouseEvent) => {
        props.addedProductFunction(id)
        // button = button === 'Add' ? 'Remove' : 'Add'
        // setButton(button)
    };

    return (
        <div>
            PRODUCT VIEWER 
            <div className=""
                    onClick={() => {openModal()}}
            >
                <img src={photo[0]} alt=""/>
            </div>
            <div className="">{name}</div>
            <div className="">{discribes}</div>
            <div className="">
                {cost.new}
            </div>
            <div className="">
                <button
                            onClick = {(e : any) => Add_Remove_Product(e)}
                >
                    {buttonAdded}
                </button>
            </div>
            {modal && <PhotoViewer 
          img={photo[0]}
          event={close}
        />}
        </div>
    )
}

export default ProductViewer
