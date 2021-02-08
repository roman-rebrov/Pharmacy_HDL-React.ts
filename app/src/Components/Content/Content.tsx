import React from 'react'
import '../../SASS/Content.sass'
// import { JsxElement } from 'typescript'
import { Switch, Route } from 'react-router-dom' 

import { AboutContainer,
        ProdListContainer,
        ProductViewerContainer,
        PayComponentContainer,
        SliderContainer, 
    } from '../../Components'

// import {ProductList, State } from '../../Types/types'

// interface PropsTypes {}

const Content : React.FC<any> = (props ) => {
    // const Event = (e : React.MouseEvent<HTMLDivElement>) => {
        // e.preventDefault()
        // console.log(e.pageX,e.pageY);
        // props.eventPage(e.pageX,e.pageY);
    // };

    
    return ( 
        <div className= "content-main-container" >
            <div className="content-child-container  block" >
                <Switch>
                    <Route exact path='/about' render={() =>  <AboutContainer/>} />
                    <Route exact path='/' render={() => [ <SliderContainer/>,  <ProdListContainer /> ]} />
                    <Route exact path='/productViewer' render={() => <ProductViewerContainer />} />
                    <Route exact path='/payPage' render={() => <PayComponentContainer />} />
                </Switch>
            </div> 
        </div>
    )
};

export default Content
