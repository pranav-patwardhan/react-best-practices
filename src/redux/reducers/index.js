import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import Home from './HomeReducer'

const indexReducer = combineReducers({
    router: routerReducer,
    Home
});

export default indexReducer
