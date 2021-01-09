import React from 'react';
// import './App.css';
import { BrowserRouter as Router,  } from 'react-router-dom'

import HeaderContainer from './Components/Header/HeaderContainer'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'
// import FooterContainer from './Components/Footer/FooterContainer'

// ----
import Store from './Redux/Store'
import {State} from './Types/types'
// import './index.css';
type inProps = {};
interface inState {}
// ----
const App : React.FC = ( ) => {
  return (
      <div className="App">
        <Router>
            <HeaderContainer/>
            <Content/>  
            <Footer/>
        </Router>
      </div>
  )
}

export default App;
