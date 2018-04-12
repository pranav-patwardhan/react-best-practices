import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import store, { history } from './Store';
import RouteContainer from './redux/containers/RouteContainer';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <RouteContainer />
            </div>
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
