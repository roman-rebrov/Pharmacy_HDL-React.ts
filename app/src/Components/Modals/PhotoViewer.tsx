import React from 'react'
import '../../SASS/modal-photo.sass'

const PhotoViewer = ({img, event} : {img : string, event : () => void}) : any => {
    const close = (e : any) => {
        event()
    }
    return ( 
        <div className='modal-photo-viewer-wrap'
        onClick={(e) => {
            close(e)
            // e.stopPropagation()
            }}
        >
            <div className="modal-window">
                <div className="close-modal"
                    onClick={(e) => {
                        close(e)
                    }}
                >&times;
                </div>
                <div className="">
                    <img src={img} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default PhotoViewer
