// import { createStore } from "redux";
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import counterReducer from '../reducers/counterReducer';

// const rootReducer = combineReducers({
//     count: counterReducer
// })
// const configureStore = () => {
//     return createStore(rootReducer);
// }


const configureStore = () => {
    const store = createStore(counterReducer, applyMiddleware(thunk));
    return store;
}

export default configureStore;