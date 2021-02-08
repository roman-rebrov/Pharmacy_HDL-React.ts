import React from 'react'
import Slider from './Slider'
import { connect } from 'react-redux'
import '../../SASS/slider.sass'


const SliderContainer = () => {

    const mapStateToProps = (state : any) => {
        return({

        })
    };
    const mapDispatchToProps = (dispatch : any) => {
        return({

        })
    };


    const SliderWrap = connect(mapStateToProps, mapDispatchToProps)(Slider);

    return(<SliderWrap/>);
}

export default SliderContainer;