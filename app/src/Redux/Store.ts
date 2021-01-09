import InitialState from './initialState'
import {State} from '../Types/types'
import {createStore, combineReducers} from 'redux'
import { rootReducer } from './rootReducer';
import defaultReducer from './defaultReducer';

const Store = createStore(rootReducer as any);
export default Store;


// let reducers : {} = combineReducers({
//     State : defaultReducer,
// }); 