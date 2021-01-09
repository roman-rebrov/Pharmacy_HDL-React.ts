import React from 'react'
import { JsxElement } from 'typescript'
import { Switch, Route } from 'react-router-dom' 

import { AboutContainer,
        ProdListContainer,
        ProductViewerContainer,
        PayComponent
    } from '../../Components'

import {ProductList, State } from '../../Types/types'

interface PropsTypes {
}

const Content : React.FC<any> = (props ) => {
    const Event = (e : React.MouseEvent<HTMLDivElement>) => {
        // e.preventDefault()
        // console.log(e.pageX,e.pageY);
        // props.eventPage(e.pageX,e.pageY);
    }

    
    return ( 
        <div >
            <div className="block" >
            <Switch>
                <Route exact path='/about' render={() =>  <AboutContainer/>}/>
                <Route exact path='/' render={() => <ProdListContainer />} />
                <Route exact path='/productViewer' render={() => <ProductViewerContainer />} />
                <Route exact path='/payPage' render={() => <PayComponent />} />
            </Switch>
            </div>
        </div>
    )
}

export default Content
