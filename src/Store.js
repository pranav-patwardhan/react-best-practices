import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import virtualReducer from './redux/reducers'
import promiseMiddleware from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension'

export const history = createHistory()
const initialState = {}
const enhancers = []
const middleware = [
    thunk,
    routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(promiseMiddleware),
    ...enhancers
)

const store = createStore(
    virtualReducer,
    initialState,
    composedEnhancers
)

export default store