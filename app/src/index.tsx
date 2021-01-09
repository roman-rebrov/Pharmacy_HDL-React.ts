import React from 'react';
import ReactDOM from 'react-dom';
import './SASS/default.sass'
import App from './App';
import reportWebVitals from './reportWebVitals'; 
import Store from './Redux/Store'
import { State } from './Types/types'
import { Provider } from 'react-redux'
// import './index.css';
interface RenderInt{ 
  render : (props : {}) => void
}
let state = Store.getState() as {State : State}
  
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={Store}>
          <App/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  reportWebVitals();

// }
// render();
// Store.subscribe(render)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals